/** @object DOM element, @array selectors */
module.exports = function (element, selectors) {

	// https://css-tricks.com/almanac/selectors/a/attribute/
	function attributeSelectors([name, operator, value]) {

		/* Attribute exists */
		if (element.hasAttribute(name)){
			if (operator && value){
				switch(operator){

					/* Attribute has this exact value */
					case '=':
						return element.getAttribute(name) === value;
						break;

					/* Attribute value contains this value somewhere in it */
					case '*=':
						return element.getAttribute(name).match(new RegExp(value, 'i')) ? true : false;
						break;

					/* Attribute has this value in a space-separated list somewhere */
					case '~=':
						return element.getAttribute(name).match(new RegExp("\\s" + value, 'i')) ? true : false;
						break;

					/* Attribute value starts with this */
					case '^=':
						return element.getAttribute(name).match(new RegExp('^' + value, 'i')) ? true : false;
						break;
				}
			}

			return true;
		}
		
		return false;
	}

	return selectors.every(([name, search]) => {
		switch(name){
			case 'class':
				return search.every(cls => element.classList.contains(cls));
				break;
			case 'attr':
				return search.every(attributeSelectors);
				break;
			case 'id':
				return element.hasAttribute('id') && element.id === search ? true : false;
				break;
			case 'tagname':
				return element.tagName.toUpperCase() === search.toUpperCase();
				break;
			default:
				return false;
		}
	});
}


