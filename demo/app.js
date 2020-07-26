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

eval("const collectionsMap = __webpack_require__(/*! ./collectionsMap */ \"./src/collectionsMap.js\");\r\nconst result = collectionsMap(document.getElementById('state1'), {\r\n\toutput: '*',\r\n\tselectMainNode: 'div.select#state1',\r\n\toptionsContainer: '.options',\r\n\toption:  '*(parent:options)[class=option]',\r\n\tselected:  '(parent:options).selected',\r\n});\r\n\r\nconsole.log(result);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbGxlY3Rpb25zTWFwID0gcmVxdWlyZSgnLi9jb2xsZWN0aW9uc01hcCcpO1xyXG5jb25zdCByZXN1bHQgPSBjb2xsZWN0aW9uc01hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGUxJyksIHtcclxuXHRvdXRwdXQ6ICcqJyxcclxuXHRzZWxlY3RNYWluTm9kZTogJ2Rpdi5zZWxlY3Qjc3RhdGUxJyxcclxuXHRvcHRpb25zQ29udGFpbmVyOiAnLm9wdGlvbnMnLFxyXG5cdG9wdGlvbjogICcqKHBhcmVudDpvcHRpb25zKVtjbGFzcz1vcHRpb25dJyxcclxuXHRzZWxlY3RlZDogICcocGFyZW50Om9wdGlvbnMpLnNlbGVjdGVkJyxcclxufSk7XHJcblxyXG5jb25zb2xlLmxvZyhyZXN1bHQpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/collectionsMap.js":
/*!*******************************!*\
  !*** ./src/collectionsMap.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const selectors = __webpack_require__(/*! ./selectors */ \"./src/selectors.js\");\r\nconst validator = __webpack_require__(/*! ./validator */ \"./src/validator.js\");\r\n\r\nmodule.exports = function(elementParent, struture) {\r\n\tconst collections = {\r\n\t\tfilters: [],\r\n\t\telements: {}\r\n\t};\r\n\r\n\tfor(let name in struture){\r\n\t\tlet value = struture[name];\r\n\r\n\t\tif (value && typeof value == 'string'){\r\n\t\t\tlet multiple = value.match(/^\\*/) ? true : false;\r\n\t\t\tlet parent   = value.match(/\\(parent:([\\w\\d]+)\\)/i);\r\n\t\t\t\r\n\t\t\t// ### PARENT\r\n\t\t\tif (parent){\r\n\t\t\t\tvalue  = value.replace(parent[0], '');\r\n\t\t\t\tparent = parent[1];\r\n\t\t\t}\r\n\r\n\t\t\t// ### CLEAR\r\n\t\t\tif (multiple){value = value.replace('*', '')}\r\n\r\n\t\t\tlet filter = selectors(value);\r\n\r\n\t\t\tif (filter || parent){\r\n\t\t\t\t// Ordem name, filter, multiple, parent\r\n\t\t\t\tcollections.filters.push({name: name, filter: filter, multiple: multiple, parent: parent});\r\n\t\t\t\tcollections.elements[name] =  multiple ? [] : null;\r\n\t\t\t}\r\n\t\t}else{\r\n\t\t\tcollections.elements[name] = value;\r\n\t\t}\r\n\t}\r\n\r\n\tconst map = function (element, elementParentName = null) {\r\n\t\tlet parentName = null;\r\n\r\n\t\tcollections.filters.forEach(function ({name, filter, multiple, parent}) {\r\n\t\t\tlet ruleFilter = filter ? validator(element, filter) : true;\r\n\t\t\tlet ruleParent  = !parent ? true : false;\r\n\r\n\t\t\t// ### PARENT\r\n\t\t\tif (elementParentName && parent){\r\n\t\t\t\truleParent = parent === elementParentName ? true : false;\r\n\t\t\t}\r\n\r\n\t\t\t// ### EXE\r\n\t\t\tif (ruleFilter && ruleParent){\r\n\t\t\t\tparentName = name;\r\n\r\n\t\t\t\t// multiple\r\n\t\t\t\tif (multiple){\r\n\t\t\t\t\tcollections.elements[name].push(element);\r\n\t\t\t\t}else{\r\n\t\t\t\t\tcollections.elements[name] = element;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\t// ##### CHILDREN -----\r\n\t\tconst children   = element.children;\r\n\t\tconst total      = children.length;\r\n\r\n\t\tif (total > 0){\r\n\t\t\tfor(var i = 0; i < total; i++){\r\n\t\t\t\tmap(children[i], parentName);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t// ## EXE\r\n\tmap(elementParent);\r\n\r\n\treturn collections.elements;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29sbGVjdGlvbnNNYXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29sbGVjdGlvbnNNYXAuanM/NjVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWxlY3RvcnMgPSByZXF1aXJlKCcuL3NlbGVjdG9ycycpO1xyXG5jb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKCcuL3ZhbGlkYXRvcicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbGVtZW50UGFyZW50LCBzdHJ1dHVyZSkge1xyXG5cdGNvbnN0IGNvbGxlY3Rpb25zID0ge1xyXG5cdFx0ZmlsdGVyczogW10sXHJcblx0XHRlbGVtZW50czoge31cclxuXHR9O1xyXG5cclxuXHRmb3IobGV0IG5hbWUgaW4gc3RydXR1cmUpe1xyXG5cdFx0bGV0IHZhbHVlID0gc3RydXR1cmVbbmFtZV07XHJcblxyXG5cdFx0aWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyl7XHJcblx0XHRcdGxldCBtdWx0aXBsZSA9IHZhbHVlLm1hdGNoKC9eXFwqLykgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdGxldCBwYXJlbnQgICA9IHZhbHVlLm1hdGNoKC9cXChwYXJlbnQ6KFtcXHdcXGRdKylcXCkvaSk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyAjIyMgUEFSRU5UXHJcblx0XHRcdGlmIChwYXJlbnQpe1xyXG5cdFx0XHRcdHZhbHVlICA9IHZhbHVlLnJlcGxhY2UocGFyZW50WzBdLCAnJyk7XHJcblx0XHRcdFx0cGFyZW50ID0gcGFyZW50WzFdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyAjIyMgQ0xFQVJcclxuXHRcdFx0aWYgKG11bHRpcGxlKXt2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoJyonLCAnJyl9XHJcblxyXG5cdFx0XHRsZXQgZmlsdGVyID0gc2VsZWN0b3JzKHZhbHVlKTtcclxuXHJcblx0XHRcdGlmIChmaWx0ZXIgfHwgcGFyZW50KXtcclxuXHRcdFx0XHQvLyBPcmRlbSBuYW1lLCBmaWx0ZXIsIG11bHRpcGxlLCBwYXJlbnRcclxuXHRcdFx0XHRjb2xsZWN0aW9ucy5maWx0ZXJzLnB1c2goe25hbWU6IG5hbWUsIGZpbHRlcjogZmlsdGVyLCBtdWx0aXBsZTogbXVsdGlwbGUsIHBhcmVudDogcGFyZW50fSk7XHJcblx0XHRcdFx0Y29sbGVjdGlvbnMuZWxlbWVudHNbbmFtZV0gPSAgbXVsdGlwbGUgPyBbXSA6IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjb2xsZWN0aW9ucy5lbGVtZW50c1tuYW1lXSA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgbWFwID0gZnVuY3Rpb24gKGVsZW1lbnQsIGVsZW1lbnRQYXJlbnROYW1lID0gbnVsbCkge1xyXG5cdFx0bGV0IHBhcmVudE5hbWUgPSBudWxsO1xyXG5cclxuXHRcdGNvbGxlY3Rpb25zLmZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoe25hbWUsIGZpbHRlciwgbXVsdGlwbGUsIHBhcmVudH0pIHtcclxuXHRcdFx0bGV0IHJ1bGVGaWx0ZXIgPSBmaWx0ZXIgPyB2YWxpZGF0b3IoZWxlbWVudCwgZmlsdGVyKSA6IHRydWU7XHJcblx0XHRcdGxldCBydWxlUGFyZW50ICA9ICFwYXJlbnQgPyB0cnVlIDogZmFsc2U7XHJcblxyXG5cdFx0XHQvLyAjIyMgUEFSRU5UXHJcblx0XHRcdGlmIChlbGVtZW50UGFyZW50TmFtZSAmJiBwYXJlbnQpe1xyXG5cdFx0XHRcdHJ1bGVQYXJlbnQgPSBwYXJlbnQgPT09IGVsZW1lbnRQYXJlbnROYW1lID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyAjIyMgRVhFXHJcblx0XHRcdGlmIChydWxlRmlsdGVyICYmIHJ1bGVQYXJlbnQpe1xyXG5cdFx0XHRcdHBhcmVudE5hbWUgPSBuYW1lO1xyXG5cclxuXHRcdFx0XHQvLyBtdWx0aXBsZVxyXG5cdFx0XHRcdGlmIChtdWx0aXBsZSl7XHJcblx0XHRcdFx0XHRjb2xsZWN0aW9ucy5lbGVtZW50c1tuYW1lXS5wdXNoKGVsZW1lbnQpO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0Y29sbGVjdGlvbnMuZWxlbWVudHNbbmFtZV0gPSBlbGVtZW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gIyMjIyMgQ0hJTERSRU4gLS0tLS1cclxuXHRcdGNvbnN0IGNoaWxkcmVuICAgPSBlbGVtZW50LmNoaWxkcmVuO1xyXG5cdFx0Y29uc3QgdG90YWwgICAgICA9IGNoaWxkcmVuLmxlbmd0aDtcclxuXHJcblx0XHRpZiAodG90YWwgPiAwKXtcclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRvdGFsOyBpKyspe1xyXG5cdFx0XHRcdG1hcChjaGlsZHJlbltpXSwgcGFyZW50TmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vICMjIEVYRVxyXG5cdG1hcChlbGVtZW50UGFyZW50KTtcclxuXHJcblx0cmV0dXJuIGNvbGxlY3Rpb25zLmVsZW1lbnRzO1xyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/collectionsMap.js\n");

