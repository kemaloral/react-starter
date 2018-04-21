/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"index": 0
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.css":
/*!********************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ReactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
__webpack_require__(/*! font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");
__webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
__webpack_require__(/*! ./site.css */ "./src/site.css");
const layout_1 = __webpack_require__(/*! ./layout */ "./src/layout.tsx");
function renderApp() {
    ReactDom.render(React.createElement(layout_1.default, null), document.getElementById('HelloDiv'));
}
renderApp();
if (false) {}


/***/ }),

/***/ "./src/content.tsx":
/*!*************************!*\
  !*** ./src/content.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement("main", { role: "main", className: "col-md-9 ml-sm-auto col-lg-10 px-4" }, this.props.children);
    }
}
exports.default = Content;


/***/ }),

/***/ "./src/header.tsx":
/*!************************!*\
  !*** ./src/header.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
class header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(reactstrap_1.Navbar, { dark: true, fixed: "top", color: "dark", className: "flex-md-nowrap p-0 shadow", style: { color: "white" } },
            React.createElement(reactstrap_1.NavbarBrand, { className: "col-sm-3 col-md-2 mr-0" }, this.props.title),
            React.createElement(reactstrap_1.Input, { placeholder: "Ara", className: "form-control-dark w-100" }),
            React.createElement(reactstrap_1.Nav, { className: "navbar-nav px-3" },
                React.createElement(reactstrap_1.NavItem, { className: "text-nowrap" },
                    React.createElement(reactstrap_1.NavLink, { href: "" }, "\u00C7\u0131k\u0131\u015F"))));
    }
}
exports.default = header;


/***/ }),

/***/ "./src/layout.tsx":
/*!************************!*\
  !*** ./src/layout.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const header_1 = __webpack_require__(/*! ./header */ "./src/header.tsx");
const sidebar_1 = __webpack_require__(/*! ./sidebar */ "./src/sidebar.tsx");
const content_1 = __webpack_require__(/*! ./content */ "./src/content.tsx");
const page1_1 = __webpack_require__(/*! ./pages/page1 */ "./src/pages/page1.tsx");
const page2_1 = __webpack_require__(/*! ./pages/page2 */ "./src/pages/page2.tsx");
const page3_1 = __webpack_require__(/*! ./pages/page3 */ "./src/pages/page3.tsx");
const page4_1 = __webpack_require__(/*! ./pages/page4 */ "./src/pages/page4.tsx");
const page5_1 = __webpack_require__(/*! ./pages/page5 */ "./src/pages/page5.tsx");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
class layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
    }
    onNavChange(activeIndex) {
        this.setState({ activePageIndex: activeIndex });
    }
    render() {
        return React.createElement("div", null,
            React.createElement(header_1.default, { title: "React Demo" }),
            React.createElement(reactstrap_1.Container, { fluid: true },
                React.createElement(react_router_dom_1.BrowserRouter, null,
                    React.createElement(reactstrap_1.Row, null,
                        React.createElement(sidebar_1.default, null),
                        React.createElement(content_1.default, null,
                            React.createElement(react_router_dom_1.Route, { exact: true, path: "/page1", component: page1_1.default }),
                            React.createElement(react_router_dom_1.Route, { path: "/page2", component: page2_1.default }),
                            React.createElement(react_router_dom_1.Route, { path: "/page3", component: page3_1.default }),
                            React.createElement(react_router_dom_1.Route, { path: "/page4", component: page4_1.default }),
                            React.createElement(react_router_dom_1.Route, { path: "/page5", component: page5_1.default }))))));
    }
}
exports.default = layout;


/***/ }),

/***/ "./src/pages/page1.tsx":
/*!*****************************!*\
  !*** ./src/pages/page1.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class page1 extends React.Component {
    render() {
        return React.createElement("div", null, "page 1");
    }
}
exports.default = page1;


/***/ }),

/***/ "./src/pages/page2.tsx":
/*!*****************************!*\
  !*** ./src/pages/page2.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:3001/api/db").then(data => {
            return data.json();
        }).then(data => {
            this.setState({ Data: data });
        });
    }
    render() {
        return React.createElement("div", null, JSON.stringify(this.state.Data));
    }
}
exports.default = page2;


/***/ }),

/***/ "./src/pages/page3.tsx":
/*!*****************************!*\
  !*** ./src/pages/page3.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class page3 extends React.Component {
    render() {
        return React.createElement("div", null, "page 3");
    }
}
exports.default = page3;


/***/ }),

/***/ "./src/pages/page4.tsx":
/*!*****************************!*\
  !*** ./src/pages/page4.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class page4 extends React.Component {
    render() {
        return React.createElement("div", null, "page 4");
    }
}
exports.default = page4;


/***/ }),

/***/ "./src/pages/page5.tsx":
/*!*****************************!*\
  !*** ./src/pages/page5.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class page5 extends React.Component {
    render() {
        return React.createElement("div", null, "page 5");
    }
}
exports.default = page5;


/***/ }),

/***/ "./src/sidebar.tsx":
/*!*************************!*\
  !*** ./src/sidebar.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement("div", { className: "col-md-2 d-none d-md-block bg-light sidebar" },
            React.createElement("div", { className: "sidebar-sticky" },
                React.createElement(reactstrap_1.Nav, { className: "flex-column" },
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(react_router_dom_1.NavLink, { to: "/page1", className: "nav-link" },
                            React.createElement("i", { className: "fa fa-home" }),
                            " Sayfa 1")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(react_router_dom_1.NavLink, { to: "/page2", className: "nav-link" },
                            React.createElement("i", { className: "fa fa-car" }),
                            " Sayfa 2")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(react_router_dom_1.NavLink, { to: "/page3", className: "nav-link" },
                            React.createElement("i", { className: "fa fa-user" }),
                            " Sayfa 3")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(react_router_dom_1.NavLink, { to: "/page4", className: "nav-link" },
                            React.createElement("i", { className: "fa fa-bus" }),
                            " Sayfa 4")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(react_router_dom_1.NavLink, { to: "/page5", className: "nav-link" },
                            React.createElement("i", { className: "fa fa-plus" }),
                            " Sayfa 5")))));
    }
}
exports.default = (Sidebar);


/***/ }),

/***/ "./src/site.css":
/*!**********************!*\
  !*** ./src/site.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/app.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/app.tsx */"./src/app.tsx");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map