const selectors = require('./selectors');
const validator = require('./validator');

module.exports = function(main_Node, struture) {
	const filterValidate = [];
	const elements = {};

	for(let name in struture){
		let value = struture[name];

		if (value){
			let multiple = value.match(/^\*/) ? true : false;
			let parent   = value.match(/\(parent:([\w\d]+)\)/i);
			

			// ### PARENT
			if (parent){
				value  = value.replace(parent[0], '');
				parent = parent[1];
			}

			// ### CLEAR
			if (multiple){
				value = value.replace('*', '');
			}

			// Ordem name, filter, multiple, parent
			filterValidate.push({name: name, filter: selectors(value), multiple: multiple, parent: parent});
			elements[name] =  multiple ? [] : null;
		}

		elements[name] = null;
	}

	function getAllElements(element, elementParentName = null) {
		let parentName = null;

		filterValidate.forEach(function ({name, filter, multiple, parent}) {
			let ruleFilter = filter ? validator(element, filter) : true;
			let ruleParent  = !parent ? true : false;

			// ### PARENT
			if (elementParentName && parent){
				ruleParent = parent === elementParentName ? true : false;
			}

			// ### EXE
			if (ruleFilter && ruleParent){
				parentName = name;

				// multiple
				if (multiple){
					elements[name].push(element);
				}else{
					elements[name] = element;
				}
			}
		});

		// ##### CHILDREN -----
		const children   = element.children;
		const total      = children.length;

		if (total > 0){
			for(var i = 0; i < total; i++){
				getAllElements(children[i], parentName);
			}
		}
	}

	// ## EXE
	getAllElements(main_Node);

	return elements;
}