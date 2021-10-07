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

var _jsxFileName = "/mnt/d/Projects/GameHighlightsWebApp/client/Components/NavBar/NavBar.js";







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
    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get("PublicUserToken") === undefined) {
      return setFolowedChanelsList("");
    }

    axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${"http://localhost:7000/api"}/user-account-manager/get-user-folowed-chanels/${js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get("PublicUserToken")}`).then(res => {
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
          lineNumber: 37,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
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
            lineNumber: 42,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SearchButton),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/assets/NavBarIcons/SearchBarIcon.svg",
            alt: "next",
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SearchIcon)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
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
          lineNumber: 52,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#4D4D4D",
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().HorizontalLine)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SideBarButton),
            children: "HOME"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/u",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SideBarButton),
            children: "MY CHANEL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SideBarButton),
            children: "SAVED HIGHLIGHTS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/u/upload",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SideBarButton),
            children: "UPLOAD HIGHLIGHT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#4D4D4D",
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().HorizontalLine)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_style_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().FolowedChanelsContainer)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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


var _jsxFileName = "/mnt/d/Projects/GameHighlightsWebApp/client/Components/NavBar/NavBarChanelLinksModel.js";



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


var _jsxFileName = "/mnt/d/Projects/GameHighlightsWebApp/client/Layout/Layout.js";



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

var _jsxFileName = "/mnt/d/Projects/GameHighlightsWebApp/client/components/Meta/Meta.js";


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

var _jsxFileName = "/mnt/d/Projects/GameHighlightsWebApp/client/pages/_app.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vQ29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovL2NsaWVudC8uL0NvbXBvbmVudHMvTmF2QmFyL05hdkJhckNoYW5lbExpbmtzTW9kZWwuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vTGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01ldGEvTWV0YS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2NsaWVudC8uL0NvbXBvbmVudHMvTmF2QmFyL3N0eWxlL05hdkJhci5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC8uL0NvbXBvbmVudHMvTmF2QmFyL3N0eWxlL05hdkJhckNoYW5lbExpbmtzVGFtcGxhdGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS9OYXZCYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuaW1wb3J0IENoYW5lbExpbmtUYW1wbGF0ZSBmcm9tIFwiLi9OYXZCYXJDaGFuZWxMaW5rc01vZGVsXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcclxuICAgIGNvbnN0IFtzaWRlYmFyLCBzZXRzaWRlYmFyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW0ZvbG93ZWRDaGFuZWxzTGlzdCwgc2V0Rm9sb3dlZENoYW5lbHNMaXN0XSA9IHVzZVN0YXRlKFt7IENoYW5lbHNJZDogXCJcIiwgQ2hhbmVsTmFtZTogXCJcIiB9XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYoQ29va2llcy5nZXQoXCJQdWJsaWNVc2VyVG9rZW5cIikgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRGb2xvd2VkQ2hhbmVsc0xpc3QoXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTE9DQUxfQkFDS0VORF9VUkx9L3VzZXItYWNjb3VudC1tYW5hZ2VyL2dldC11c2VyLWZvbG93ZWQtY2hhbmVscy8ke0Nvb2tpZXMuZ2V0KFwiUHVibGljVXNlclRva2VuXCIpfWApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgRm9sb3dlZENoYW5lbHNMaXN0QXJyID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBGb2xvd2VkQ2hhbmVsc0xpc3RBcnIucHVzaChyZXMuZGF0YVtpXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRGb2xvd2VkQ2hhbmVsc0xpc3QoRm9sb3dlZENoYW5lbHNMaXN0QXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlLlVwTmF2QmFyQmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuTG9nb0J1dHRvbn0gb25DbGljaz17KCkgPT4geyBzZXRzaWRlYmFyKHRydWUpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLmxvZ299PkxvZ288L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlNlYXJjaEJhckJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlNlYXJjaEJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVzdFwiIGNsYXNzTmFtZT17c3R5bGUuU2VhcmNoQmFySW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0SW5wdXQoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLlNlYXJjaEJ1dHRvbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9OYXZCYXJJY29ucy9TZWFyY2hCYXJJY29uLnN2ZycgYWx0PSduZXh0JyBjbGFzc05hbWU9e3N0eWxlLlNlYXJjaEljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5BY2NvdW50SW1hZ2VCdXR0b259IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdScpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvTmF2QmFySWNvbnMvUmVkQWNjb3VudERlZmF1bHRJbWFnZS5zdmcnIGFsdD0nQWNjb3VudEltYWdlQnV0dG9uJyBjbGFzc05hbWU9e3N0eWxlLkFjY291bnRJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NpZGViYXIgPyBzdHlsZS5TaWRlQmFyQWN0aXZlIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c2lkZWJhciA/IHN0eWxlLk5hdk1lbnVBY3RpdmUgOiBzdHlsZS5OYXZNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuWEJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2V0c2lkZWJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmIzk1ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzRENEQ0RFwiIGNsYXNzTmFtZT17c3R5bGUuSG9yaXpvbnRhbExpbmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5TaWRlQmFyQnV0dG9ufT5IT01FPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5TaWRlQmFyQnV0dG9ufT5NWSBDSEFORUw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuU2lkZUJhckJ1dHRvbn0+U0FWRUQgSElHSExJR0hUUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91L3VwbG9hZFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLlNpZGVCYXJCdXR0b259PlVQTE9BRCBISUdITElHSFQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzRENEQ0RFwiIGNsYXNzTmFtZT17c3R5bGUuSG9yaXpvbnRhbExpbmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkZvbG93ZWRDaGFuZWxzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtGb2xvd2VkQ2hhbmVsc0xpc3QubWFwKChDaGFuZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFuZWxMaW5rVGFtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmVsTmFtZT17Q2hhbmVsLkNoYW5lbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYW5lbElkPXtDaGFuZWwuQ2hhbmVsc0lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUvTmF2QmFyQ2hhbmVsTGlua3NUYW1wbGF0ZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYW5lbExpbmtUYW1wbGF0ZShwcm9wcykge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYy8ke3Byb3BzLkNoYW5lbElkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLkNobmVsTmFtZVRleHR9Pntwcm9wcy5DaGFuZWxOYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4uL0NvbXBvbmVudHMvTmF2QmFyL05hdkJhcidcclxuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9NZXRhL01ldGEnXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBNZXRhID0gKHsgdGl0bGUsIGtleXdvcmRzLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XHJcbiAgICAgIHsvKiA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD17a2V5d29yZHN9IC8+ICovfVxyXG4gICAgICB7LyogPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPiAqL31cclxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKVxyXG59XHJcblxyXG5NZXRhLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aXRsZTogJ0hpZ2hsaWdodHNIdWInLFxyXG4vLyAgIGtleXdvcmRzOiAnd2ViIGRldmVsb3BtZW50LCBwcm9ncmFtbWluZycsXHJcbi8vICAgZGVzY3JpcHRpb246ICdHZXQgdGhlIGxhdGVzdCBuZXdzIGluIHdlYiBkZXYnLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXRhIiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0xheW91dC9MYXlvdXQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlVwTmF2QmFyQmFja2dyb3VuZFwiOiBcIk5hdkJhcl9VcE5hdkJhckJhY2tncm91bmRfXzJaZ1FEXCIsXG5cdFwibG9nb1wiOiBcIk5hdkJhcl9sb2dvX190bm53b1wiLFxuXHRcIkxvZ29CdXR0b25cIjogXCJOYXZCYXJfTG9nb0J1dHRvbl9fMWFURmFcIixcblx0XCJTZWFyY2hCYXJCb3JkZXJcIjogXCJOYXZCYXJfU2VhcmNoQmFyQm9yZGVyX19lb3VON1wiLFxuXHRcIlNlYXJjaEJhclwiOiBcIk5hdkJhcl9TZWFyY2hCYXJfXzNoeldDXCIsXG5cdFwiU2VhcmNoQmFySW5wdXRcIjogXCJOYXZCYXJfU2VhcmNoQmFySW5wdXRfXzJ3d2VIXCIsXG5cdFwiU2VhcmNoQnV0dG9uXCI6IFwiTmF2QmFyX1NlYXJjaEJ1dHRvbl9fMWpIaEVcIixcblx0XCJTZWFyY2hJY29uXCI6IFwiTmF2QmFyX1NlYXJjaEljb25fXzNtbTVHXCIsXG5cdFwiU2lkZUJhckFjdGl2ZVwiOiBcIk5hdkJhcl9TaWRlQmFyQWN0aXZlX19NX1M5VFwiLFxuXHRcInRyYW5zbGF0ZS1CbGFja0JhY2tncm91bmRcIjogXCJOYXZCYXJfdHJhbnNsYXRlLUJsYWNrQmFja2dyb3VuZF9fS2JUaUxcIixcblx0XCJOYXZNZW51XCI6IFwiTmF2QmFyX05hdk1lbnVfXzJkZndaXCIsXG5cdFwiTmF2TWVudUFjdGl2ZVwiOiBcIk5hdkJhcl9OYXZNZW51QWN0aXZlX193ejdmQ1wiLFxuXHRcInRyYW5sYXRlLXJpZ2h0XCI6IFwiTmF2QmFyX3RyYW5sYXRlLXJpZ2h0X18yc3lsMVwiLFxuXHRcIlhCdXR0b25cIjogXCJOYXZCYXJfWEJ1dHRvbl9fM3hPaFNcIixcblx0XCJIb3Jpem9udGFsTGluZVwiOiBcIk5hdkJhcl9Ib3Jpem9udGFsTGluZV9fMmpDTm9cIixcblx0XCJTaWRlQmFyQnV0dG9uXCI6IFwiTmF2QmFyX1NpZGVCYXJCdXR0b25fXzNpclJwXCIsXG5cdFwiRm9sb3dlZENoYW5lbHNDb250YWluZXJcIjogXCJOYXZCYXJfRm9sb3dlZENoYW5lbHNDb250YWluZXJfXzJqVExiXCIsXG5cdFwiQWNjb3VudEltYWdlQnV0dG9uXCI6IFwiTmF2QmFyX0FjY291bnRJbWFnZUJ1dHRvbl9fMnlXMmNcIixcblx0XCJBY2NvdW50SW1hZ2VcIjogXCJOYXZCYXJfQWNjb3VudEltYWdlX18zZVA5LVwiLFxuXHRcInRyYW5zbGF0ZS1yaWdodFwiOiBcIk5hdkJhcl90cmFuc2xhdGUtcmlnaHRfXzJXV0lmXCIsXG5cdFwidHJhbnNsYXRlLWxlZnRcIjogXCJOYXZCYXJfdHJhbnNsYXRlLWxlZnRfXzF3dTNTXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJOYXZCYXJDaGFuZWxMaW5rc1RhbXBsYXRlX2NvbnRhaW5lcl9fMnRjbUNcIixcblx0XCJDaG5lbE5hbWVUZXh0XCI6IFwiTmF2QmFyQ2hhbmVsTGlua3NUYW1wbGF0ZV9DaG5lbE5hbWVUZXh0X18yd183UVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlIiwiTGluayIsImF4aW9zIiwiQ29va2llcyIsInVzZVJvdXRlciIsIkNoYW5lbExpbmtUYW1wbGF0ZSIsIk5hdkJhciIsInNpZGViYXIiLCJzZXRzaWRlYmFyIiwiSW5wdXQiLCJzZXRJbnB1dCIsInJvdXRlciIsIkZvbG93ZWRDaGFuZWxzTGlzdCIsInNldEZvbG93ZWRDaGFuZWxzTGlzdCIsIkNoYW5lbHNJZCIsIkNoYW5lbE5hbWUiLCJnZXQiLCJ1bmRlZmluZWQiLCJ0aGVuIiwicmVzIiwiRm9sb3dlZENoYW5lbHNMaXN0QXJyIiwiaSIsImRhdGEiLCJsZW5ndGgiLCJwdXNoIiwiVXBOYXZCYXJCYWNrZ3JvdW5kIiwiTG9nb0J1dHRvbiIsImxvZ28iLCJTZWFyY2hCYXJCb3JkZXIiLCJTZWFyY2hCYXIiLCJTZWFyY2hCYXJJbnB1dCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiU2VhcmNoQnV0dG9uIiwiU2VhcmNoSWNvbiIsIkFjY291bnRJbWFnZUJ1dHRvbiIsIkFjY291bnRJbWFnZSIsIlNpZGVCYXJBY3RpdmUiLCJOYXZNZW51QWN0aXZlIiwiTmF2TWVudSIsIlhCdXR0b24iLCJIb3Jpem9udGFsTGluZSIsIlNpZGVCYXJCdXR0b24iLCJGb2xvd2VkQ2hhbmVsc0NvbnRhaW5lciIsInByb3BzIiwiQ2hhbmVsSWQiLCJjb250YWluZXIiLCJDaG5lbE5hbWVUZXh0IiwiTWV0YSIsIkxheW91dCIsImNoaWxkcmVuIiwiSGVhZCIsInRpdGxlIiwia2V5d29yZHMiLCJkZXNjcmlwdGlvbiIsImRlZmF1bHRQcm9wcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==