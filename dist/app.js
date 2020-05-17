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
/******/ 	__webpack_require__.p = "/";
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



const element = Object(lwc__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ui-app", { is: ui_reddit__WEBPACK_IMPORTED_MODULE_1__["default"] });
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

/***/ "./src/modules/data/subRedditDataProvider/subRedditDataProvider.js":
/*!*************************************************************************!*\
  !*** ./src/modules/data/subRedditDataProvider/subRedditDataProvider.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSubRedditDetails; });
/* harmony import */ var _lwc_wire_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lwc/wire-service */ "../../.npm/lib/node_modules/lwc-services/node_modules/@lwc/wire-service/dist/wire-service.cjs.js");
/* harmony import */ var _lwc_wire_service__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lwc_wire_service__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var data_reddit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data/reddit */ "./src/modules/data/reddit/reddit.js");


function getSubRedditDetails(config) {
  return Object(data_reddit__WEBPACK_IMPORTED_MODULE_1__["getSubReddit"])(config.subRedditName);
}
Object(_lwc_wire_service__WEBPACK_IMPORTED_MODULE_0__["register"])(getSubRedditDetails, eventTarget => {
  eventTarget.addEventListener("config", config => {
    Object(data_reddit__WEBPACK_IMPORTED_MODULE_1__["getSubReddit"])(config && config.subRedditName).then(resp => eventTarget.dispatchEvent(new _lwc_wire_service__WEBPACK_IMPORTED_MODULE_0__["ValueChangedEvent"]({
      data: resp
    })));
  });
  eventTarget.addEventListener("connect", config => {
    Object(data_reddit__WEBPACK_IMPORTED_MODULE_1__["getSubReddit"])(config && config.subRedditName).then(resp => eventTarget.dispatchEvent(new _lwc_wire_service__WEBPACK_IMPORTED_MODULE_0__["ValueChangedEvent"]({
      data: resp
    })));
  });
});

/***/ }),

/***/ "./src/modules/ui/reddit/reddit.html":
/*!*******************************************!*\
  !*** ./src/modules/ui/reddit/reddit.html ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reddit_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reddit.css */ "../../.npm/lib/node_modules/lwc-services/lib/utils/webpack/mocks/empty-style.js");
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
  }, []), $cmp.hasData ? api_iterator($cmp.subRedditData.data, function (post) {
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
  hostAttribute: "ui-reddit-_reddit-host",
  shadowAttribute: "ui-reddit-_reddit"
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
/* harmony import */ var data_subRedditDataProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data/subRedditDataProvider */ "./src/modules/data/subRedditDataProvider/subRedditDataProvider.js");






class Reddit extends lwc__WEBPACK_IMPORTED_MODULE_0__["LightningElement"] {
  constructor(...args) {
    super(...args);
    this.subRedditName = "worldnews";
    this.subRedditData = void 0;
  }

  updateSubReddit(event) {
    this.subRedditName = event.target.value;
  }

  get hasData() {
    return this.subRedditData && this.subRedditData.data;
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
    subRedditData: {
      adapter: data_subRedditDataProvider__WEBPACK_IMPORTED_MODULE_2__["default"],
      params: {
        subRedditName: "subRedditName"
      },
      static: {},
      hasParams: true,
      config: function ($cmp) {
        return {
          subRedditName: $cmp.subRedditName
        };
      }
    }
  },
  fields: ["subRedditName"]
})

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