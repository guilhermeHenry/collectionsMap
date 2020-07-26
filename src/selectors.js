module.exports = function (data) {
	let parse = [];

	[
		['id',      /#([\w\d-_]+)/i],
		['tagname', /^[\w\d]+/i],
		['class',   /\.[\w\d-_]+/gi],
		['attr',    /\[[\w\d]+([\^\$\~\*]?=[\w\d]+)?\]/gi]
	].forEach(function ([name, regex]) {
		let search = data.match(regex);

		if (search){
			parse.push([name, filters(name, search)]);
		}
	});

	return parse.length > 0 ? parse : null;
}

const filters = function (type, search) {
	let filter = {
		class: function () {
			return search.map(item => item.replace('.', ''));
		},
		id: function () {
			return search[1];
		},
		tagname: function () {
			return search[0];
		},
		attr: function () {
			return search.map(item => {
				let match = item.match(/\[([\w\d]+)(([\^\$\~\*]?=)([\w\d]+))?\]/);
				let name      = match[1];
				let operator  = match[3] != undefined ? match[3] : null;
				let value     = match[4] != undefined ? match[4] : null;
				
				return [name, operator, value];
			});
		}
	}

	return filter.hasOwnProperty(type) ? filter[type]() : null;
}