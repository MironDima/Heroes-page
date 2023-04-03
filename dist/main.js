/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/ajax.js":
/*!*************************!*\
  !*** ./modules/ajax.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\nconst ajax = () => {\r\n\tconst getData = () => {\r\n\t\tconst heroes = fetch('dbHeroes.json')\r\n\t\theroes\r\n\t\t\t.then(response => response.json())\r\n\t\t\t.then(data => (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(data))\r\n\t\t\t.catch(error => console.log(error))\r\n\t}\r\n\tgetData()\r\n\tconsole.log('hi');\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajax);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/ajax.js?");

/***/ }),

/***/ "./modules/filter.js":
/*!***************************!*\
  !*** ./modules/filter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filter = () => {\r\n\tconst dropList = document.querySelectorAll('.drop-list')\r\nconsole.log('dropList');\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/filter.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n\r\nconst render = (data) => {\r\n\t\r\n\tdata.forEach(item => {\r\n\t\tlet arr = [];\r\n\t\tconst renderMovies = () => {\r\n\t\t\tif (item.movies) {\r\n\t\t\t\titem.movies.map(film => {\r\n\t\t\t\t\tarr.push(`<span>${film}</span>`)\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\trenderMovies();\r\n\t\tconst row = document.querySelector('.row');\r\n\t\tconst div = document.createElement('div');\r\n\t\tdiv.classList.add(\"block_heroes\")\r\n\t\tdiv.innerHTML = `<div class=\"card\">` +\r\n\t\t\t`<div class=\"card-header\">` +\r\n\t\t\t`<span>${item.name}</span> </div>` +\r\n\t\t\t`<img src= ${item.photo} class=\"card-img-top\" alt=${item.name ? item.name : \"no data available\"}>` +\r\n\t\t\t`<ul class=\"list-group list-group-flush\">` +\r\n\t\t\t`<li class=\"list-group-item\"><span>Real name : </span>${item.realName ? item.realName : \"no data available\"}</li>` +\r\n\t\t\t`<li class=\"list-group-item\"><span>Species : </span>${item.species ? item.species : \"no data available\"}</li>` +\r\n\t\t\t`<li class=\"list-group-item\"><span>Citizenship : </span>${item.citizenship ? item.citizenship : \"no data available\"}</li>` +\r\n\t\t\t`<li class=\"list-group-item\"><span>Birthday : </span>${item.birthDay ? item.birthDay : \"no data available\"}</li>` +\r\n\t\t\t`<li class=\"list-group-item\"><span>Gender : </span>${item.gender ? item.gender : \"no data available\"}</li>` +\r\n\t\t\t`<li class=\"list-group-item\"><span>Death day : </span>${item.deathDay ? item.deathDay : \"no data available\"}</li>` +\r\n\t\t\t`<li class=\"list-group-item\"><span>Status : </span>${item.status ? item.status : \"no data available\"}</li>` +\r\n\t\t\t`</ul>` +\r\n\t\t\t`<div class=\"card-body\">` +\r\n\t\t\t`<h5 class=\"card-title\">Movies</h5>` +\r\n\t\t\t`<p class=\"card-text\">${arr.join('')}</p>` +\r\n\t\t\t`</div>` +\r\n\t\t\t`</div>`\r\n\r\n\t\trow.append(div)\r\n\t\t\r\n\t\tconsole.log(div);\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/render.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ajax */ \"./modules/ajax.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/filter */ \"./modules/filter.js\");\n\r\n\r\n\r\n\r\n(0,_modules_ajax__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_filter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;