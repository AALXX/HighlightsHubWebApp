(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Components/NavBar/NavBar.js":
/*!*************************************!*\
  !*** ./Components/NavBar/NavBar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/NavBar.module.css */ "./Components/NavBar/style/NavBar.module.css");
/* harmony import */ var _style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavBarChanelLinksModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBarChanelLinksModel */ "./Components/NavBar/NavBarChanelLinksModel.js");

var _jsxFileName = "/mnt/d/xamp/htdocs/GameHighlitsWeb/client/Components/NavBar/NavBar.js";






function NavBar() {
  const {
    0: sidebar,
    1: setsidebar
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: Input,
    1: setInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: FolowedChanelsList,
    1: setFolowedChanelsList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    ChanelsId: "",
    ChanelName: ""
  }]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${"http://localhost:7000/api"}/user-account-manager/get-user-folowed-chanels/${js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get("UserToken")}`).then(res => {
      let FolowedChanelsListArr = [];

      for (let i = 0; i < res.data.length; i++) {
        FolowedChanelsListArr.push(res.data[i]);
      }

      setFolowedChanelsList(FolowedChanelsListArr);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().UpNavBarBackground),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().LogoButton),
        onClick: () => {
          setsidebar(true);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),
          children: "Logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().SearchBarBorder),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().SearchBar),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "test",
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().SearchBarInput),
            placeholder: "Search",
            onChange: event => setInput(event.currentTarget.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().SearchButton),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/assets/NavBarIcons/SearchBarIcon.svg",
            alt: "next",
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().SearchIcon)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().AccountImageButton),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/assets/NavBarIcons/RedAccountDefaultImage.svg",
          alt: "AccountImageButton",
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().AccountImage)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: sidebar ? (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().SideBarActive) : null,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: sidebar ? (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().NavMenuActive) : (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().NavMenu),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().XButton),
          onClick: () => setsidebar(false),
          children: "\u2573"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#4D4D4D",
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().HorizontalLine)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().SideBarButton),
            children: "HOME"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().SideBarButton),
            children: "MY CHANEL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().SideBarButton),
            children: "MY HIGHLIGHTS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().SideBarButton),
            children: "SAVED HIGHLIGHTS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#4D4D4D",
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().HorizontalLine)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().FolowedChanelsContainer),
          children: FolowedChanelsList.map((Chanel, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBarChanelLinksModel__WEBPACK_IMPORTED_MODULE_5__.default, {
              ChanelName: Chanel.ChanelName,
              ChanelId: Chanel.ChanelsId
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 33
            }, this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./Components/NavBar/NavBarChanelLinksModel.js":
/*!*****************************************************!*\
  !*** ./Components/NavBar/NavBarChanelLinksModel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChanelLinkTamplate)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_NavBarChanelLinksTamplate_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/NavBarChanelLinksTamplate.module.css */ "./Components/NavBar/style/NavBarChanelLinksTamplate.module.css");
/* harmony import */ var _style_NavBarChanelLinksTamplate_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_NavBarChanelLinksTamplate_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/mnt/d/xamp/htdocs/GameHighlitsWeb/client/Components/NavBar/NavBarChanelLinksModel.js";



function ChanelLinkTamplate(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: `/c/${props.ChanelId}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_style_NavBarChanelLinksTamplate_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: (_style_NavBarChanelLinksTamplate_module_css__WEBPACK_IMPORTED_MODULE_3___default().ChnelNameText),
            children: props.ChanelName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./Layout/Layout.js":
/*!**************************!*\
  !*** ./Layout/Layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/NavBar/NavBar */ "./Components/NavBar/NavBar.js");
/* harmony import */ var _components_Meta_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Meta/Meta */ "./components/Meta/Meta.js");


var _jsxFileName = "/mnt/d/xamp/htdocs/GameHighlitsWeb/client/Layout/Layout.js";



const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta_Meta__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/Meta/Meta.js":
/*!*********************************!*\
  !*** ./components/Meta/Meta.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/mnt/d/xamp/htdocs/GameHighlitsWeb/client/components/Meta/Meta.js";


const Meta = ({
  title,
  keywords,
  description
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "icon",
      href: "/favicon.ico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

Meta.defaultProps = {
  title: 'HighlightsHub' //   keywords: 'web development, programming',
  //   description: 'Get the latest news in web dev',

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Meta);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Layout */ "./Layout/Layout.js");

