webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

/**
 *
 * @param context
 * @param target
 */

var redirect = function redirect(context, target) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();

  if (context.res) {
    context.res.writeHead(303, {
      location: target
    });
    context.res.end();
  } else {
    router.replace(target);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (true) {
    return redirect({}, '/home');
  } // return redirect({}, '/home');

});

/***/ })

})
//# sourceMappingURL=index.js.c481a02c2c616ecffa08.hot-update.js.map