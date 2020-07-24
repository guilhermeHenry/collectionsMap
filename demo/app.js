/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const selectors = __webpack_require__(/*! ./selectors */ \"./src/selectors.js\");\r\nconst collectionsMap = __webpack_require__(/*! ./collectionsMap */ \"./src/collectionsMap.js\");\r\nconst validator = __webpack_require__(/*! ./validator */ \"./src/validator.js\");\r\n\r\nconst result = collectionsMap(document.getElementById('state1'), {\r\n\toutput: '.output',\r\n\tselectMainNode: 'div.select#state1',\r\n\toptionsContainer: '.options',\r\n\toption:  '*(parent:options)[class=option]',\r\n\tselected:  '(parent:options).selected',\r\n});\r\n\r\nconsole.log(result);\r\n\r\n// let a = validator(document.getElementById('elementTeste'), selectors('#myId'));\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/collectionsMap.js":
/*!*******************************!*\
  !*** ./src/collectionsMap.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const selectors = __webpack_require__(/*! ./selectors */ \"./src/selectors.js\");\r\nconst validator = __webpack_require__(/*! ./validator */ \"./src/validator.js\");\r\n\r\nmodule.exports = function(main_Node, struture) {\r\n\tconst filterValidate = [];\r\n\tconst elements = {};\r\n\r\n\tfor(const name in struture){\r\n\t\tlet value\t = struture[name];\r\n\t\tlet multiple = value.match(/^\\*/) ? true : false;\r\n\t\tlet parent   = value.match(/\\(parent:([\\w\\d]+)\\)/i);\r\n\t\t\r\n\r\n\t\t// ### PARENT\r\n\t\tif (parent){\r\n\t\t\tvalue  = value.replace(parent[0], '');\r\n\t\t\tparent = parent[1];\r\n\t\t}\r\n\r\n\t\t// ### CLEAR\r\n\t\tif (multiple){\r\n\t\t\tvalue = value.replace('*', '');\r\n\t\t}\r\n\r\n\t\t// Ordem name, filter, multiple, parent\r\n\t\tfilterValidate.push({name: name, filter: selectors(value), multiple: multiple, parent: parent});\r\n\t\telements[name] =  multiple ? [] : null;\r\n\t}\r\n\t\r\n\r\n\tfunction getAllElements(element, elementParentName = null) {\r\n\t\tlet parentName = null;\r\n\r\n\t\tfilterValidate.forEach(function ({name, filter, multiple, parent}) {\r\n\t\t\tlet ruleFilter = filter ? validator(element, filter) : true;\r\n\t\t\tlet ruleParent  = !parent ? true : false;\r\n\r\n\t\t\t// ### PARENT\r\n\t\t\tif (elementParentName && parent){\r\n\t\t\t\truleParent = parent === elementParentName ? true : false;\r\n\t\t\t}\r\n\r\n\t\t\t// ### EXE\r\n\t\t\tif (ruleFilter && ruleParent){\r\n\t\t\t\tparentName = name;\r\n\r\n\t\t\t\t// multiple\r\n\t\t\t\tif (multiple){\r\n\t\t\t\t\telements[name].push(element);\r\n\t\t\t\t}else{\r\n\t\t\t\t\telements[name] = element;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\t// ##### CHILDREN -----\r\n\t\tconst children   = element.children;\r\n\t\tconst total      = children.length;\r\n\r\n\t\tif (total > 0){\r\n\t\t\tfor(var i = 0; i < total; i++){\r\n\t\t\t\tgetAllElements(children[i], parentName);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t// ## EXE\r\n\tgetAllElements(main_Node);\r\n\r\n\treturn elements;\r\n}\n\n//# sourceURL=webpack:///./src/collectionsMap.js?");

/***/ }),

