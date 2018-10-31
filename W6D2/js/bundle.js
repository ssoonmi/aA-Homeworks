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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* globals $ */\n\nvar View = __webpack_require__(/*! ./view */ \"./view.js\");\n\n$(function () {\n  var $easel = $(\"#easel\");\n  new View($easel);\n});\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./view.js":
/*!*****************!*\
  !*** ./view.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* jshint esversion: 6 */\n\nfunction View($el) {\n  this.$el = $el;\n  this.setupEasel();\n}\n\nwindow._randomColorString = function(){\n  return '#' + Math.random().toString(16).substr(-6);\n};\n\nView.prototype.exercise0 = function () {\n  //Challenge: (example) remove the 'square' class from every li\n  //Result: this should cause the grid to turn into a long list of undecorated lis\n  //just a list of dots\n\n  //this one completed as an example :) no additional code necessary\n  $('li').removeClass(\"square\");\n};\n\nView.prototype.exercise1 = function () {\n  //Challenge: Give every square the class 'orange'\n  //Result: Every square should turn orange (we already have a CSS rule)\n\n  //your code here!\n  $('li').addClass(\"orange\");\n};\n\nView.prototype.exercise2 = function () {\n  //Challenge: Remove every square\n  //Result: Every square vanishes\n\n  //your code here!\n  $('li').remove();\n};\n\nView.prototype.exercise3 = function () {\n  //Challenge: Add an <h1> with the text 'i love jquery' under the grid.\n  //Result: An <h1> with the text 'i love jquery' appears under the grid.\n\n  //your code here!\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = 'i love jquery';\n  $(\"body\").append(h1);\n};\n\nView.prototype.exercise4 = function () {\n  //Challenge: Write your first name in every other square.\n  //Result: Your name appears in every other square.\n\n  //your code here!\n  const li = $(\"li\");\n  for(let i = 0; i < li.length; i+= 2){\n    if (i !== 0){\n      if (i % 20 === 0){\n        i += 1;\n      } else if (i % 20 === 1) {\n        i -= 1;\n      }\n    }\n    $(li[i]).text('Soon-Mi');\n  }\n};\n\nView.prototype.exercise5 = function () {\n  //Challenge: Alert the row and column of the square, when the square is clicked.\n  //Result: When a square is clicked, the row and column appear in an alert. for\n  //example: clicking the top left square should alert '0, 0'.\n\n  //hint: checkout the addRow function at the bottom of the file: we set the\n  //  'data-pos' of every square\n\n  //your code here!\n  $('ul').on('click', (event) => {\n    alert($(event.target).attr(\"data-pos\"));\n  });\n};\n\nView.prototype.exercise6 = function () {\n  //Challenge: Give every square a random color!\n  //Result: Every square becomes a color as soon as this code runs. The grid\n  //should become a beautiful rainbow of colors.\n\n  //hint: use window._randomColorString() (defined at top) to get a random color!\n\n  //your code here!\n  const $li = $('li');\n  for (var i = 0; i < $li.length; i++) {\n    $($li[i]).css('background-color', window._randomColorString());\n  }\n};\n\nView.prototype.exercise7 = function(){\n  //Challenge: When your mouse goes over a square, console log its color.\n  //Result: When the mouse goes over a square its color should appear in the\n  //console. The color won't be the color's name, but its rbg value.\n  //You should push the button for exercise 6 first to try it on the\n  //rainbow.\n\n  //your code here!\n  $('ul').on('mouseover', (event) => {\n    const $li = $(event.target);\n    console.log($li.css('background-color'));\n  });\n};\n\n\n\nView.prototype.setupEasel = function() {\n  const $addRowButton = $('<button>').html('Add a row');\n  this.$el.append($addRowButton);\n  $addRowButton.on(\"click\", this.addRow.bind(this));\n\n  for(let j = 0; j <= 7; j++){\n    const $button = $(\"<button>\").html(\"Exercise \" + j);\n    $button.on(\"click\", this[\"exercise\" + j]);\n    this.$el.append($button);\n  }\n\n  for(let i = 0; i < 20; i ++) {\n    this.addRow();\n  }\n};\n\nView.prototype.addRow = function() {\n  const rowIdx = this.$el.find(\".row\").length;\n  const $row = $(\"<ul>\").addClass(\"row\").addClass(\"group\");\n  for(let colIdx = 0; colIdx < 20; colIdx++) {\n    const $square = $(\"<li>\").addClass(\"square\").attr(\"data-pos\", [rowIdx, colIdx]);\n    $square.on(\"mouseenter\", (e) => {\n      const $square = $(e.currentTarget);\n      $square.css(\"background-color\", window._randomColorString());\n    });\n    $row.append($square);\n  }\n  this.$el.append($row);\n};\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./view.js?");

/***/ })

/******/ });