webpackHotUpdate("static/development/pages/report.js",{

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
    className: _css_report_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.explanationtitle,
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
      lineNumber: 32
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: executeScroll,
    className: _css_report_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.startbutton,
    outline: true,
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "START"))), __jsx("div", {
    className: _css_report_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.surveycontainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("iframe", {
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
//# sourceMappingURL=report.js.4df05ef34bec271d5fcc.hot-update.js.map