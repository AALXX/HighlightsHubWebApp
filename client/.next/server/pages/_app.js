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
/* harmony import */ var _style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/NavBar.module.css */ "./Components/NavBar/style/NavBar.module.css");
/* harmony import */ var _style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavBarChanelLinksModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBarChanelLinksModel */ "./Components/NavBar/NavBarChanelLinksModel.js");

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
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
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
      className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().UpNavBarBackground),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().LogoButton),
        onClick: () => {
          setsidebar(true);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),
          children: "Logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SearchBarBorder),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SearchBar),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "test",
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SearchBarInput),
            placeholder: "Search",
            onChange: event => setInput(event.currentTarget.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SearchButton),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/assets/NavBarIcons/SearchBarIcon.svg",
            alt: "next",
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SearchIcon)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().AccountImageButton),
        onClick: () => router.push('/u'),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/assets/NavBarIcons/RedAccountDefaultImage.svg",
          alt: "AccountImageButton",
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().AccountImage)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: sidebar ? (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SideBarActive) : null,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: sidebar ? (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavMenuActive) : (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavMenu),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().XButton),
          onClick: () => setsidebar(false),
          children: "\u2573"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#4D4D4D",
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().HorizontalLine)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SideBarButton),
            children: "HOME"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SideBarButton),
            children: "MY CHANEL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SideBarButton),
            children: "MY HIGHLIGHTS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SideBarButton),
            children: "SAVED HIGHLIGHTS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#4D4D4D",
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().HorizontalLine)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().FolowedChanelsContainer),
          children: FolowedChanelsList.map((Chanel, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBarChanelLinksModel__WEBPACK_IMPORTED_MODULE_6__.default, {
              ChanelName: Chanel.ChanelName,
              ChanelId: Chanel.ChanelsId
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 33
            }, this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 29
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLDJCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELGlFQUFlRixLQUFmOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFSkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9Db21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vQ29tcG9uZW50cy9OYXZCYXIvTmF2QmFyQ2hhbmVsTGlua3NNb2RlbC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTWV0YS9NZXRhLmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vQ29tcG9uZW50cy9OYXZCYXIvc3R5bGUvTmF2QmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vQ29tcG9uZW50cy9OYXZCYXIvc3R5bGUvTmF2QmFyQ2hhbmVsTGlua3NUYW1wbGF0ZS5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS9OYXZCYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuaW1wb3J0IENoYW5lbExpbmtUYW1wbGF0ZSBmcm9tIFwiLi9OYXZCYXJDaGFuZWxMaW5rc01vZGVsXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcclxuICAgIGNvbnN0IFtzaWRlYmFyLCBzZXRzaWRlYmFyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW0ZvbG93ZWRDaGFuZWxzTGlzdCwgc2V0Rm9sb3dlZENoYW5lbHNMaXN0XSA9IHVzZVN0YXRlKFt7IENoYW5lbHNJZDogXCJcIiwgQ2hhbmVsTmFtZTogXCJcIiB9XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTE9DQUxfQkFDS0VORF9VUkx9L3VzZXItYWNjb3VudC1tYW5hZ2VyL2dldC11c2VyLWZvbG93ZWQtY2hhbmVscy8ke0Nvb2tpZXMuZ2V0KFwiVXNlclRva2VuXCIpfWApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgRm9sb3dlZENoYW5lbHNMaXN0QXJyID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBGb2xvd2VkQ2hhbmVsc0xpc3RBcnIucHVzaChyZXMuZGF0YVtpXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRGb2xvd2VkQ2hhbmVsc0xpc3QoRm9sb3dlZENoYW5lbHNMaXN0QXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlLlVwTmF2QmFyQmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuTG9nb0J1dHRvbn0gb25DbGljaz17KCkgPT4geyBzZXRzaWRlYmFyKHRydWUpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLmxvZ299PkxvZ288L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlNlYXJjaEJhckJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlNlYXJjaEJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVzdFwiIGNsYXNzTmFtZT17c3R5bGUuU2VhcmNoQmFySW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0SW5wdXQoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLlNlYXJjaEJ1dHRvbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9OYXZCYXJJY29ucy9TZWFyY2hCYXJJY29uLnN2ZycgYWx0PSduZXh0JyBjbGFzc05hbWU9e3N0eWxlLlNlYXJjaEljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5BY2NvdW50SW1hZ2VCdXR0b259IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdScpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvTmF2QmFySWNvbnMvUmVkQWNjb3VudERlZmF1bHRJbWFnZS5zdmcnIGFsdD0nQWNjb3VudEltYWdlQnV0dG9uJyBjbGFzc05hbWU9e3N0eWxlLkFjY291bnRJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NpZGViYXIgPyBzdHlsZS5TaWRlQmFyQWN0aXZlIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c2lkZWJhciA/IHN0eWxlLk5hdk1lbnVBY3RpdmUgOiBzdHlsZS5OYXZNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuWEJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2V0c2lkZWJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmIzk1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzRENEQ0RFwiIGNsYXNzTmFtZT17c3R5bGUuSG9yaXpvbnRhbExpbmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5TaWRlQmFyQnV0dG9ufT5IT01FPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLlNpZGVCYXJCdXR0b259Pk1ZIENIQU5FTDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5TaWRlQmFyQnV0dG9ufT5NWSBISUdITElHSFRTPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLlNpZGVCYXJCdXR0b259PlNBVkVEIEhJR0hMSUdIVFM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzRENEQ0RFwiIGNsYXNzTmFtZT17c3R5bGUuSG9yaXpvbnRhbExpbmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkZvbG93ZWRDaGFuZWxzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0ZvbG93ZWRDaGFuZWxzTGlzdC5tYXAoKENoYW5lbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5lbExpbmtUYW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFuZWxOYW1lPXtDaGFuZWwuQ2hhbmVsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmVsSWQ9e0NoYW5lbC5DaGFuZWxzSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlL05hdkJhckNoYW5lbExpbmtzVGFtcGxhdGUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFuZWxMaW5rVGFtcGxhdGUocHJvcHMpIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2MvJHtwcm9wcy5DaGFuZWxJZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZS5DaG5lbE5hbWVUZXh0fT57cHJvcHMuQ2hhbmVsTmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IE5hdkJhciBmcm9tICcuLi9Db21wb25lbnRzL05hdkJhci9OYXZCYXInXHJcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YS9NZXRhJ1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgTWV0YSA9ICh7IHRpdGxlLCBrZXl3b3JkcywgZGVzY3JpcHRpb24gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxyXG4gICAgICB7LyogPG1ldGEgbmFtZT0na2V5d29yZHMnIGNvbnRlbnQ9e2tleXdvcmRzfSAvPiAqL31cclxuICAgICAgey8qIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz4gKi99XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gIClcclxufVxyXG5cclxuTWV0YS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGl0bGU6ICdIaWdobGlnaHRzSHViJyxcclxuLy8gICBrZXl3b3JkczogJ3dlYiBkZXZlbG9wbWVudCwgcHJvZ3JhbW1pbmcnLFxyXG4vLyAgIGRlc2NyaXB0aW9uOiAnR2V0IHRoZSBsYXRlc3QgbmV3cyBpbiB3ZWIgZGV2JyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWV0YSIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9MYXlvdXQvTGF5b3V0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJVcE5hdkJhckJhY2tncm91bmRcIjogXCJOYXZCYXJfVXBOYXZCYXJCYWNrZ3JvdW5kX18yWmdRRFwiLFxuXHRcImxvZ29cIjogXCJOYXZCYXJfbG9nb19fdG5ud29cIixcblx0XCJMb2dvQnV0dG9uXCI6IFwiTmF2QmFyX0xvZ29CdXR0b25fXzFhVEZhXCIsXG5cdFwiU2VhcmNoQmFyQm9yZGVyXCI6IFwiTmF2QmFyX1NlYXJjaEJhckJvcmRlcl9fZW91TjdcIixcblx0XCJTZWFyY2hCYXJcIjogXCJOYXZCYXJfU2VhcmNoQmFyX18zaHpXQ1wiLFxuXHRcIlNlYXJjaEJhcklucHV0XCI6IFwiTmF2QmFyX1NlYXJjaEJhcklucHV0X18yd3dlSFwiLFxuXHRcIlNlYXJjaEJ1dHRvblwiOiBcIk5hdkJhcl9TZWFyY2hCdXR0b25fXzFqSGhFXCIsXG5cdFwiU2VhcmNoSWNvblwiOiBcIk5hdkJhcl9TZWFyY2hJY29uX18zbW01R1wiLFxuXHRcIlNpZGVCYXJBY3RpdmVcIjogXCJOYXZCYXJfU2lkZUJhckFjdGl2ZV9fTV9TOVRcIixcblx0XCJ0cmFuc2xhdGUtQmxhY2tCYWNrZ3JvdW5kXCI6IFwiTmF2QmFyX3RyYW5zbGF0ZS1CbGFja0JhY2tncm91bmRfX0tiVGlMXCIsXG5cdFwiTmF2TWVudVwiOiBcIk5hdkJhcl9OYXZNZW51X18yZGZ3WlwiLFxuXHRcIk5hdk1lbnVBY3RpdmVcIjogXCJOYXZCYXJfTmF2TWVudUFjdGl2ZV9fd3o3ZkNcIixcblx0XCJ0cmFubGF0ZS1yaWdodFwiOiBcIk5hdkJhcl90cmFubGF0ZS1yaWdodF9fMnN5bDFcIixcblx0XCJYQnV0dG9uXCI6IFwiTmF2QmFyX1hCdXR0b25fXzN4T2hTXCIsXG5cdFwiSG9yaXpvbnRhbExpbmVcIjogXCJOYXZCYXJfSG9yaXpvbnRhbExpbmVfXzJqQ05vXCIsXG5cdFwiU2lkZUJhckJ1dHRvblwiOiBcIk5hdkJhcl9TaWRlQmFyQnV0dG9uX18zaXJScFwiLFxuXHRcIkZvbG93ZWRDaGFuZWxzQ29udGFpbmVyXCI6IFwiTmF2QmFyX0ZvbG93ZWRDaGFuZWxzQ29udGFpbmVyX18yalRMYlwiLFxuXHRcIkFjY291bnRJbWFnZUJ1dHRvblwiOiBcIk5hdkJhcl9BY2NvdW50SW1hZ2VCdXR0b25fXzJ5VzJjXCIsXG5cdFwiQWNjb3VudEltYWdlXCI6IFwiTmF2QmFyX0FjY291bnRJbWFnZV9fM2VQOS1cIixcblx0XCJ0cmFuc2xhdGUtcmlnaHRcIjogXCJOYXZCYXJfdHJhbnNsYXRlLXJpZ2h0X18yV1dJZlwiLFxuXHRcInRyYW5zbGF0ZS1sZWZ0XCI6IFwiTmF2QmFyX3RyYW5zbGF0ZS1sZWZ0X18xd3UzU1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTmF2QmFyQ2hhbmVsTGlua3NUYW1wbGF0ZV9jb250YWluZXJfXzJ0Y21DXCIsXG5cdFwiQ2huZWxOYW1lVGV4dFwiOiBcIk5hdkJhckNoYW5lbExpbmtzVGFtcGxhdGVfQ2huZWxOYW1lVGV4dF9fMndfN1FcIlxufTtcbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZSIsIkxpbmsiLCJheGlvcyIsIkNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJDaGFuZWxMaW5rVGFtcGxhdGUiLCJOYXZCYXIiLCJzaWRlYmFyIiwic2V0c2lkZWJhciIsIklucHV0Iiwic2V0SW5wdXQiLCJyb3V0ZXIiLCJGb2xvd2VkQ2hhbmVsc0xpc3QiLCJzZXRGb2xvd2VkQ2hhbmVsc0xpc3QiLCJDaGFuZWxzSWQiLCJDaGFuZWxOYW1lIiwiZ2V0IiwidGhlbiIsInJlcyIsIkZvbG93ZWRDaGFuZWxzTGlzdEFyciIsImkiLCJkYXRhIiwibGVuZ3RoIiwicHVzaCIsIlVwTmF2QmFyQmFja2dyb3VuZCIsIkxvZ29CdXR0b24iLCJsb2dvIiwiU2VhcmNoQmFyQm9yZGVyIiwiU2VhcmNoQmFyIiwiU2VhcmNoQmFySW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIlNlYXJjaEJ1dHRvbiIsIlNlYXJjaEljb24iLCJBY2NvdW50SW1hZ2VCdXR0b24iLCJBY2NvdW50SW1hZ2UiLCJTaWRlQmFyQWN0aXZlIiwiTmF2TWVudUFjdGl2ZSIsIk5hdk1lbnUiLCJYQnV0dG9uIiwiSG9yaXpvbnRhbExpbmUiLCJTaWRlQmFyQnV0dG9uIiwiRm9sb3dlZENoYW5lbHNDb250YWluZXIiLCJtYXAiLCJDaGFuZWwiLCJpbmRleCIsInByb3BzIiwiQ2hhbmVsSWQiLCJjb250YWluZXIiLCJDaG5lbE5hbWVUZXh0IiwiTWV0YSIsIkxheW91dCIsImNoaWxkcmVuIiwiSGVhZCIsInRpdGxlIiwia2V5d29yZHMiLCJkZXNjcmlwdGlvbiIsImRlZmF1bHRQcm9wcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==