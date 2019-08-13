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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js
var weak_map = __webpack_require__("G4HQ");
var weak_map_default = /*#__PURE__*/__webpack_require__.n(weak_map);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classPrivateFieldGet.js
function _classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver).value;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@shopify/polaris"
var polaris_ = __webpack_require__("nj/N");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./pages/index.js















var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
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

    _handleChange.set(Object(assertThisInitialized["a" /* default */])(_this), {
      writable: true,
      value: function value(field) {
        return function (value) {
          return _this.setState(Object(defineProperty["a" /* default */])({}, field, value));
        };
      }
    });

    _handleSwitch.set(Object(assertThisInitialized["a" /* default */])(_this), {
      writable: true,
      value: function value(field) {
        return function (value) {
          return _this.setState(Object(defineProperty["a" /* default */])({}, field, !_this.state[field]));
        };
      }
    });

    _exampleBackground.set(Object(assertThisInitialized["a" /* default */])(_this), {
      writable: true,
      value: function value(url) {
        _this.setState({
          backgroundUrl: url
        });
      }
    });

    _isInvalid.set(Object(assertThisInitialized["a" /* default */])(_this), {
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

    _updateAgeGate.set(Object(assertThisInitialized["a" /* default */])(_this), {
      writable: true,
      value: function value() {
        fetch('/updateAgeGate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: stringify_default()(_this.state)
        }).then(function (response) {
          console.log('response: ', response); // Perform action based on response

          if (response.status === 201) {
            _this.setState({
              showToast: true
            });

            external_js_cookie_default.a.set('ageGateVariables', stringify_default()(_this.state));
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

    _uninstallAgeGate.set(Object(assertThisInitialized["a" /* default */])(_this), {
      writable: true,
      value: function value() {
        fetch('/uninstallAgeGate', {
          method: 'POST',
          body: stringify_default()(external_js_cookie_default.a.get('shopOrigin'))
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

  Object(createClass["a" /* default */])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var cooks = external_js_cookie_default.a.get();
      var currentVariables;

      if (cooks.ageGateVariables) {
        console.log('variables in cookies');
        currentVariables = JSON.parse(cooks.ageGateVariables);

        keys_default()(currentVariables).map(function (i) {
          _this2.setState(Object(defineProperty["a" /* default */])({}, i, currentVariables[i]));
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
          cooks = external_js_cookie_default.a.get();
          currentVariables = JSON.parse(cooks.ageGateVariables);
          console.log('checkVariables response:', response, currentVariables);

          keys_default()(currentVariables).map(function (i) {
            _this2.setState(Object(defineProperty["a" /* default */])({}, i, currentVariables[i]));
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
      var shopOrigin = external_js_cookie_default.a.get('shopOrigin');
      var dobStatus = requireDOB ? 'Disable' : 'Enable';
      var dobTextStatus = requireDOB ? 'enabled' : 'disabled';
      var exitButtonStatus = exitButton ? 'Disable' : 'Enable';
      var exitButtonTextStatus = exitButton ? 'a button' : 'text';
      var urlFieldPattern = "^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$";
      var toastMarkup = showToast ? external_react_default.a.createElement(polaris_["Toast"], {
        content: "Sucessfully updated",
        onDismiss: function onDismiss() {
          return _this3.setState({
            showToast: false
          });
        }
      }) : null;
      var errorMarkup = showError ? external_react_default.a.createElement(polaris_["Banner"], {
        title: "Error",
        status: "Critical",
        onDismiss: function onDismiss() {
          return _this3.setState({
            showError: false,
            errorMessage: ''
          });
        }
      }, external_react_default.a.createElement("p", null, errorMessage)) : null;
      return external_react_default.a.createElement(polaris_["Page"], null, external_react_default.a.createElement(polaris_["Layout"], null, toastMarkup, external_react_default.a.createElement(polaris_["Layout"].AnnotatedSection, {
        title: "Age Restriction",
        description: "The age required to enter."
      }, external_react_default.a.createElement(polaris_["TextField"], {
        value: age,
        onChange: _classPrivateFieldGet(this, _handleChange).call(this, 'age'),
        type: "number",
        suffix: "years"
      })), external_react_default.a.createElement(polaris_["Layout"].AnnotatedSection, {
        title: "Remember Visitor",
        description: "Number of days to remember the visitor's answer."
      }, external_react_default.a.createElement(polaris_["TextField"], {
        value: rememberDays,
        onChange: _classPrivateFieldGet(this, _handleChange).call(this, 'rememberDays'),
        type: "number",
        suffix: "days"
      })), external_react_default.a.createElement(polaris_["Layout"].AnnotatedSection, {
        title: "Require Date of Birth",
        description: "This requires the user to enter their date of birth to confirm their age."
      }, external_react_default.a.createElement(polaris_["SettingToggle"], {
        action: {
          content: dobStatus,
          onAction: _classPrivateFieldGet(this, _handleSwitch).call(this, 'requireDOB')
        },
        enabled: requireDOB
      }, "This setting is ", external_react_default.a.createElement(polaris_["TextStyle"], {
        variation: "strong"
      }, dobTextStatus), ".")), external_react_default.a.createElement(polaris_["Layout"].AnnotatedSection, {
        title: "Redirect url",
        description: "This is the url that the app will redirect users to who are under the required age."
      }, external_react_default.a.createElement(polaris_["TextField"], {
        value: redirectUrl,
        onChange: _classPrivateFieldGet(this, _handleChange).call(this, 'redirectUrl'),
        pattern: urlFieldPattern,
        type: "url",
        error: _classPrivateFieldGet(this, _isInvalid).call(this, redirectUrl, urlFieldPattern, 'redirectUrl'),
        prefix: "url:"
      }), external_react_default.a.createElement(polaris_["InlineError"], {
        message: _classPrivateFieldGet(this, _isInvalid).call(this, redirectUrl, urlFieldPattern, 'redirectUrl') ? "Invalid url. Make sure to include http:// or https://" : "",
        fieldID: "redirectUrl"
      })), external_react_default.a.createElement(polaris_["Layout"].AnnotatedSection, {
        title: "Design",
        description: "Customize the design of the age gate."
      }, external_react_default.a.createElement(polaris_["Card"], {
        sectioned: true
      }, external_react_default.a.createElement(polaris_["Heading"], null, "Background Image"), external_react_default.a.createElement(polaris_["TextField"], {
        label: "Display an image in the background. Leave as 'none' for the default grey background.",
        value: backgroundUrl,
        onChange: _classPrivateFieldGet(this, _handleChange).call(this, 'backgroundUrl'),
        pattern: urlFieldPattern,
        type: "url",
        error: _classPrivateFieldGet(this, _isInvalid).call(this, backgroundUrl, urlFieldPattern, 'backgroundUrl'),
        prefix: "image url:"
      }), external_react_default.a.createElement("div", {
        className: "Polaris-Labelled__HelpText"
      }, "You can upload images in ", external_react_default.a.createElement("a", {
        href: "https://" + shopOrigin + "/admin/settings/files"
      }, "Settings > Files")), external_react_default.a.createElement(polaris_["InlineError"], {
        message: _classPrivateFieldGet(this, _isInvalid).call(this, backgroundUrl, urlFieldPattern, 'backgroundUrl') ? "Invalid url. Make sure to include http:// or https://" : "",
        fieldID: "backgroundUrl"
      }), backgroundUrl !== 'none' && !_classPrivateFieldGet(this, _isInvalid).call(this, backgroundUrl, urlFieldPattern, 'backgroundUrl') && external_react_default.a.createElement(polaris_["Thumbnail"], {
        source: backgroundUrl,
        size: "large",
        alt: "background image"
      }), external_react_default.a.createElement(polaris_["Layout"].Section, null, external_react_default.a.createElement(polaris_["Subheading"], null, "Examples:"), external_react_default.a.createElement(polaris_["Stack"], null, external_react_default.a.createElement("div", {
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return _classPrivateFieldGet(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80");
        },
        onKeyDown: function onKeyDown() {
          return _classPrivateFieldGet(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80");
        }
      }, external_react_default.a.createElement(polaris_["Thumbnail"], {
        source: "https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80",
        size: "large",
        alt: "background image"
      })), external_react_default.a.createElement("div", {
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return _classPrivateFieldGet(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        },
        onKeyDown: function onKeyDown() {
          return _classPrivateFieldGet(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        }
      }, external_react_default.a.createElement(polaris_["Thumbnail"], {
        source: "https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        size: "large",
        alt: "background image"
      })), external_react_default.a.createElement("div", {
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return _classPrivateFieldGet(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        },
        onKeyDown: function onKeyDown() {
          return _classPrivateFieldGet(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        }
      }, external_react_default.a.createElement(polaris_["Thumbnail"], {
        source: "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        size: "large",
        alt: "background image"
      })), external_react_default.a.createElement("div", {
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return _classPrivateFieldGet(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        },
        onKeyDown: function onKeyDown() {
          return _classPrivateFieldGet(_this3, _exampleBackground).call(_this3, "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
        }
      }, external_react_default.a.createElement(polaris_["Thumbnail"], {
        source: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        size: "large",
        alt: "background image"
      }))))), external_react_default.a.createElement(polaris_["Card"], {
        sectioned: true
      }, external_react_default.a.createElement(polaris_["Heading"], null, "Logo"), external_react_default.a.createElement(polaris_["TextField"], {
        label: "Display your logo as part of the overlay. Leave as 'none' for no logo.",
        value: logoUrl,
        onChange: _classPrivateFieldGet(this, _handleChange).call(this, 'logoUrl'),
        pattern: urlFieldPattern,
        type: "url",
        error: _classPrivateFieldGet(this, _isInvalid).call(this, logoUrl, urlFieldPattern, 'logoUrl'),
        prefix: "image url:"
      }), external_react_default.a.createElement("div", {
        className: "Polaris-Labelled__HelpText"
      }, "You can upload images in ", external_react_default.a.createElement("a", {
        href: "https://" + shopOrigin + "/admin/settings/files"
      }, "Settings > Files")), external_react_default.a.createElement(polaris_["InlineError"], {
        message: _classPrivateFieldGet(this, _isInvalid).call(this, logoUrl, urlFieldPattern, 'logoUrl') ? "Invalid url. Make sure to include http:// or https://" : "",
        fieldID: "logoUrl"
      }), logoUrl !== 'none' && !_classPrivateFieldGet(this, _isInvalid).call(this, logoUrl, urlFieldPattern, 'logoUrl') && external_react_default.a.createElement(polaris_["Thumbnail"], {
        source: logoUrl,
        size: "large",
        alt: "logo image"
      })), external_react_default.a.createElement(polaris_["Card"], {
        sectioned: true
      }, external_react_default.a.createElement(polaris_["Heading"], null, "Header Text"), external_react_default.a.createElement(polaris_["TextField"], {
        value: headerText,
        onChange: _classPrivateFieldGet(this, _handleChange).call(this, 'headerText'),
        type: "text",
        helpText: "You can use the variable {{age}} to include your set age requirement."
      })), external_react_default.a.createElement(polaris_["Card"], {
        sectioned: true
      }, external_react_default.a.createElement(polaris_["Heading"], null, "Subheader Text"), external_react_default.a.createElement(polaris_["TextField"], {
        value: subheaderText,
        onChange: _classPrivateFieldGet(this, _handleChange).call(this, 'subheaderText'),
        type: "text",
        helpText: "You can use the variable {{age}} to include your set age requirement.",
        multiline: "true"
      })), external_react_default.a.createElement(polaris_["Card"], {
        sectioned: true
      }, external_react_default.a.createElement(polaris_["Heading"], null, "Buttons"), external_react_default.a.createElement(polaris_["SettingToggle"], {
        action: {
          content: exitButtonStatus,
          onAction: _classPrivateFieldGet(this, _handleSwitch).call(this, 'exitButton')
        },
        enabled: exitButton
      }, "The exit link is displayed as ", external_react_default.a.createElement(polaris_["TextStyle"], {
        variation: "strong"
      }, exitButtonTextStatus)), exitButton && external_react_default.a.createElement(polaris_["Layout"].Section, null, external_react_default.a.createElement("p", null, "Exit Button Background Color:"), external_react_default.a.createElement(polaris_["ColorPicker"], {
        onChange: _classPrivateFieldGet(this, _handleChange).call(this, 'exitButtonColor'),
        color: exitButtonColor
      }))))), errorMarkup, external_react_default.a.createElement(polaris_["PageActions"], {
        primaryAction: [{
          content: 'Save Settings',
          onAction: function onAction() {
            _classPrivateFieldGet(_this3, _updateAgeGate).call(_this3);
          }
        }],
        secondaryActions: [{
          content: 'Uninstall Age Gate',
          onAction: function onAction() {
            console.log('uninstall age gate action');

            _classPrivateFieldGet(_this3, _uninstallAgeGate).call(_this3);
          }
        }]
      }));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

var _handleChange = new weak_map_default.a();

var _handleSwitch = new weak_map_default.a();

var _exampleBackground = new weak_map_default.a();

var _isInvalid = new weak_map_default.a();

var _updateAgeGate = new weak_map_default.a();

var _uninstallAgeGate = new weak_map_default.a();

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "nj/N":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });