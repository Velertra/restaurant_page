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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _render2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render2 */ \"./src/render2.js\");\n/* harmony import */ var _render3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render3 */ \"./src/render3.js\");\n\n\n\n\n\n\n\n\n\nclass TabSelect {\n    \n    display() {\n        let tabs = document.createElement('div'),\n            firstTab = document.createElement('div'),\n            secondTab = document.createElement('div'),\n            thirdTab = document.createElement('div');\n      //  let parent = element.parentNode;\n        \n        tabs.classList.add('tab_container');\n        tabs.setAttribute('id', 'tab_container');\n        content.appendChild(tabs)    \n        \n        firstTab.classList.add(\"first_tab\");\n        firstTab.setAttribute('id', 'first_tab')\n\n\n        tab_container.appendChild(firstTab)\n        secondTab.classList.add(\"second_tab\");\n        secondTab.setAttribute('id', 'second_tab')              //creates div tabs at the top\n        tab_container.appendChild(secondTab)\n        thirdTab.classList.add(\"third_tab\");\n        thirdTab.setAttribute('id', 'third_tab')\n        tab_container.appendChild(thirdTab);\n\n        firstTab.innerHTML = \"a\";\n        secondTab.innerHTML = \"b\";\n        thirdTab.innerHTML = \"c\"\n    }    \n    tabThru() {\n    console.log('information')\n        let firstClick = document.getElementById(\"first_tab\");\n        firstClick.addEventListener('click', () => _render__WEBPACK_IMPORTED_MODULE_0__.render.allTheDivs());\n        \n        let secondClick = document.getElementById('second_tab');\n        secondClick.addEventListener('click', () => _render2__WEBPACK_IMPORTED_MODULE_1__.renderTwo.allTheDivs());        //adds event listener clicks to run the other modules(render 1-2)\n        \n        let thirdClick = document.getElementById('third_tab');\n        thirdClick.addEventListener('click', () => _render3__WEBPACK_IMPORTED_MODULE_2__.renderThree.allTheDivs());\n    }\n    \n    \n    playAll() {\n        this.display();\n        this.tabThru();\n    }\n}\n\n/* render.allTheDivs() */\n\n\nlet tabSelect = new TabSelect();\n\n\ntabSelect.playAll();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n\nclass Render {\n  /*   contentClass() {\n        let createClass = document.getElementById('content');\n        createClass.classList.add(\"content\");\n    } */\n    bodyDiv() {\n        let bodyContainer = document.createElement(\"div\");\n        bodyContainer.classList.add(\"body_div\");\n        bodyContainer.setAttribute('id', 'body_div');\n        //let trailDiv = document.querySelector(\"#body_div\");\n        content.appendChild(bodyContainer);\n    }\n    headline() {\n        let topDiv = document.createElement('div');\n        topDiv.classList.add(\"topDiv\")\n        topDiv.setAttribute('id', \"topDiv\")\n        topDiv.innerHTML = \"Lorem ipsum dolor sit amet, consectetur\";\n        body_div.appendChild(topDiv); \n        \n        \n    }          \n    centerImg() {\n        let mainPic = document.createElement(\"img\");                    //three divs built for main page\n        mainPic.classList.add(\"main_pic\")\n        body_div.appendChild(mainPic);\n        mainPic.src = \"https://picsum.photos/200/301\";\n        \n    } \n    discribeDiv() {\n        let disDiv = document.createElement('div');\n        disDiv.classList.add(\"discription\");\n        disDiv.setAttribute('id', 'discription');\n        disDiv.innerHTML = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n        body_div.appendChild(disDiv);\n\n    }\n    trial(parent) {\n        while (parent.firstChild) {\n          parent.removeChild(parent.firstChild)\n        }\n      };\n    allTheDivs() {\n        //this.contentClass();\n        let contentLength = document.getElementsByClassName(\"body_div\");\n\n        if(contentLength.length > 0){\n            let trailDiv = document.querySelector(\"#body_div\");\n                this.trial(trailDiv);\n                this.headline();\n                this.centerImg();\n                this.discribeDiv(); \n\n         } else {\n                \n                this.bodyDiv();\n                this.headline();\n                this.centerImg();\n                this.discribeDiv();\n            }; \n            }\n        };\n\n//let render = new Render();\n\n\n\nlet render = new Render()\n\n//# sourceURL=webpack://restaurant-page/./src/render.js?");

/***/ }),