/***/ "./src/selectors.js":
/*!**************************!*\
  !*** ./src/selectors.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (data) {\r\n\tlet parse = [];\r\n\r\n\t[\r\n\t\t['id',      /#([\\w\\d]+)/i],\r\n\t\t['tagname', /^[\\w\\d]+/i],\r\n\t\t['class',   /\\.[\\w\\d]+/gi],\r\n\t\t['attr',    /\\[[\\w\\d]+([\\^\\$\\~\\*]?=[\\w\\d]+)?\\]/gi]\r\n\t].forEach(function ([name, regex]) {\r\n\t\tlet search = data.match(regex);\r\n\r\n\t\tif (search){\r\n\t\t\tparse.push([name, filters(name, search)]);\r\n\t\t}\r\n\t});\r\n\r\n\treturn parse.length > 0 ? parse : null;\r\n}\r\n\r\nconst filters = function (type, search) {\r\n\tlet filter = {\r\n\t\tclass: function () {\r\n\t\t\treturn search.map(item => item.replace('.', ''));\r\n\t\t},\r\n\t\tid: function () {\r\n\t\t\treturn search[1];\r\n\t\t},\r\n\t\ttagname: function () {\r\n\t\t\treturn search[0];\r\n\t\t},\r\n\t\tattr: function () {\r\n\t\t\treturn search.map(item => {\r\n\t\t\t\tlet match = item.match(/\\[([\\w\\d]+)(([\\^\\$\\~\\*]?=)([\\w\\d]+))?\\]/);\r\n\t\t\t\tlet name      = match[1];\r\n\t\t\t\tlet operator  = match[3] != undefined ? match[3] : null;\r\n\t\t\t\tlet value     = match[4] != undefined ? match[4] : null;\r\n\t\t\t\t\r\n\t\t\t\treturn [name, operator, value];\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n\r\n\treturn filter.hasOwnProperty(type) ? filter[type]() : null;\r\n}\n\n//# sourceURL=webpack:///./src/selectors.js?");

/***/ }),

/***/ "./src/validator.js":
/*!**************************!*\
  !*** ./src/validator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @object DOM element, @array selectors */\r\nmodule.exports = function (element, selectors) {\r\n\r\n\t// https://css-tricks.com/almanac/selectors/a/attribute/\r\n\tfunction attributeSelectors([name, operator, value]) {\r\n\r\n\t\t/* Attribute exists */\r\n\t\tif (element.hasAttribute(name)){\r\n\t\t\tif (operator && value){\r\n\t\t\t\tswitch(operator){\r\n\r\n\t\t\t\t\t/* Attribute has this exact value */\r\n\t\t\t\t\tcase '=':\r\n\t\t\t\t\t\treturn element.getAttribute(name) === value;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t/* Attribute value contains this value somewhere in it */\r\n\t\t\t\t\tcase '*=':\r\n\t\t\t\t\t\treturn element.getAttribute(name).match(new RegExp(value, 'i')) ? true : false;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t/* Attribute has this value in a space-separated list somewhere */\r\n\t\t\t\t\tcase '~=':\r\n\t\t\t\t\t\treturn element.getAttribute(name).match(new RegExp(\"\\\\s\" + value, 'i')) ? true : false;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t/* Attribute value starts with this */\r\n\t\t\t\t\tcase '^=':\r\n\t\t\t\t\t\treturn element.getAttribute(name).match(new RegExp('^' + value, 'i')) ? true : false;\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn true;\r\n\t\t}\r\n\t\t\r\n\t\treturn false;\r\n\t}\r\n\r\n\treturn selectors.every(([name, search]) => {\r\n\t\tswitch(name){\r\n\t\t\tcase 'class':\r\n\t\t\t\treturn search.every(cls => element.classList.contains(cls));\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'attr':\r\n\t\t\t\treturn search.every(attributeSelectors);\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'id':\r\n\t\t\t\treturn element.hasAttribute('id') && element.id === search ? true : false;\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'tagname':\r\n\t\t\t\treturn element.tagName.toUpperCase() === search.toUpperCase();\r\n\t\t\t\tbreak;\r\n\t\t\tdefault:\r\n\t\t\t\treturn false;\r\n\t\t}\r\n\t});\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/validator.js?");

/***/ })

/******/ });