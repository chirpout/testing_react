webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./pages/css/index.module.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./pages/css/index.module.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".css_container__HobCN {\n    text-align: center;\n    padding-top: 5em;\n    padding-bottom: 5em;\n}\n\n.css_mainbutton__2ncw5 {\n    padding: 1em 2em 1em 2em;\n}\n", "",{"version":3,"sources":["index.module.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;AAC5B","file":"index.module.css","sourcesContent":[".container {\n    text-align: center;\n    padding-top: 5em;\n    padding-bottom: 5em;\n}\n\n.mainbutton {\n    padding: 1em 2em 1em 2em;\n}\n"]}]);
// Exports
exports.locals = {
	"container": "css_container__HobCN",
	"mainbutton": "css_mainbutton__2ncw5"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./pages/index.module.css":
false,

/***/ "./pages/css/index.module.css":
/*!************************************!*\
  !*** ./pages/css/index.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./pages/css/index.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./pages/css/index.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./pages/css/index.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DefaultLayout */ "./components/DefaultLayout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _css_index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/index.module.css */ "./pages/css/index.module.css");
/* harmony import */ var _css_index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_index_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/stanfchristina/Desktop/capstone/testing_react/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Index() {
  return __jsx(_components_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: _css_index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    className: "display-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Your concern, amplified"), __jsx("p", {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Contribute to our platform dedicated to increasing transparency in the workplace."), __jsx("span", {
    className: "buttongroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    className: _css_index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.mainbutton,
    href: "/browse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "FIND A WORKPLACE"), ' ', __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    className: _css_index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.mainbutton,
    href: "/report",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "REPORT A CONCERN"))), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: _css_index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "REPORT SECURELY"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "See something, say something. You're completely anonymous. Simple, fast reporting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "BE HEARD"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Your report gets aggregated so we can do statistics stuff. We publish our analyses so your workplace is transparent, blah. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "ANALYSE TRENDS"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Track companies over time. See current issues in your industry and region. Browse data. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))));
}

/***/ }),

/***/ "./pages/index.module.css":
false

})
//# sourceMappingURL=index.js.7dcf299108624143cedb.hot-update.js.map