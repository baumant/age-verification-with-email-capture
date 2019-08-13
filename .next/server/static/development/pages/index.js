module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classPrivateFieldGet.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classPrivateFieldGet.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classPrivateFieldGet; });
function _classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver).value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classPrivateFieldGet */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);















var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      age: 21,
      rememberDays: 14,
      requireDOB: false,
      backgroundUrl: 'none',
      logoUrl: 'none',
      redirectUrl: 'http://google.com',
      headerText: 'You must be {{age}}+ to enter this site',
      subheaderText: 'This website contains adult material and is only suitable for those {{age}} years or older. Click Enter only if you are at least {{age}} years of age.',
      exitButton: true,
      exitButtonColor: {
        hue: 0,
        brightness: .9,
        saturation: .6
      },
      showToast: false,
      showError: false,
      errorMessage: ''
    });

    _handleChange.set(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), {
      writable: true,
      value: function value(field) {
        return function (value) {
          return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, field, value));
        };
      }
    });

    _handleSwitch.set(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), {
      writable: true,
      value: function value(field) {
        return function (value) {
          return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, field, !_this.state[field]));
        };
      }
    });

    _exampleBackground.set(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), {
      writable: true,
      value: function value(url) {
        _this.setState({
          backgroundUrl: url
        });
      }
    });

    _isInvalid.set(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), {
      writable: true,
      value: function value(_value, pattern, comingFrom) {
        if (!_value) {
          return true;
        } else if (_value === 'none' && comingFrom === 'backgroundUrl' || _value === 'none' && comingFrom === 'logoUrl') {
          return false;
        } else {
          return !new RegExp(pattern).test(_value);
        }
      }
    });

    _updateAgeGate.set(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), {
      writable: true,
      value: function value() {
        fetch('/updateAgeGate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_this.state)
        }).then(function (response) {
          console.log('response: ', response); // Perform action based on response

          if (response.status === 201) {
            _this.setState({
              showToast: true
            });

            js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.set('ageGateVariables', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_this.state));
          } else {
            _this.setState({
              errorMessage: response.status + ", " + response.statusText,
              showError: true
            });
          }
        }).catch(function (error) {
          console.log('error: ', error); // Perform action based on error

          this.setState({
            errorMessage: error,
            showError: true
          });
        });
        console.log('submission', _this.state);
      }
    });

    _uninstallAgeGate.set(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), {
      writable: true,
      value: function value() {
        fetch('/uninstallAgeGate', {
          method: 'POST',
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('shopOrigin'))
        }).then(function (response) {
          console.log(response);

          if (response.status === 200) {
            alert('Successfully uninstalled Age Gate');
          } else {
            _this.setState({
              errorMessage: response.status + ", " + response.statusText,
              showError: true
            });
          }
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var cooks = js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get();
      var currentVariables;

      if (cooks.ageGateVariables) {
        console.log('variables in cookies');
        currentVariables = JSON.parse(cooks.ageGateVariables);

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(currentVariables).map(function (i) {
          _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, i, currentVariables[i]));
        });

        console.log(this.state);
      } else {
        fetch('/checkVariables', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'GET'
        }).then(function (response) {
          // response.json()
          cooks = js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get();
          currentVariables = JSON.parse(cooks.ageGateVariables);
          console.log('checkVariables response:', response, currentVariables);

          _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(currentVariables).map(function (i) {
            _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, i, currentVariables[i]));
          });
        }).catch(function (error) {
          console.log('error: ', error); // Perform action based on error
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          age = _this$state.age,
          rememberDays = _this$state.rememberDays,
          requireDOB = _this$state.requireDOB,
          backgroundUrl = _this$state.backgroundUrl,
          logoUrl = _this$state.logoUrl,
          redirectUrl = _this$state.redirectUrl,
          headerText = _this$state.headerText,
          subheaderText = _this$state.subheaderText,
          exitButton = _this$state.exitButton,
          exitButtonColor = _this$state.exitButtonColor,
          showToast = _this$state.showToast,
          showError = _this$state.showError,
          errorMessage = _this$state.errorMessage;
      var shopOrigin = js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('shopOrigin');
      var dobStatus = requireDOB ? 'Disable' : 'Enable';
      var dobTextStatus = requireDOB ? 'enabled' : 'disabled';
      var exitButtonStatus = exitButton ? 'Disable' : 'Enable';
      var exitButtonTextStatus = exitButton ? 'a button' : 'text';
      var urlFieldPattern = "^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$";
      var toastMarkup = showToast ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Toast"], {
        content: "Sucessfully updated",
        onDismiss: function onDismiss() {
          return _this3.setState({
            showToast: false
          });
        }
      }) : null;
      var errorMarkup = showError ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Banner"], {
        title: "Error",
        status: "Critical",
        onDismiss: function onDismiss() {
          return _this3.setState({
            showError: false,
            errorMessage: ''
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", null, errorMessage)) : null;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Page"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Layout"], null, toastMarkup, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Layout"].AnnotatedSection, {
        title: "Age Restriction",
        description: "The age required to enter."
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        value: age,
        onChange: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _handleChange).call(this, 'age'),
        type: "number",
        suffix: "years"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Layout"].AnnotatedSection, {
        title: "Remember Visitor",
        description: "Number of days to remember the visitor's answer."
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        value: rememberDays,
        onChange: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _handleChange).call(this, 'rememberDays'),
        type: "number",
        suffix: "days"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Layout"].AnnotatedSection, {
        title: "Require Date of Birth",
        description: "This requires the user to enter their date of birth to confirm their age."
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["SettingToggle"], {
        action: {
          content: dobStatus,
          onAction: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _handleSwitch).call(this, 'requireDOB')
        },
        enabled: requireDOB
      }, "This setting is ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextStyle"], {
        variation: "strong"
      }, dobTextStatus), ".")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Layout"].AnnotatedSection, {
        title: "Redirect url",
        description: "This is the url that the app will redirect users to who are under the required age."
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        value: redirectUrl,
        onChange: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _handleChange).call(this, 'redirectUrl'),
        pattern: urlFieldPattern,
        type: "url",
        error: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _isInvalid).call(this, redirectUrl, urlFieldPattern, 'redirectUrl'),
        prefix: "url:"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["InlineError"], {
        message: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _isInvalid).call(this, redirectUrl, urlFieldPattern, 'redirectUrl') ? "Invalid url. Make sure to include http:// or https://" : "",
        fieldID: "redirectUrl"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Layout"].AnnotatedSection, {
        title: "Design",
        description: "Customize the design of the age gate."
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Card"], {
        sectioned: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Heading"], null, "Background Image"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        label: "Display an image in the background. Leave as 'none' for the default grey background.",
        value: backgroundUrl,
        onChange: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _handleChange).call(this, 'backgroundUrl'),
        pattern: urlFieldPattern,
        type: "url",
        error: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _isInvalid).call(this, backgroundUrl, urlFieldPattern, 'backgroundUrl'),
        prefix: "image url:"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "Polaris-Labelled__HelpText"
      }, "You can upload images in ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        href: "https://" + shopOrigin + "/admin/settings/files"
      }, "Settings > Files")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["InlineError"], {
        message: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _isInvalid).call(this, backgroundUrl, urlFieldPattern, 'backgroundUrl') ? "Invalid url. Make sure to include http:// or https://" : "",
        fieldID: "backgroundUrl"
      }), backgroundUrl !== 'none' && !Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _isInvalid).call(this, backgroundUrl, urlFieldPattern, 'backgroundUrl') && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Thumbnail"], {
        source: backgroundUrl,
        size: "large",
        alt: "background image"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Layout"].Section, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Subheading"], null, "Examples:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Stack"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80");
        },
        onKeyDown: function onKeyDown() {
          return Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80");
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Thumbnail"], {
        source: "https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80",
        size: "large",
        alt: "background image"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        },
        onKeyDown: function onKeyDown() {
          return Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Thumbnail"], {
        source: "https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        size: "large",
        alt: "background image"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        },
        onKeyDown: function onKeyDown() {
          return Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Thumbnail"], {
        source: "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        size: "large",
        alt: "background image"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        },
        onKeyDown: function onKeyDown() {
          return Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Thumbnail"], {
        source: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        size: "large",
        alt: "background image"
      }))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Card"], {
        sectioned: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Heading"], null, "Logo"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        label: "Display your logo as part of the overlay. Leave as 'none' for no logo.",
        value: logoUrl,
        onChange: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _handleChange).call(this, 'logoUrl'),
        pattern: urlFieldPattern,
        type: "url",
        error: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _isInvalid).call(this, logoUrl, urlFieldPattern, 'logoUrl'),
        prefix: "image url:"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "Polaris-Labelled__HelpText"
      }, "You can upload images in ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        href: "https://" + shopOrigin + "/admin/settings/files"
      }, "Settings > Files")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["InlineError"], {
        message: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _isInvalid).call(this, logoUrl, urlFieldPattern, 'logoUrl') ? "Invalid url. Make sure to include http:// or https://" : "",
        fieldID: "logoUrl"
      }), logoUrl !== 'none' && !Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _isInvalid).call(this, logoUrl, urlFieldPattern, 'logoUrl') && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Thumbnail"], {
        source: logoUrl,
        size: "large",
        alt: "logo image"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Card"], {
        sectioned: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Heading"], null, "Header Text"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        value: headerText,
        onChange: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _handleChange).call(this, 'headerText'),
        type: "text",
        helpText: "You can use the variable {{age}} to include your set age requirement."
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Card"], {
        sectioned: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Heading"], null, "Subheader Text"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        value: subheaderText,
        onChange: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _handleChange).call(this, 'subheaderText'),
        type: "text",
        helpText: "You can use the variable {{age}} to include your set age requirement.",
        multiline: "true"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Card"], {
        sectioned: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Heading"], null, "Buttons"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["SettingToggle"], {
        action: {
          content: exitButtonStatus,
          onAction: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _handleSwitch).call(this, 'exitButton')
        },
        enabled: exitButton
      }, "The exit link is displayed as ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextStyle"], {
        variation: "strong"
      }, exitButtonTextStatus)), exitButton && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Layout"].Section, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", null, "Exit Button Background Color:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["ColorPicker"], {
        onChange: Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(this, _handleChange).call(this, 'exitButtonColor'),
        color: exitButtonColor
      }))))), errorMarkup, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["PageActions"], {
        primaryAction: [{
          content: 'Save Settings',
          onAction: function onAction() {
            Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(_this3, _updateAgeGate).call(_this3);
          }
        }],
        secondaryActions: [{
          content: 'Uninstall Age Gate',
          onAction: function onAction() {
            console.log('uninstall age gate action');

            Object(_babel_runtime_corejs2_helpers_esm_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_10__["default"])(_this3, _uninstallAgeGate).call(_this3);
          }
        }]
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

var _handleChange = new _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_0___default.a();

var _handleSwitch = new _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_0___default.a();

var _exampleBackground = new _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_0___default.a();

var _isInvalid = new _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_0___default.a();

var _updateAgeGate = new _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_0___default.a();

var _uninstallAgeGate = new _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_0___default.a();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/timothybauman/Google Drive/age-gate/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map