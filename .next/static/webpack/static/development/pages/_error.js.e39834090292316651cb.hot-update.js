webpackHotUpdate("static/development/pages/_error.js", {
  /***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js": false,

  /***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js": false,

  /***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js": false,

  /***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js": false,

  /***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js": false,

  /***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js": false,

  /***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js": false,

  /***/ "./node_modules/core-js/library/fn/array/from.js": false,

  /***/ "./node_modules/core-js/library/fn/is-iterable.js": false,

  /***/ "./node_modules/core-js/library/fn/set.js": false,

  /***/ "./node_modules/core-js/library/modules/_array-from-iterable.js": false,

  /***/ "./node_modules/core-js/library/modules/_array-methods.js": false,

  /***/ "./node_modules/core-js/library/modules/_array-species-constructor.js": false,

  /***/ "./node_modules/core-js/library/modules/_array-species-create.js": false,

  /***/ "./node_modules/core-js/library/modules/_collection-strong.js": false,

  /***/ "./node_modules/core-js/library/modules/_collection-to-json.js": false,

  /***/ "./node_modules/core-js/library/modules/_collection.js": false,

  /***/ "./node_modules/core-js/library/modules/_create-property.js": false,

  /***/ "./node_modules/core-js/library/modules/_set-collection-from.js": false,

  /***/ "./node_modules/core-js/library/modules/_set-collection-of.js": false,

  /***/ "./node_modules/core-js/library/modules/_validate-collection.js": false,

  /***/ "./node_modules/core-js/library/modules/core.is-iterable.js": false,

  /***/ "./node_modules/core-js/library/modules/es6.array.from.js": false,

  /***/ "./node_modules/core-js/library/modules/es6.set.js": false,

  /***/ "./node_modules/core-js/library/modules/es7.set.from.js": false,

  /***/ "./node_modules/core-js/library/modules/es7.set.of.js": false,

  /***/ "./node_modules/core-js/library/modules/es7.set.to-json.js": false,

  /***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fcheemad%2FProjects%2Fcodeforweb%2Fpages%2F_error.js!./":
    /*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fcheemad%2FProjects%2Fcodeforweb%2Fpages%2F_error.js ***!
  \*********************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function() {
          var mod = __webpack_require__(
            /*! ./pages/_error.js */ "./pages/_error.js"
          );
          if (true) {
            module.hot.accept(
              /*! ./pages/_error.js */ "./pages/_error.js",
              function() {
                if (!next.router.components["/_error"]) return;
                var updatedPage = __webpack_require__(
                  /*! ./pages/_error.js */ "./pages/_error.js"
                );
                next.router.update("/_error", updatedPage);
              }
            );
          }
          return mod;
        }
      ]);

      /***/
    },

  /***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./": false,

  /***/ "./node_modules/next/dist/next-server/lib/amp-context.js": false,

  /***/ "./node_modules/next/dist/next-server/lib/amp.js": false,

  /***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js": false,

  /***/ "./node_modules/next/dist/next-server/lib/head.js": false,

  /***/ "./node_modules/next/dist/next-server/lib/side-effect.js": false,

  /***/ "./node_modules/next/dist/pages/_error.js": false,

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
          "Coming Soon"
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
        console.log(res);

        if (res) {
          var statusCode = err ? err.statusCode : null;
          console.log(statusCode);

          if (statusCode === 404) {
            res.writeHead(302, {
              Location: "/home"
            });
            res.end();
          }
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/home");
        }

        return {};
      };

      /* harmony default export */ __webpack_exports__["default"] = Error;

      /***/
    },

  /***/ 1:
    /*!*************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fcheemad%2FProjects%2Fcodeforweb%2Fpages%2F_error.js ***!
  \*************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
        /*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fcheemad%2FProjects%2Fcodeforweb%2Fpages%2F_error.js! */ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fcheemad%2FProjects%2Fcodeforweb%2Fpages%2F_error.js!./"
      );

      /***/
    }
});
//# sourceMappingURL=_error.js.e39834090292316651cb.hot-update.js.map
