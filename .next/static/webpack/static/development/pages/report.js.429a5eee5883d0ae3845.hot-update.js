webpackHotUpdate("static/development/pages/report.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./pages/css/report.module.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./pages/css/report.module.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".report_qualtrics__2aQnM {\n    border: none;\n    height: 600px;\n    width: 90%;\n}\n\n.report_introductiontext__26AaH {\n    padding: 2em 2em 2em 2em;\n    margin: 2em 2em 2em 2em;\n}\n\n.report_explanationtext__30V2b {\n    margin-top: 4em;\n}\n\n.report_surveycontainer__1UGL0 {\n    margin: 5em 5em 5em 5em;\n}\n\n.report_buttoncontainer__rYkPh {\n    margin-top: 5em;\n}\n\n.report_startbutton__2QHlL {\n    padding: 1em 2em 1em 2em;\n    margin-left: 36px;\n    margin-right: 36px;\n}\n\n.report_maincontainer__4s5Gv {\n    text-align: center;\n}\n", "",{"version":3,"sources":["report.module.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,UAAU;AACd;;AAEA;IACI,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB","file":"report.module.css","sourcesContent":[".qualtrics {\n    border: none;\n    height: 600px;\n    width: 90%;\n}\n\n.introductiontext {\n    padding: 2em 2em 2em 2em;\n    margin: 2em 2em 2em 2em;\n}\n\n.explanationtext {\n    margin-top: 4em;\n}\n\n.surveycontainer {\n    margin: 5em 5em 5em 5em;\n}\n\n.buttoncontainer {\n    margin-top: 5em;\n}\n\n.startbutton {\n    padding: 1em 2em 1em 2em;\n    margin-left: 36px;\n    margin-right: 36px;\n}\n\n.maincontainer {\n    text-align: center;\n}\n"]}]);
// Exports
exports.locals = {
	"qualtrics": "report_qualtrics__2aQnM",
	"introductiontext": "report_introductiontext__26AaH",
	"explanationtext": "report_explanationtext__30V2b",
	"surveycontainer": "report_surveycontainer__1UGL0",
	"buttoncontainer": "report_buttoncontainer__rYkPh",
	"startbutton": "report_startbutton__2QHlL",
	"maincontainer": "report_maincontainer__4s5Gv"
};

/***/ }),

/***/ "./pages/report.js":
/*!*************************!*\
  !*** ./pages/report.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Report; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DefaultLayout */ "./components/DefaultLayout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _css_report_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/report.module.css */ "./pages/css/report.module.css");
/* harmony import */ var _css_report_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_report_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/stanfchristina/Desktop/capstone/testing_react/pages/report.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Report() {
  return __jsx(_components_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(ReportIntroduction, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

var ReportIntroduction = function ReportIntroduction() {
  var myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var executeScroll = function executeScroll() {
    return scrollToRef(myRef);
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: _css_report_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.maincontainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: _css_report_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.introductiontext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Report a workplace concern"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "How it works:"), __jsx("div", {
    className: _css_report_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.explanationtext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.")), __jsx("div", {
    className: _css_report_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttoncontainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: executeScroll,
    className: _css_report_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.startbutton,
    outline: true,
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "START"))), __jsx("div", {
    className: _css_report_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.surveycontainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("iframe", {
    ref: myRef,
    className: _css_report_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.qualtrics,
    src: "https://ischooluw.co1.qualtrics.com/jfe/form/SV_aa67eixcMktPOmh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })));
};

var scrollToRef = function scrollToRef(ref) {
  return window.scrollTo(0, ref.current.offsetTop);
}; // General scroll to element function


var ScrollDemo = function ScrollDemo() {
  var myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var executeScroll = function executeScroll() {
    return scrollToRef(myRef);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    ref: myRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "I wanna be seen"), __jsx("button", {
    onClick: executeScroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, " Click to scroll "));
};

/***/ })

})
//# sourceMappingURL=report.js.429a5eee5883d0ae3845.hot-update.js.map