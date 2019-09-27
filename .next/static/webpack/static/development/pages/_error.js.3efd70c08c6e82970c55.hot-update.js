webpackHotUpdate("static/development/pages/_error.js", {
  /***/ "./pages/_error.js":
    /*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! next/router */ "./node_modules/next/dist/client/router.js"
      );
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        next_router__WEBPACK_IMPORTED_MODULE_1__
      );
      var _jsxFileName = "/Users/cheemad/Projects/codeforweb/pages/_error.js";
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      var Error = function Error() {
        return __jsx(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 4
            },
            __self: this
          },
          "Coming to you"
        );
      };
      /**
       * @todo Need to clean this up.
       * @param res
       * @param err
       * @returns {{statusCode: *}}
       */

      Error.getInitialProps = function(_ref) {
        var res = _ref.res,
          err = _ref.err;

        if (res) {
          var statusCode = err ? err.statusCode : null;
          console.log(res);

          if (statusCode === 404) {
            res.writeHead(302, {
              Location: "/home"
            });
            return res.end();
          }
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/home");
        }

        return {};
      };

      /* harmony default export */ __webpack_exports__["default"] = Error;

      /***/
    }
});
//# sourceMappingURL=_error.js.3efd70c08c6e82970c55.hot-update.js.map
