webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/cheemad/Projects/codeforweb/pages/_error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Error = function Error() {
  __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Coming Soon");
};
/**
 *
 * @param res
 * @param err
 * @returns {{statusCode: *}}
 */


Error.getInitialProps = function (_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : null;

  if (res) {
    if (statusCode === 404) {
      res.writeHead(302, {
        Location: '/home'
      });
      res.end();
    }
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/home');
  }

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ })

})
//# sourceMappingURL=_error.js.8e13822ab8b6c174ef29.hot-update.js.map