var _jsxFileName = "/mnt/d/xamp/htdocs/GameHighlitsWeb/client/pages/_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./Components/NavBar/style/NavBar.module.css":
/*!***************************************************!*\
  !*** ./Components/NavBar/style/NavBar.module.css ***!
  \***************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"UpNavBarBackground": "NavBar_UpNavBarBackground__2ZgQD",
	"logo": "NavBar_logo__tnnwo",
	"LogoButton": "NavBar_LogoButton__1aTFa",
	"SearchBarBorder": "NavBar_SearchBarBorder__eouN7",
	"SearchBar": "NavBar_SearchBar__3hzWC",
	"SearchBarInput": "NavBar_SearchBarInput__2wweH",
	"SearchButton": "NavBar_SearchButton__1jHhE",
	"SearchIcon": "NavBar_SearchIcon__3mm5G",
	"SideBarActive": "NavBar_SideBarActive__M_S9T",
	"translate-BlackBackground": "NavBar_translate-BlackBackground__KbTiL",
	"NavMenu": "NavBar_NavMenu__2dfwZ",
	"NavMenuActive": "NavBar_NavMenuActive__wz7fC",
	"tranlate-right": "NavBar_tranlate-right__2syl1",
	"XButton": "NavBar_XButton__3xOhS",
	"HorizontalLine": "NavBar_HorizontalLine__2jCNo",
	"SideBarButton": "NavBar_SideBarButton__3irRp",
	"FolowedChanelsContainer": "NavBar_FolowedChanelsContainer__2jTLb",
	"AccountImageButton": "NavBar_AccountImageButton__2yW2c",
	"AccountImage": "NavBar_AccountImage__3eP9-",
	"translate-right": "NavBar_translate-right__2WWIf",
	"translate-left": "NavBar_translate-left__1wu3S"
};


/***/ }),