/***/ }),

/***/ "./src/selectors.js":
/*!**************************!*\
  !*** ./src/selectors.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (data) {\r\n\tlet parse = [];\r\n\r\n\t[\r\n\t\t['id',      /#([\\w\\d]+)/i],\r\n\t\t['tagname', /^[\\w\\d]+/i],\r\n\t\t['class',   /\\.[\\w\\d]+/gi],\r\n\t\t['attr',    /\\[[\\w\\d]+([\\^\\$\\~\\*]?=[\\w\\d]+)?\\]/gi]\r\n\t].forEach(function ([name, regex]) {\r\n\t\tlet search = data.match(regex);\r\n\r\n\t\tif (search){\r\n\t\t\tparse.push([name, filters(name, search)]);\r\n\t\t}\r\n\t});\r\n\r\n\treturn parse.length > 0 ? parse : null;\r\n}\r\n\r\nconst filters = function (type, search) {\r\n\tlet filter = {\r\n\t\tclass: function () {\r\n\t\t\treturn search.map(item => item.replace('.', ''));\r\n\t\t},\r\n\t\tid: function () {\r\n\t\t\treturn search[1];\r\n\t\t},\r\n\t\ttagname: function () {\r\n\t\t\treturn search[0];\r\n\t\t},\r\n\t\tattr: function () {\r\n\t\t\treturn search.map(item => {\r\n\t\t\t\tlet match = item.match(/\\[([\\w\\d]+)(([\\^\\$\\~\\*]?=)([\\w\\d]+))?\\]/);\r\n\t\t\t\tlet name      = match[1];\r\n\t\t\t\tlet operator  = match[3] != undefined ? match[3] : null;\r\n\t\t\t\tlet value     = match[4] != undefined ? match[4] : null;\r\n\t\t\t\t\r\n\t\t\t\treturn [name, operator, value];\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n\r\n\treturn filter.hasOwnProperty(type) ? filter[type]() : null;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VsZWN0b3JzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdG9ycy5qcz8xY2QzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHRsZXQgcGFyc2UgPSBbXTtcclxuXHJcblx0W1xyXG5cdFx0WydpZCcsICAgICAgLyMoW1xcd1xcZF0rKS9pXSxcclxuXHRcdFsndGFnbmFtZScsIC9eW1xcd1xcZF0rL2ldLFxyXG5cdFx0WydjbGFzcycsICAgL1xcLltcXHdcXGRdKy9naV0sXHJcblx0XHRbJ2F0dHInLCAgICAvXFxbW1xcd1xcZF0rKFtcXF5cXCRcXH5cXCpdPz1bXFx3XFxkXSspP1xcXS9naV1cclxuXHRdLmZvckVhY2goZnVuY3Rpb24gKFtuYW1lLCByZWdleF0pIHtcclxuXHRcdGxldCBzZWFyY2ggPSBkYXRhLm1hdGNoKHJlZ2V4KTtcclxuXHJcblx0XHRpZiAoc2VhcmNoKXtcclxuXHRcdFx0cGFyc2UucHVzaChbbmFtZSwgZmlsdGVycyhuYW1lLCBzZWFyY2gpXSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBwYXJzZS5sZW5ndGggPiAwID8gcGFyc2UgOiBudWxsO1xyXG59XHJcblxyXG5jb25zdCBmaWx0ZXJzID0gZnVuY3Rpb24gKHR5cGUsIHNlYXJjaCkge1xyXG5cdGxldCBmaWx0ZXIgPSB7XHJcblx0XHRjbGFzczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gc2VhcmNoLm1hcChpdGVtID0+IGl0ZW0ucmVwbGFjZSgnLicsICcnKSk7XHJcblx0XHR9LFxyXG5cdFx0aWQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHNlYXJjaFsxXTtcclxuXHRcdH0sXHJcblx0XHR0YWduYW1lOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBzZWFyY2hbMF07XHJcblx0XHR9LFxyXG5cdFx0YXR0cjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gc2VhcmNoLm1hcChpdGVtID0+IHtcclxuXHRcdFx0XHRsZXQgbWF0Y2ggPSBpdGVtLm1hdGNoKC9cXFsoW1xcd1xcZF0rKSgoW1xcXlxcJFxcflxcKl0/PSkoW1xcd1xcZF0rKSk/XFxdLyk7XHJcblx0XHRcdFx0bGV0IG5hbWUgICAgICA9IG1hdGNoWzFdO1xyXG5cdFx0XHRcdGxldCBvcGVyYXRvciAgPSBtYXRjaFszXSAhPSB1bmRlZmluZWQgPyBtYXRjaFszXSA6IG51bGw7XHJcblx0XHRcdFx0bGV0IHZhbHVlICAgICA9IG1hdGNoWzRdICE9IHVuZGVmaW5lZCA/IG1hdGNoWzRdIDogbnVsbDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm4gW25hbWUsIG9wZXJhdG9yLCB2YWx1ZV07XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZpbHRlci5oYXNPd25Qcm9wZXJ0eSh0eXBlKSA/IGZpbHRlclt0eXBlXSgpIDogbnVsbDtcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/selectors.js\n");

/***/ }),

