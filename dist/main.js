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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact-load.js":
/*!*****************************!*\
  !*** ./src/contact-load.js ***!
  \*****************************/
/*! exports provided: contactLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactLoad\", function() { return contactLoad; });\nconst contactLoad = () => {\n  let content = document.getElementById(\"content\");\n\n  let hero = document.createElement(\"div\");\n  hero.setAttribute(\"class\", \"hero-contact\");\n  content.appendChild(hero);\n\n  let touch = document.createElement(\"div\");\n  touch.setAttribute(\"class\", \"banner\");\n\n  let touchContent = document.createElement(\"div\");\n  touchContent.setAttribute(\"class\", \"touch-content\");\n\n  let touchTitle = document.createElement(\"h3\");\n  touchTitle.setAttribute(\"class\", \"touch-title\");\n  touchTitle.innerHTML = \"Get in Touch\";\n\n  touchContent.appendChild(touchTitle);\n\n  let touchSubtitle = document.createElement(\"p\");\n  touchSubtitle.setAttribute(\"class\", \"touch-text\");\n  touchSubtitle.innerHTML =\n    \"Quo dicit complectitur comprehensam in, denique albucius iudicabit pro\";\n\n  touchContent.appendChild(touchSubtitle);\n\n  let touchButton = document.createElement(\"button\");\n  touchButton.setAttribute(\"class\", \"button\");\n  touchButton.innerHTML = \"Message\";\n\n  touchContent.appendChild(touchButton);\n\n  touch.appendChild(touchContent);\n\n  content.appendChild(touch);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/contact-load.js?");

/***/ }),

/***/ "./src/home-load.js":
/*!**************************!*\
  !*** ./src/home-load.js ***!
  \**************************/