/***/ "./Components/NavBar/style/NavBarChanelLinksTamplate.module.css":
/*!**********************************************************************!*\
  !*** ./Components/NavBar/style/NavBarChanelLinksTamplate.module.css ***!
  \**********************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "NavBarChanelLinksTamplate_container__2tcmC",
	"ChnelNameText": "NavBarChanelLinksTamplate_ChnelNameText__2w_7Q"
};


/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUYsS0FBZjs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vQ29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovL2NsaWVudC8uL0NvbXBvbmVudHMvTmF2QmFyL05hdkJhckNoYW5lbExpbmtzTW9kZWwuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vTGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01ldGEvTWV0YS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2NsaWVudC8uL0NvbXBvbmVudHMvTmF2QmFyL3N0eWxlL05hdkJhci5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC8uL0NvbXBvbmVudHMvTmF2QmFyL3N0eWxlL05hdkJhckNoYW5lbExpbmtzVGFtcGxhdGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUvTmF2QmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcblxyXG5pbXBvcnQgQ2hhbmVsTGlua1RhbXBsYXRlIGZyb20gXCIuL05hdkJhckNoYW5lbExpbmtzTW9kZWxcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xyXG4gICAgY29uc3QgW3NpZGViYXIsIHNldHNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbSW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbRm9sb3dlZENoYW5lbHNMaXN0LCBzZXRGb2xvd2VkQ2hhbmVsc0xpc3RdID0gdXNlU3RhdGUoW3sgQ2hhbmVsc0lkOiBcIlwiLCBDaGFuZWxOYW1lOiBcIlwiIH1dKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5MT0NBTF9CQUNLRU5EX1VSTH0vdXNlci1hY2NvdW50LW1hbmFnZXIvZ2V0LXVzZXItZm9sb3dlZC1jaGFuZWxzLyR7Q29va2llcy5nZXQoXCJVc2VyVG9rZW5cIil9YCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBGb2xvd2VkQ2hhbmVsc0xpc3RBcnIgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIEZvbG93ZWRDaGFuZWxzTGlzdEFyci5wdXNoKHJlcy5kYXRhW2ldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEZvbG93ZWRDaGFuZWxzTGlzdChGb2xvd2VkQ2hhbmVsc0xpc3RBcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGUuVXBOYXZCYXJCYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5Mb2dvQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7IHNldHNpZGViYXIodHJ1ZSkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUubG9nb30+TG9nbzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuU2VhcmNoQmFyQm9yZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuU2VhcmNoQmFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXN0XCIgY2xhc3NOYW1lPXtzdHlsZS5TZWFyY2hCYXJJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRJbnB1dChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuU2VhcmNoQnV0dG9ufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL05hdkJhckljb25zL1NlYXJjaEJhckljb24uc3ZnJyBhbHQ9J25leHQnIGNsYXNzTmFtZT17c3R5bGUuU2VhcmNoSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLkFjY291bnRJbWFnZUJ1dHRvbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL05hdkJhckljb25zL1JlZEFjY291bnREZWZhdWx0SW1hZ2Uuc3ZnJyBhbHQ9J0FjY291bnRJbWFnZUJ1dHRvbicgY2xhc3NOYW1lPXtzdHlsZS5BY2NvdW50SW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaWRlYmFyID8gc3R5bGUuU2lkZUJhckFjdGl2ZSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3NpZGViYXIgPyBzdHlsZS5OYXZNZW51QWN0aXZlIDogc3R5bGUuTmF2TWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLlhCdXR0b259IG9uQ2xpY2s9eygpID0+IHNldHNpZGViYXIoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiM5NTg3O1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjb2xvcj1cIiM0RDRENERcIiBjbGFzc05hbWU9e3N0eWxlLkhvcml6b250YWxMaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuU2lkZUJhckJ1dHRvbn0+SE9NRTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5TaWRlQmFyQnV0dG9ufT5NWSBDSEFORUw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuU2lkZUJhckJ1dHRvbn0+TVkgSElHSExJR0hUUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5TaWRlQmFyQnV0dG9ufT5TQVZFRCBISUdITElHSFRTPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjb2xvcj1cIiM0RDRENERcIiBjbGFzc05hbWU9e3N0eWxlLkhvcml6b250YWxMaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Gb2xvd2VkQ2hhbmVsc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtGb2xvd2VkQ2hhbmVsc0xpc3QubWFwKChDaGFuZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFuZWxMaW5rVGFtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmVsTmFtZT17Q2hhbmVsLkNoYW5lbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYW5lbElkPXtDaGFuZWwuQ2hhbmVsc0lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS9OYXZCYXJDaGFuZWxMaW5rc1RhbXBsYXRlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhbmVsTGlua1RhbXBsYXRlKHByb3BzKSB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jLyR7cHJvcHMuQ2hhbmVsSWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUuQ2huZWxOYW1lVGV4dH0+e3Byb3BzLkNoYW5lbE5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBOYXZCYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnRzL01ldGEvTWV0YSdcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IE1ldGEgPSAoeyB0aXRsZSwga2V5d29yZHMsIGRlc2NyaXB0aW9uIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cclxuICAgICAgey8qIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PXtrZXl3b3Jkc30gLz4gKi99XHJcbiAgICAgIHsvKiA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+ICovfVxyXG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICApXHJcbn1cclxuXHJcbk1ldGEuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRpdGxlOiAnSGlnaGxpZ2h0c0h1YicsXHJcbi8vICAga2V5d29yZHM6ICd3ZWIgZGV2ZWxvcG1lbnQsIHByb2dyYW1taW5nJyxcclxuLy8gICBkZXNjcmlwdGlvbjogJ0dldCB0aGUgbGF0ZXN0IG5ld3MgaW4gd2ViIGRldicsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGEiLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vTGF5b3V0L0xheW91dCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVXBOYXZCYXJCYWNrZ3JvdW5kXCI6IFwiTmF2QmFyX1VwTmF2QmFyQmFja2dyb3VuZF9fMlpnUURcIixcblx0XCJsb2dvXCI6IFwiTmF2QmFyX2xvZ29fX3RubndvXCIsXG5cdFwiTG9nb0J1dHRvblwiOiBcIk5hdkJhcl9Mb2dvQnV0dG9uX18xYVRGYVwiLFxuXHRcIlNlYXJjaEJhckJvcmRlclwiOiBcIk5hdkJhcl9TZWFyY2hCYXJCb3JkZXJfX2VvdU43XCIsXG5cdFwiU2VhcmNoQmFyXCI6IFwiTmF2QmFyX1NlYXJjaEJhcl9fM2h6V0NcIixcblx0XCJTZWFyY2hCYXJJbnB1dFwiOiBcIk5hdkJhcl9TZWFyY2hCYXJJbnB1dF9fMnd3ZUhcIixcblx0XCJTZWFyY2hCdXR0b25cIjogXCJOYXZCYXJfU2VhcmNoQnV0dG9uX18xakhoRVwiLFxuXHRcIlNlYXJjaEljb25cIjogXCJOYXZCYXJfU2VhcmNoSWNvbl9fM21tNUdcIixcblx0XCJTaWRlQmFyQWN0aXZlXCI6IFwiTmF2QmFyX1NpZGVCYXJBY3RpdmVfX01fUzlUXCIsXG5cdFwidHJhbnNsYXRlLUJsYWNrQmFja2dyb3VuZFwiOiBcIk5hdkJhcl90cmFuc2xhdGUtQmxhY2tCYWNrZ3JvdW5kX19LYlRpTFwiLFxuXHRcIk5hdk1lbnVcIjogXCJOYXZCYXJfTmF2TWVudV9fMmRmd1pcIixcblx0XCJOYXZNZW51QWN0aXZlXCI6IFwiTmF2QmFyX05hdk1lbnVBY3RpdmVfX3d6N2ZDXCIsXG5cdFwidHJhbmxhdGUtcmlnaHRcIjogXCJOYXZCYXJfdHJhbmxhdGUtcmlnaHRfXzJzeWwxXCIsXG5cdFwiWEJ1dHRvblwiOiBcIk5hdkJhcl9YQnV0dG9uX18zeE9oU1wiLFxuXHRcIkhvcml6b250YWxMaW5lXCI6IFwiTmF2QmFyX0hvcml6b250YWxMaW5lX18yakNOb1wiLFxuXHRcIlNpZGVCYXJCdXR0b25cIjogXCJOYXZCYXJfU2lkZUJhckJ1dHRvbl9fM2lyUnBcIixcblx0XCJGb2xvd2VkQ2hhbmVsc0NvbnRhaW5lclwiOiBcIk5hdkJhcl9Gb2xvd2VkQ2hhbmVsc0NvbnRhaW5lcl9fMmpUTGJcIixcblx0XCJBY2NvdW50SW1hZ2VCdXR0b25cIjogXCJOYXZCYXJfQWNjb3VudEltYWdlQnV0dG9uX18yeVcyY1wiLFxuXHRcIkFjY291bnRJbWFnZVwiOiBcIk5hdkJhcl9BY2NvdW50SW1hZ2VfXzNlUDktXCIsXG5cdFwidHJhbnNsYXRlLXJpZ2h0XCI6IFwiTmF2QmFyX3RyYW5zbGF0ZS1yaWdodF9fMldXSWZcIixcblx0XCJ0cmFuc2xhdGUtbGVmdFwiOiBcIk5hdkJhcl90cmFuc2xhdGUtbGVmdF9fMXd1M1NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk5hdkJhckNoYW5lbExpbmtzVGFtcGxhdGVfY29udGFpbmVyX18ydGNtQ1wiLFxuXHRcIkNobmVsTmFtZVRleHRcIjogXCJOYXZCYXJDaGFuZWxMaW5rc1RhbXBsYXRlX0NobmVsTmFtZVRleHRfXzJ3XzdRXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGUiLCJMaW5rIiwiYXhpb3MiLCJDb29raWVzIiwiQ2hhbmVsTGlua1RhbXBsYXRlIiwiTmF2QmFyIiwic2lkZWJhciIsInNldHNpZGViYXIiLCJJbnB1dCIsInNldElucHV0IiwiRm9sb3dlZENoYW5lbHNMaXN0Iiwic2V0Rm9sb3dlZENoYW5lbHNMaXN0IiwiQ2hhbmVsc0lkIiwiQ2hhbmVsTmFtZSIsImdldCIsInRoZW4iLCJyZXMiLCJGb2xvd2VkQ2hhbmVsc0xpc3RBcnIiLCJpIiwiZGF0YSIsImxlbmd0aCIsInB1c2giLCJVcE5hdkJhckJhY2tncm91bmQiLCJMb2dvQnV0dG9uIiwibG9nbyIsIlNlYXJjaEJhckJvcmRlciIsIlNlYXJjaEJhciIsIlNlYXJjaEJhcklucHV0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJTZWFyY2hCdXR0b24iLCJTZWFyY2hJY29uIiwiQWNjb3VudEltYWdlQnV0dG9uIiwiQWNjb3VudEltYWdlIiwiU2lkZUJhckFjdGl2ZSIsIk5hdk1lbnVBY3RpdmUiLCJOYXZNZW51IiwiWEJ1dHRvbiIsIkhvcml6b250YWxMaW5lIiwiU2lkZUJhckJ1dHRvbiIsIkZvbG93ZWRDaGFuZWxzQ29udGFpbmVyIiwibWFwIiwiQ2hhbmVsIiwiaW5kZXgiLCJwcm9wcyIsIkNoYW5lbElkIiwiY29udGFpbmVyIiwiQ2huZWxOYW1lVGV4dCIsIk1ldGEiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIkhlYWQiLCJ0aXRsZSIsImtleXdvcmRzIiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0UHJvcHMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=