"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Components/NavBar/NavBar.js":
/*!*************************************!*\
  !*** ./Components/NavBar/NavBar.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/NavBar.module.css */ "./Components/NavBar/style/NavBar.module.css");
/* harmony import */ var _style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/mnt/d/xamp/htdocs/GameHighlitsWeb/client/Components/NavBar/NavBar.js",
    _this = undefined,
    _s = $RefreshSig$();





var NavBar = function NavBar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sidebar = _useState[0],
      setsidebar = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      Input = _useState2[0],
      setInput = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navBar),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().HeaderBar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().HomeButton),
        onClick: function onClick() {
          setsidebar(true);
        },
        children: "G H"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          placeholder: "Search..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().uploadText),
          onClick: function onClick() {
            return router.push('/user-chanel/upload');
          },
          children: "Uplod"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().userText),
          onClick: function onClick() {
            return router.push("/account");
          },
          children: "User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: sidebar ? (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().NavMenuActive) : styles.NavMenu,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().XButton),
          onClick: function onClick() {
            setsidebar(false);
          },
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ToHomeButton),
          onClick: function onClick() {
            return router.push('/');
          },
          children: "HOME"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ToMyChanel),
          onClick: function onClick() {
            return router.push("/user-chanel");
          },
          children: "MY CHANEL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(NavBar, "di/Yto/n5DvjECsEZ+/RomjLnwI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45ZWUyYzE0NDkyN2VkNTdlZTdmOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNhSCwrQ0FBUSxDQUFDLEtBQUQsQ0FEckI7QUFBQSxNQUNWSSxPQURVO0FBQUEsTUFDREMsVUFEQzs7QUFFakIsTUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4Qjs7QUFGaUIsbUJBR1NELCtDQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR1ZPLEtBSFU7QUFBQSxNQUdIQyxRQUhHOztBQUtqQixzQkFDSTtBQUFLLGFBQVMsRUFBRU4sd0VBQWhCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVBLDJFQUFoQjtBQUFBLDhCQUNJO0FBQVEsaUJBQVMsRUFBRUEsNEVBQW5CO0FBQXFDLGVBQU8sRUFBRSxtQkFBTTtBQUFFRyxVQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQWtCLFNBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIscUJBQVcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFRSTtBQUFBLGdDQUVJO0FBQVEsbUJBQVMsRUFBRUgsNEVBQW5CO0FBQXFDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUksTUFBTSxDQUFDTyxJQUFQLENBQVkscUJBQVosQ0FBTjtBQUFBLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBT0k7QUFBUSxtQkFBUyxFQUFFWCwwRUFBbkI7QUFBbUMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNSSxNQUFNLENBQUNPLElBQVAsQ0FBWSxVQUFaLENBQU47QUFBQSxXQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQXNCSTtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRVQsT0FBTyxHQUFHRiwrRUFBSCxHQUF5QmMsTUFBTSxDQUFDQyxPQUF2RDtBQUFBLGdDQUNJO0FBQVEsbUJBQVMsRUFBRWYseUVBQW5CO0FBQWtDLGlCQUFPLEVBQUUsbUJBQU07QUFBRUcsWUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUFtQixXQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtJO0FBQVEsbUJBQVMsRUFBRUgsOEVBQW5CO0FBQXVDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUksTUFBTSxDQUFDTyxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFTSTtBQUFRLG1CQUFTLEVBQUVYLDRFQUFuQjtBQUFxQyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1JLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLGNBQVosQ0FBTjtBQUFBLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3Q0gsQ0E3Q0Q7O0dBQU1WO1VBRWFGOzs7S0FGYkU7QUErQ04sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUvTmF2QmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaWRlYmFyLCBzZXRzaWRlYmFyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtJbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZCYXJ9PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGUuSGVhZGVyQmFyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5Ib21lQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7IHNldHNpZGViYXIodHJ1ZSkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgRyBIXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZFRleHR9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdXNlci1jaGFuZWwvdXBsb2FkJyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2RcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS51c2VyVGV4dH0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvYWNjb3VudFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c2lkZWJhciA/IHN0eWxlLk5hdk1lbnVBY3RpdmUgOiBzdHlsZXMuTmF2TWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLlhCdXR0b259IG9uQ2xpY2s9eygpID0+IHsgc2V0c2lkZWJhcihmYWxzZSkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLlRvSG9tZUJ1dHRvbn0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhPTUVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLlRvTXlDaGFuZWx9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3VzZXItY2hhbmVsXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTVkgQ0hBTkVMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdHlsZSIsIk5hdkJhciIsInNpZGViYXIiLCJzZXRzaWRlYmFyIiwicm91dGVyIiwiSW5wdXQiLCJzZXRJbnB1dCIsIm5hdkJhciIsIkhlYWRlckJhciIsIkhvbWVCdXR0b24iLCJ1cGxvYWRUZXh0IiwicHVzaCIsInVzZXJUZXh0IiwiTmF2TWVudUFjdGl2ZSIsInN0eWxlcyIsIk5hdk1lbnUiLCJYQnV0dG9uIiwiVG9Ib21lQnV0dG9uIiwiVG9NeUNoYW5lbCJdLCJzb3VyY2VSb290IjoiIn0=