/*! exports provided: homeLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homeLoad\", function() { return homeLoad; });\nconst homeLoad = () => {\n  let content = document.getElementById(\"content\");\n  // hero\n  let hero = document.createElement(\"div\");\n  hero.setAttribute(\"class\", \"hero\");\n\n  let heroContent = document.createElement(\"div\");\n  heroContent.setAttribute(\"class\", \"hero-content\");\n\n  let heroTitle = document.createElement(\"h1\");\n  heroTitle.setAttribute(\"class\", \"hero-text\");\n  heroTitle.innerHTML = \"Pinch of Perfect\";\n\n  heroContent.appendChild(heroTitle);\n\n  hero.appendChild(heroContent);\n\n  content.appendChild(hero);\n\n  // banner\n  let banner = document.createElement(\"div\");\n  banner.setAttribute(\"class\", \"banner\");\n\n  let bannerContent = document.createElement(\"div\");\n  bannerContent.setAttribute(\"class\", \"banner-content\");\n\n  let bannerTitle = document.createElement(\"h3\");\n  bannerTitle.setAttribute(\"class\", \"banner-title\");\n  bannerTitle.innerHTML = \"Traditional Recipes Made Modern.\";\n\n  bannerContent.appendChild(bannerTitle);\n\n  let bannerSubtitle = document.createElement(\"p\");\n  bannerSubtitle.setAttribute(\"class\", \"banner-text\");\n  bannerSubtitle.innerHTML =\n    \"Lorem ipsum dolor sit amet, reque adipisci at vix. Vim tale hinc doming eu, dolore virtute argumentum ad sit. Laboramus similique eos ut, ad perfecto vituperata sed.\";\n\n  bannerContent.appendChild(bannerSubtitle);\n\n  let bannerButton = document.createElement(\"button\");\n  bannerButton.setAttribute(\"class\", \"button\");\n  bannerButton.innerHTML = \"See Menu\";\n\n  bannerContent.appendChild(bannerButton);\n\n  banner.appendChild(bannerContent);\n\n  let bannerImg = document.createElement(\"div\");\n  bannerImg.setAttribute(\"class\", \"banner-img\");\n\n  banner.appendChild(bannerImg);\n\n  content.appendChild(banner);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/home-load.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-load */ \"./src/home-load.js\");\n/* harmony import */ var _menu_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-load */ \"./src/menu-load.js\");\n/* harmony import */ var _contact_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-load */ \"./src/contact-load.js\");\n\n\n\n\nObject(_home_load__WEBPACK_IMPORTED_MODULE_0__[\"homeLoad\"])();\n\nfunction clearContent() {\n  if (document.getElementById(\"content\").hasChildNodes() === true) {\n    let items = document.getElementById(\"content\");\n    while (items.firstChild) {\n      items.removeChild(items.lastChild);\n    }\n  }\n}\n\ndocument.addEventListener(\"click\", function (e) {\n  if (e.target.innerHTML === \"Eli's Bakery\") {\n    clearContent();\n    Object(_home_load__WEBPACK_IMPORTED_MODULE_0__[\"homeLoad\"])();\n  } else if (e.target.innerHTML == \"Menu\" || e.target.innerHTML == \"See Menu\") {\n    clearContent();\n    Object(_menu_load__WEBPACK_IMPORTED_MODULE_1__[\"menuLoad\"])();\n  } else if (e.target.innerHTML == \"Contact\") {\n    clearContent();\n    Object(_contact_load__WEBPACK_IMPORTED_MODULE_2__[\"contactLoad\"])();\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/*! exports provided: menuLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuLoad\", function() { return menuLoad; });\nconst menuLoad = () => {\n  let content = document.getElementById(\"content\");\n\n  // let heroTitle = document.createElement(\"h1\");\n  // heroTitle.setAttribute(\"class\", \"page-title\");\n  // heroTitle.innerHTML = \"Menu\";\n\n  // content.appendChild(heroTitle);\n\n  const products = [\n    {\n      name: \"pecan pie\",\n      img: \"https://images.unsplash.com/photo-1619051805375-7b83440bb11b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVjYW4lMjBwaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60\",\n    },\n    {\n      name: \"apple pie\",\n      img: \"https://images.unsplash.com/photo-1624299831638-82c15fcafd2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60\",\n    },\n    {\n      name: \"dulce de leche pie\",\n      img: \"https://images.unsplash.com/photo-1605090932359-cc0642272eeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGR1bGNlJTIwZGUlMjBsZWNoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60\",\n    },\n    {\n      name: \"pumpkin muffin\",\n      img: \"https://images.unsplash.com/photo-1557925923-6982bd9650ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVmZmlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60\",\n    },\n    {\n      name: \"profiteroles\",\n      img: \"https://images.unsplash.com/photo-1633424411336-f5b7a6886d88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZml0ZXJvbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60\",\n    },\n    {\n      name: \"fudgesicle\",\n      img: \"https://images.unsplash.com/photo-1501014882647-fa3cef30d47d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvY29hJTIwZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60\",\n    },\n  ];\n\n  let prods = document.createElement(\"div\");\n  prods.setAttribute(\"class\", \"prods\");\n\n  for (let i = 0; i < products.length; i++) {\n    let card = document.createElement(\"div\");\n    card.setAttribute(\"class\", \"prod-card\");\n\n    let cardImage = document.createElement(\"img\");\n    cardImage.setAttribute(\"class\", \"prod-img\");\n    cardImage.setAttribute(\"src\", products[i].img);\n    cardImage.setAttribute(\"alt\", \"product image\");\n    card.appendChild(cardImage);\n\n    let cardTitleOverlay = document.createElement(\"div\");\n    cardTitleOverlay.setAttribute(\"class\", \"overlay\");\n\n    let cardTitle = document.createElement(\"h2\");\n    cardTitle.setAttribute(\"class\", \"prod-title\");\n    cardTitle.innerHTML = \"- \" + products[i].name + \" -\";\n\n    cardTitleOverlay.appendChild(cardTitle);\n    card.appendChild(cardTitleOverlay);\n\n    prods.appendChild(card);\n  }\n\n  content.appendChild(prods);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/menu-load.js?");

/***/ })

/******/ });