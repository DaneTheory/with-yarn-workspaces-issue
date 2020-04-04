(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "../../.yarn/$$virtual/bar-virtual-5078f70dcd/1/packages/bar/index.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/bdane/Repos/Open_Source/OWNER/Experiments/with-yarn-workspaces-issue/.yarn/$$virtual/bar-virtual-5078f70dcd/1/packages/bar/index.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-16.13.1-56d408860d-2.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/bdane/Repos/Open_Source/OWNER/Experiments/with-yarn-workspaces-issue/.yarn/$$virtual/bar-virtual-5078f70dcd/1/packages/bar/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Bar = function Bar() {
  return __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 19
    }
  }, "bar");
};

/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ }),

/***/ "../../.yarn/$$virtual/next-virtual-410e58fd26/0/cache/next-npm-9.3.4-202c10d685-2.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fbdane%2FRepos%2FOpen_Source%2FOWNER%2FExperiments%2Fwith-yarn-workspaces-issue%2Fpackages%2Fweb-app%2Fpages%2Findex.js!./":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/bdane/Repos/Open_Source/OWNER/Experiments/with-yarn-workspaces-issue/.yarn/$$virtual/next-virtual-410e58fd26/0/cache/next-npm-9.3.4-202c10d685-2.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fbdane%2FRepos%2FOpen_Source%2FOWNER%2FExperiments%2Fwith-yarn-workspaces-issue%2Fpackages%2Fweb-app%2Fpages%2Findex.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "../../.yarn/cache/react-npm-16.13.1-56d408860d-2.zip/node_modules/react/index.js":
/*!**********************************************************************************************************************************************!*\
  !*** delegated ../../.yarn/cache/react-npm-16.13.1-56d408860d-2.zip/node_modules/react/index.js from dll-reference dll_da40a7b71ee22d26d9a9 ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_da40a7b71ee22d26d9a9 */ "dll-reference dll_da40a7b71ee22d26d9a9"))("../../.yarn/cache/react-npm-16.13.1-56d408860d-2.zip/node_modules/react/index.js");

/***/ }),

/***/ "../foo/index.js":
/*!***********************!*\
  !*** ../foo/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = 'foo'


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-16.13.1-56d408860d-2.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foo */ "../foo/index.js");
/* harmony import */ var foo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bar */ "../../.yarn/$$virtual/bar-virtual-5078f70dcd/1/packages/bar/index.js");
var _this = undefined,
    _jsxFileName = "/Users/bdane/Repos/Open_Source/OWNER/Experiments/with-yarn-workspaces-issue/packages/web-app/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, "Imported modules from another workspace:", __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, foo__WEBPACK_IMPORTED_MODULE_1___default.a), __jsx(bar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }));
});

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fbdane%2FRepos%2FOpen_Source%2FOWNER%2FExperiments%2Fwith-yarn-workspaces-issue%2Fpackages%2Fweb-app%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fbdane%2FRepos%2FOpen_Source%2FOWNER%2FExperiments%2Fwith-yarn-workspaces-issue%2Fpackages%2Fweb-app%2Fpages%2Findex.js! */"../../.yarn/$$virtual/next-virtual-410e58fd26/0/cache/next-npm-9.3.4-202c10d685-2.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fbdane%2FRepos%2FOpen_Source%2FOWNER%2FExperiments%2Fwith-yarn-workspaces-issue%2Fpackages%2Fweb-app%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_da40a7b71ee22d26d9a9":
/*!*******************************************!*\
  !*** external "dll_da40a7b71ee22d26d9a9" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_da40a7b71ee22d26d9a9;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map