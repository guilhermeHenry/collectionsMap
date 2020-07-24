const collectionsMap = require('./collectionsMap');
const result = collectionsMap(document.getElementById('state1'), {
	output: '.output',
	selectMainNode: 'div.select#state1',
	optionsContainer: '.options',
	option:  '*(parent:options)[class=option]',
	selected:  '(parent:options).selected',
});

console.log(result);