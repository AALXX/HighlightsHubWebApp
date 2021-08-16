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
          className: styles.ToMyChanel,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZjU0MDE1NzMzMTMzY2U4N2YyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNhSCwrQ0FBUSxDQUFDLEtBQUQsQ0FEckI7QUFBQSxNQUNWSSxPQURVO0FBQUEsTUFDREMsVUFEQzs7QUFFakIsTUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4Qjs7QUFGaUIsbUJBR1NELCtDQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR1ZPLEtBSFU7QUFBQSxNQUdIQyxRQUhHOztBQUtqQixzQkFDSTtBQUFLLGFBQVMsRUFBRU4sd0VBQWhCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVBLDJFQUFoQjtBQUFBLDhCQUNJO0FBQVEsaUJBQVMsRUFBRUEsNEVBQW5CO0FBQXFDLGVBQU8sRUFBRSxtQkFBTTtBQUFFRyxVQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQWtCLFNBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIscUJBQVcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFRSTtBQUFBLGdDQUVJO0FBQVEsbUJBQVMsRUFBRUgsNEVBQW5CO0FBQXFDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUksTUFBTSxDQUFDTyxJQUFQLENBQVkscUJBQVosQ0FBTjtBQUFBLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBT0k7QUFBUSxtQkFBUyxFQUFFWCwwRUFBbkI7QUFBbUMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNSSxNQUFNLENBQUNPLElBQVAsQ0FBWSxVQUFaLENBQU47QUFBQSxXQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQXNCSTtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRVQsT0FBTyxHQUFHRiwrRUFBSCxHQUF5QmMsTUFBTSxDQUFDQyxPQUF2RDtBQUFBLGdDQUNJO0FBQVEsbUJBQVMsRUFBRWYseUVBQW5CO0FBQWtDLGlCQUFPLEVBQUUsbUJBQU07QUFBRUcsWUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUFtQixXQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtJO0FBQVEsbUJBQVMsRUFBRUgsOEVBQW5CO0FBQXVDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUksTUFBTSxDQUFDTyxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFTSTtBQUFRLG1CQUFTLEVBQUVHLE1BQU0sQ0FBQ0ksVUFBMUI7QUFBc0MsaUJBQU8sRUFBRTtBQUFBLG1CQUFNZCxNQUFNLENBQUNPLElBQVAsQ0FBWSxjQUFaLENBQU47QUFBQSxXQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0NILENBN0NEOztHQUFNVjtVQUVhRjs7O0tBRmJFO0FBK0NOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlL05hdkJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2lkZWJhciwgc2V0c2lkZWJhcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbSW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2QmFyfT5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlLkhlYWRlckJhcn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuSG9tZUJ1dHRvbn0gb25DbGljaz17KCkgPT4geyBzZXRzaWRlYmFyKHRydWUpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEcgSFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRUZXh0fSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3VzZXItY2hhbmVsL3VwbG9hZCcpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9kXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUudXNlclRleHR9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2FjY291bnRcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3NpZGViYXIgPyBzdHlsZS5OYXZNZW51QWN0aXZlIDogc3R5bGVzLk5hdk1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5YQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7IHNldHNpZGViYXIoZmFsc2UpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5Ub0hvbWVCdXR0b259IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIT01FXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuVG9NeUNoYW5lbH0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvdXNlci1jaGFuZWxcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNWSBDSEFORUxcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInN0eWxlIiwiTmF2QmFyIiwic2lkZWJhciIsInNldHNpZGViYXIiLCJyb3V0ZXIiLCJJbnB1dCIsInNldElucHV0IiwibmF2QmFyIiwiSGVhZGVyQmFyIiwiSG9tZUJ1dHRvbiIsInVwbG9hZFRleHQiLCJwdXNoIiwidXNlclRleHQiLCJOYXZNZW51QWN0aXZlIiwic3R5bGVzIiwiTmF2TWVudSIsIlhCdXR0b24iLCJUb0hvbWVCdXR0b24iLCJUb015Q2hhbmVsIl0sInNvdXJjZVJvb3QiOiIifQ==