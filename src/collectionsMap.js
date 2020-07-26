const selectors = require('./selectors');
const validator = require('./validator');

module.exports = function(elementParent, struture) {
	const collections = {
		filters: [],
		elements: {}
	};

	for(let name in struture){
		let value = struture[name];

		if (value && typeof value == 'string'){
			let multiple = value.match(/^\*/) ? true : false;
			let parent   = value.match(/\(parent:([\w\d]+)\)/i);
			
			// ### PARENT
			if (parent){
				value  = value.replace(parent[0], '');
				parent = parent[1];
			}

			// ### CLEAR
			if (multiple){value = value.replace('*', '')}

			let filter = selectors(value);

			if (filter || parent){
				collections.filters.push({name: name, filter: filter, multiple: multiple, parent: parent});
				collections.elements[name] =  multiple ? [] : null;
			}
		}else{
			collections.elements[name] = value;
		}
	}

	const map = function (element, elementParentName = null) {
		let parentName = null;

		collections.filters.forEach(function ({name, filter, multiple, parent}) {
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
					collections.elements[name].push(element);
				}else{
					collections.elements[name] = element;
				}
			}
		});

		// ##### CHILDREN -----
		const children   = element.children;
		const total      = children.length;

		if (total > 0){
			for(var i = 0; i < total; i++){
				map(children[i], parentName);
			}
		}
	}

	// ## EXE
	map(elementParent);

	return collections.elements;
}