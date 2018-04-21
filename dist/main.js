(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/db-router.ts":
/*!*****************************!*\
  !*** ./server/db-router.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __webpack_require__(/*! express */ "express");
const sql = __webpack_require__(/*! mssql */ "mssql");
const config = {
    user: 'sa',
    password: '01012000',
    server: 'DESKTOP-6L95NG5',
    database: 'TESTNODE'
};
class dbRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    find(req, res, next) {
        let query = `select U.Name  ,UserInfo.Telephone 
        from [User] U
        left join [dbo].[UserInfo] UserInfo on UserInfo.UserId=U.Id`;
        new sql.ConnectionPool(config).connect().then(pool => {
            var request = pool.request();
            request.query(query).then(result => {
                res.status(201).send(result.recordset);
            });
        });
    }
    findUser(req, res, next) {
        let query = `select U.Name  
        from [User] U`;
        new sql.ConnectionPool(config).connect().then(pool => {
            var request = pool.request();
            request.query(query).then(result => {
                res.status(201).send(result.recordset);
            });
        });
    }
    userById(req, res, next) {
        let id = req.params.id;
        let query = `select Name  
        from [User] where Id=@Id`;
        new sql.ConnectionPool(config).connect().then(pool => {
            var request = pool.request();
            request.input("Id", id).query(query).then(result => {
                res.status(201).send(result.recordset);
            });
        });
    }
    init() {
        this.router.get('/', this.find.bind(this));
        this.router.get('/user', this.findUser.bind(this));
        this.router.get('/user/:id', this.userById.bind(this));
    }
}
exports.dbRouter = dbRouter;
const dbRoutes = new dbRouter();
const router = dbRoutes.router;
exports.default = router;


/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const http = __webpack_require__(/*! http */ "http");
const server_1 = __webpack_require__(/*! ./server */ "./server/server.ts");
const port = normalizePort(process.env.PORT || 3001);
server_1.default.set('port', port);
const server = http.createServer(server_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
    let port = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
}
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
}


/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const express = __webpack_require__(/*! express */ "express");
const path = __webpack_require__(/*! path */ "path");
const cors_prefetch_middleware_1 = __webpack_require__(/*! cors-prefetch-middleware */ "cors-prefetch-middleware");
const db_router_1 = __webpack_require__(/*! ./db-router */ "./server/db-router.ts");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(cors_prefetch_middleware_1.default);
        this.express.use(bodyParser.json({ limit: '50mb' }));
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        let router = express.Router();
        this.express.use(express.static("public"));
        this.express.use(express.static("dist"));
        this.express.use(express.static("dist/uploads"));
        this.express.use(/\/((?!api).)*/, function (req, res) {
            res.sendFile('index.html', { root: path.resolve(".", "dist") }, function (err) {
                if (err) {
                    res.status(500).send(err);
                }
            });
        });
        this.express.use("/", router);
        this.express.use("/api/db", db_router_1.default);
    }
}
exports.default = new App().express;


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./server/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./server/index.ts */"./server/index.ts");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors-prefetch-middleware":
/*!*******************************************!*\
  !*** external "cors-prefetch-middleware" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors-prefetch-middleware");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "mssql":
/*!************************!*\
  !*** external "mssql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mssql");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map