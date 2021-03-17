/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"lwc~main","node_vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "../../.npm/lib/node_modules/lwc-services/node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui_reddit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/reddit */ "./src/modules/ui/reddit/reddit.js");


const element = Object(lwc__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ui-app", {
  is: ui_reddit__WEBPACK_IMPORTED_MODULE_1__["default"]
});
document.querySelector("#main").appendChild(element);

/***/ }),

/***/ "./src/modules/data/reddit/reddit.js":
/*!*******************************************!*\
  !*** ./src/modules/data/reddit/reddit.js ***!
  \*******************************************/
/*! exports provided: getSubReddit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubReddit", function() { return getSubReddit; });
const getSubReddit = async subreddit => {
  subreddit = subreddit || "worldnews";
  const resp = await (await fetch(`https://www.reddit.com/r/${subreddit}.json`, {
    mode: "cors",
    headers: {
      Accept: "application/json"
    }
  })).json();
  return resp.data.children.slice(0, 10).map(c => c.data);
};

/***/ }),

/***/ "./src/modules/data/subRedditWire/subRedditWire.js":
/*!*********************************************************!*\
  !*** ./src/modules/data/subRedditWire/subRedditWire.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "../../.npm/lib/node_modules/lwc-services/node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subRedditWire_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subRedditWire.html */ "../../.npm/lib/node_modules/lwc-services/node_modules/lwc-webpack-plugin/dist/mocks/empty-style.js");
/* harmony import */ var _subRedditWire_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subRedditWire_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var data_reddit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data/reddit */ "./src/modules/data/reddit/reddit.js");




class SubRedditWire {
  constructor(dataCallback) {
    this.dataCallback = void 0;
    this.connected = false;
    this.dataCallback = dataCallback;
  }

  connect() {
    this.connected = true;
    this.dataCallback({});
  }

  disconnect() {
    this.connected = false;
  }

  update(config) {
    if (this.connected) {
      Object(data_reddit__WEBPACK_IMPORTED_MODULE_2__["getSubReddit"])(config && config.subRedditName).then(resp => this.dataCallback({
        data: resp
      })).catch(err => this.dataCallback({
        error: err
      }));
    }
  }

}

Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerDecorators"])(SubRedditWire, {
  fields: ["dataCallback", "connected"]
});

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerComponent"])(SubRedditWire, {
  tmpl: _subRedditWire_html__WEBPACK_IMPORTED_MODULE_1___default.a
}));

/***/ }),

/***/ "./src/modules/ui/reddit/reddit.html":
/*!*******************************************!*\
  !*** ./src/modules/ui/reddit/reddit.html ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reddit_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reddit.css */ "../../.npm/lib/node_modules/lwc-services/node_modules/lwc-webpack-plugin/dist/mocks/empty-style.js");
/* harmony import */ var _reddit_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reddit_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lwc */ "../../.npm/lib/node_modules/lwc-services/node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_1__);




function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    t: api_text,
    b: api_bind,
    h: api_element,
    d: api_dynamic,
    k: api_key,
    i: api_iterator,
    f: api_flatten
  } = $api;
  const {
    _m0
  } = $ctx;
  return api_flatten([api_text("Subreddit Name: "), api_element("input", {
    props: {
      "value": $cmp.subRedditName
    },
    key: 0,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.updateSubReddit))
    }
  }, []), $cmp.hasData ? api_iterator($cmp.subRedditData, function (post) {
    return api_element("a", {
      attrs: {
        "target": "_blank",
        "href": post.url
      },
      key: api_key(2, post.url)
    }, [api_element("h2", {
      key: api_key(1, post.title)
    }, [api_dynamic(post.title)])]);
  }) : []]);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_1__["registerTemplate"])(tmpl));
tmpl.stylesheets = [];

if (_reddit_css__WEBPACK_IMPORTED_MODULE_0___default.a) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _reddit_css__WEBPACK_IMPORTED_MODULE_0___default.a)
}
tmpl.stylesheetTokens = {
  hostAttribute: "my-ui-reddit_reddit-host",
  shadowAttribute: "my-ui-reddit_reddit"
};


/***/ }),

/***/ "./src/modules/ui/reddit/reddit.js":
/*!*****************************************!*\
  !*** ./src/modules/ui/reddit/reddit.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "../../.npm/lib/node_modules/lwc-services/node_modules/@lwc/engine/dist/engine.cjs.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reddit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reddit.html */ "./src/modules/ui/reddit/reddit.html");
/* harmony import */ var data_subRedditWire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data/subRedditWire */ "./src/modules/data/subRedditWire/subRedditWire.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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



class Reddit extends lwc__WEBPACK_IMPORTED_MODULE_0__["LightningElement"] {
  constructor(...args) {
    super(...args);
    this.subRedditName = 'worldnews';
    this.subRedditData = [];
  }

  updateSubReddit(event) {
    this.subRedditName = event.target.value;
  }

  get hasData() {
    return this.subRedditData;
  }

  decodeHtml(html) {
    let span = document.createElement('span');
    span.innerHTML = html;
    return span.innerText;
  }

  wiredSubredditData({
    error,
    data
  }) {
    if (!error && data) {
      this.subRedditData = data.map(post => _objectSpread(_objectSpread({}, post), {}, {
        title: this.decodeHtml(post.title)
      }));
    } else if (error) {
      console.error(error);
    }
  }
  /**
  connectedCallback() {
  getSubRedditDetails({ subRedditName: this.subRedditName }).then(
    (resp) => (this.subRedditData = resp)
  );
  }
  **/


}

Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerDecorators"])(Reddit, {
  wire: {
    wiredSubredditData: {
      adapter: data_subRedditWire__WEBPACK_IMPORTED_MODULE_2__["default"],
      dynamic: ["subRedditName"],
      method: 1,
      config: function ($cmp) {
        return {
          subRedditName: $cmp.subRedditName
        };
      }
    }
  },
  fields: ["subRedditName", "subRedditData"]
});

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerComponent"])(Reddit, {
  tmpl: _reddit_html__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************!*\
  !*** multi /home/85suraj/.npm/lib/node_modules/lwc-services/node_modules/error-overlay-webpack-plugin/lib/entry-basic.js ./src/index.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/85suraj/.npm/lib/node_modules/lwc-services/node_modules/error-overlay-webpack-plugin/lib/entry-basic.js */"../../.npm/lib/node_modules/lwc-services/node_modules/error-overlay-webpack-plugin/lib/entry-basic.js");
module.exports = __webpack_require__(/*! /home/85suraj/code-projects/lwc-wire-adapter/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map