/***/ "./src/validator.js":
/*!**************************!*\
  !*** ./src/validator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @object DOM element, @array selectors */\r\nmodule.exports = function (element, selectors) {\r\n\r\n\t// https://css-tricks.com/almanac/selectors/a/attribute/\r\n\tfunction attributeSelectors([name, operator, value]) {\r\n\r\n\t\t/* Attribute exists */\r\n\t\tif (element.hasAttribute(name)){\r\n\t\t\tif (operator && value){\r\n\t\t\t\tswitch(operator){\r\n\r\n\t\t\t\t\t/* Attribute has this exact value */\r\n\t\t\t\t\tcase '=':\r\n\t\t\t\t\t\treturn element.getAttribute(name) === value;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t/* Attribute value contains this value somewhere in it */\r\n\t\t\t\t\tcase '*=':\r\n\t\t\t\t\t\treturn element.getAttribute(name).match(new RegExp(value, 'i')) ? true : false;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t/* Attribute has this value in a space-separated list somewhere */\r\n\t\t\t\t\tcase '~=':\r\n\t\t\t\t\t\treturn element.getAttribute(name).match(new RegExp(\"\\\\s\" + value, 'i')) ? true : false;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t/* Attribute value starts with this */\r\n\t\t\t\t\tcase '^=':\r\n\t\t\t\t\t\treturn element.getAttribute(name).match(new RegExp('^' + value, 'i')) ? true : false;\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn true;\r\n\t\t}\r\n\t\t\r\n\t\treturn false;\r\n\t}\r\n\r\n\treturn selectors.every(([name, search]) => {\r\n\t\tswitch(name){\r\n\t\t\tcase 'class':\r\n\t\t\t\treturn search.every(cls => element.classList.contains(cls));\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'attr':\r\n\t\t\t\treturn search.every(attributeSelectors);\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'id':\r\n\t\t\t\treturn element.hasAttribute('id') && element.id === search ? true : false;\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'tagname':\r\n\t\t\t\treturn element.tagName.toUpperCase() === search.toUpperCase();\r\n\t\t\t\tbreak;\r\n\t\t\tdefault:\r\n\t\t\t\treturn false;\r\n\t\t}\r\n\t});\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmFsaWRhdG9yLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvci5qcz9lYTQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAb2JqZWN0IERPTSBlbGVtZW50LCBAYXJyYXkgc2VsZWN0b3JzICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNlbGVjdG9ycykge1xyXG5cclxuXHQvLyBodHRwczovL2Nzcy10cmlja3MuY29tL2FsbWFuYWMvc2VsZWN0b3JzL2EvYXR0cmlidXRlL1xyXG5cdGZ1bmN0aW9uIGF0dHJpYnV0ZVNlbGVjdG9ycyhbbmFtZSwgb3BlcmF0b3IsIHZhbHVlXSkge1xyXG5cclxuXHRcdC8qIEF0dHJpYnV0ZSBleGlzdHMgKi9cclxuXHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKSl7XHJcblx0XHRcdGlmIChvcGVyYXRvciAmJiB2YWx1ZSl7XHJcblx0XHRcdFx0c3dpdGNoKG9wZXJhdG9yKXtcclxuXHJcblx0XHRcdFx0XHQvKiBBdHRyaWJ1dGUgaGFzIHRoaXMgZXhhY3QgdmFsdWUgKi9cclxuXHRcdFx0XHRcdGNhc2UgJz0nOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSkgPT09IHZhbHVlO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHQvKiBBdHRyaWJ1dGUgdmFsdWUgY29udGFpbnMgdGhpcyB2YWx1ZSBzb21ld2hlcmUgaW4gaXQgKi9cclxuXHRcdFx0XHRcdGNhc2UgJyo9JzpcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpLm1hdGNoKG5ldyBSZWdFeHAodmFsdWUsICdpJykpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHQvKiBBdHRyaWJ1dGUgaGFzIHRoaXMgdmFsdWUgaW4gYSBzcGFjZS1zZXBhcmF0ZWQgbGlzdCBzb21ld2hlcmUgKi9cclxuXHRcdFx0XHRcdGNhc2UgJ349JzpcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpLm1hdGNoKG5ldyBSZWdFeHAoXCJcXFxcc1wiICsgdmFsdWUsICdpJykpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHQvKiBBdHRyaWJ1dGUgdmFsdWUgc3RhcnRzIHdpdGggdGhpcyAqL1xyXG5cdFx0XHRcdFx0Y2FzZSAnXj0nOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSkubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyB2YWx1ZSwgJ2knKSkgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzZWxlY3RvcnMuZXZlcnkoKFtuYW1lLCBzZWFyY2hdKSA9PiB7XHJcblx0XHRzd2l0Y2gobmFtZSl7XHJcblx0XHRcdGNhc2UgJ2NsYXNzJzpcclxuXHRcdFx0XHRyZXR1cm4gc2VhcmNoLmV2ZXJ5KGNscyA9PiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbHMpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnYXR0cic6XHJcblx0XHRcdFx0cmV0dXJuIHNlYXJjaC5ldmVyeShhdHRyaWJ1dGVTZWxlY3RvcnMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdpZCc6XHJcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdpZCcpICYmIGVsZW1lbnQuaWQgPT09IHNlYXJjaCA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAndGFnbmFtZSc6XHJcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSBzZWFyY2gudG9VcHBlckNhc2UoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/validator.js\n");

/***/ })

/******/ });