/***/ "./src/render2.js":
/*!************************!*\
  !*** ./src/render2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTwo\": () => (/* binding */ renderTwo)\n/* harmony export */ });\n\nclass Rendertwo {\n    bodyDiv() {\n        let bodyContainer = document.createElement(\"div\");\n        bodyContainer.classList.add(\"body_div\");\n        bodyContainer.setAttribute('id', 'body_div');               //creates container for img, discription, and headline div\n      //  let trailDiv = document.querySelector(\"#body_div\");\n        content.appendChild(bodyContainer);\n    }\n\n    headline() {\n        let topDiv = document.createElement('div');\n        topDiv.classList.add(\"topDiv\")\n        topDiv.setAttribute('id', \"topDiv\")             \n        topDiv.innerHTML = \"consectetur\";\n        body_div.appendChild(topDiv); \n        //console.log('whodatdar')\n        \n    }          \n    centerImg() {\n        let mainPic = document.createElement(\"img\");                    //three divs built for main page\n        mainPic.classList.add(\"main_pic\")\n        body_div.appendChild(mainPic);\n        mainPic.src = \"https://picsum.photos/800/801\";\n        //console.log('gotem')\n    } \n    discribeDiv() {\n        let disDiv = document.createElement('div');\n        disDiv.classList.add(\"discription\");\n        disDiv.setAttribute('id', 'discription');\n        disDiv.innerHTML = \"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll\"\n        body_div.appendChild(disDiv);\n\n    }\n    trial(parent) {\n        while (parent.firstChild) {\n          parent.removeChild(parent.firstChild)             //removes divs from \"parent\" div\n        }\n      };\n      allTheDivs() {\n        //this.contentClass();\n        let contentLength = document.getElementsByClassName(\"body_div\");\n\n        if(contentLength.length > 0){\n            let trailDiv = document.querySelector(\"#body_div\");\n                this.trial(trailDiv);                           //states if pages is empty fill it,\n                this.headline();                                //if not, removes divs, then fill\n                this.centerImg();\n                this.discribeDiv(); \n\n         } else {\n                \n                this.bodyDiv();\n                this.headline();\n                this.centerImg();\n                this.discribeDiv();\n            }; \n            }\n};\n\n\nlet renderTwo = new Rendertwo()\n\n//# sourceURL=webpack://restaurant-page/./src/render2.js?");

/***/ }),

/***/ "./src/render3.js":
/*!************************!*\
  !*** ./src/render3.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderThree\": () => (/* binding */ renderThree)\n/* harmony export */ });\n\nclass Renderthree {\n    bodyDiv() {\n        let bodyContainer = document.createElement(\"div\");\n        bodyContainer.classList.add(\"body_div\");\n        bodyContainer.setAttribute('id', 'body_div');\n        //let trailDiv = document.querySelector(\"#body_div\");\n        content.appendChild(bodyContainer);\n    }\n    headline() {\n        let topDiv = document.createElement('div');\n        topDiv.classList.add(\"topDiv\")\n        topDiv.setAttribute('id', \"topDiv\")\n        topDiv.innerHTML = \"........sit amet.........\";\n        body_div.appendChild(topDiv); \n        //console.log('whodatdar')\n        \n    }          \n    centerImg() {\n        let mainPic = document.createElement(\"img\");                    //three divs built for main page\n        mainPic.classList.add(\"main_pic\")\n        body_div.appendChild(mainPic);\n        mainPic.src = \"https://picsum.photos/500/500\";\n        //console.log('gotem')\n    } \n    discribeDiv() {\n        let disDiv = document.createElement('div');\n        disDiv.classList.add(\"discription\");\n        disDiv.setAttribute('id', 'discription');\n        disDiv.innerHTML = \"oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo\"\n        body_div.appendChild(disDiv);\n\n    }\n    trial(parent) {\n        while (parent.firstChild) {\n          parent.removeChild(parent.firstChild)\n        }\n      };\n      allTheDivs() {\n        //this.contentClass();\n        let contentLength = document.getElementsByClassName(\"body_div\");\n\n        if(contentLength.length > 0){\n            let trailDiv = document.querySelector(\"#body_div\");\n                this.trial(trailDiv);\n                this.headline();\n                this.centerImg();\n                this.discribeDiv(); \n\n         } else {\n                \n                this.bodyDiv();\n                this.headline();\n                this.centerImg();\n                this.discribeDiv();\n            }; \n            }\n};\n\n//let render = new Render();\n\n\n\nlet renderThree = new Renderthree()\n\n//# sourceURL=webpack://restaurant-page/./src/render3.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;