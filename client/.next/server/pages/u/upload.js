(() => {
var exports = {};
exports.id = "pages/u/upload";
exports.ids = ["pages/u/upload"];
exports.modules = {

/***/ "./pages/u/upload.js":
/*!***************************!*\
  !*** ./pages/u/upload.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UploadPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Account/OwnerAccount.module.css */ "./styles/Account/OwnerAccount.module.css");
/* harmony import */ var _styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/mnt/d/Projects/GameHighlightsWebApp/client/pages/u/upload.js";






function UploadPage(props) {
  const {
    0: videoFile,
    1: setvideoFile
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: Ready,
    1: setReady
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const UploadFile = () => {
    let formData = new FormData();
    formData.append("file", videoFile[0]);
    formData.append("VideoTitle", "ZED");
    formData.append("UserPublicToken", js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("PublicUserToken"));
    const config = {
      header: {
        'content-type': 'multipart/formdata'
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_3___default().post(`http://localhost:7000/api/videos-manager/upload-video`, formData, config).then(res => {
      console.log(res);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: props.AccountExist ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_6___default().PageContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "file",
        name: "myFile",
        onChange: e => {
          setvideoFile(e.target.files);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => {
          UploadFile();
        },
        children: "Upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Account Not Found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/u/signup",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_6___default().ToLoginLink),
          children: "Create an account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }, this)
  }, void 0, false);
}
async function getServerSideProps(context) {
  if (context.req.headers.cookie === undefined) {
    return {
      props: {
        AccountExist: false,
        UserToken: null
      }
    };
  }

  const parsedCookies = cookie__WEBPACK_IMPORTED_MODULE_4__.parse(context.req.headers.cookie);
  const AccountData = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${"http://localhost:7000/api"}/user-account-manager/get-owner-user-account-data/${parsedCookies.UserToken}`);

  if (AccountData.data.AccountExist === false) {
    return {
      props: {
        AccountExist: AccountData.data.AccountExist,
        UserToken: null
      }
    };
  }

  return {
    props: {
      AccountExist: AccountData.data.AccountExist,
      UserToken: parsedCookies.UserToken
    }
  };
}

/***/ }),

/***/ "./styles/Account/OwnerAccount.module.css":
/*!************************************************!*\
  !*** ./styles/Account/OwnerAccount.module.css ***!
  \************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"PageContainer": "OwnerAccount_PageContainer__6lhl6",
	"ChanelUpperBar": "OwnerAccount_ChanelUpperBar__CUPlT",
	"AccountProfileImage": "OwnerAccount_AccountProfileImage__3HpEf",
	"ChanelStats": "OwnerAccount_ChanelStats__Uf-UH",
	"AccountNameText": "OwnerAccount_AccountNameText__2-2eg",
	"ChanelStatsBar": "OwnerAccount_ChanelStatsBar__Votcu",
	"AccountFolowersText": "OwnerAccount_AccountFolowersText__3DXDr",
	"Content": "OwnerAccount_Content__1T_KX",
	"Videos": "OwnerAccount_Videos__279Kh",
	"ChanelInfos": "OwnerAccount_ChanelInfos__2ty-C",
	"AboutChanelPart": "OwnerAccount_AboutChanelPart__mGR1E",
	"AboutChanelText": "OwnerAccount_AboutChanelText__2sWt2",
	"AboutChanelLine": "OwnerAccount_AboutChanelLine__3L1HQ",
	"AboutChanelPargraphText": "OwnerAccount_AboutChanelPargraphText__1H-Ca",
	"ChanelWallPart": "OwnerAccount_ChanelWallPart__3-qtR",
	"MostHighlithedGamesPart": "OwnerAccount_MostHighlithedGamesPart__PPJbm",
	"MostHighlithedGamesText": "OwnerAccount_MostHighlithedGamesText__1w6BJ",
	"EmptySign": "OwnerAccount_EmptySign__20YYI",
	"EmptyText": "OwnerAccount_EmptyText__NgT83"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/u/upload.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZDO0FBQ3pDLFdBQU87QUFDSGpCLE1BQUFBLEtBQUssRUFBRTtBQUNIaUIsUUFBQUEsWUFBWSxFQUFFYyxXQUFXLENBQUNDLElBQVosQ0FBaUJmLFlBRDVCO0FBRUhXLFFBQUFBLFNBQVMsRUFBRTtBQUZSO0FBREosS0FBUDtBQU1IOztBQUVELFNBQU87QUFDSDVCLElBQUFBLEtBQUssRUFBRTtBQUNIaUIsTUFBQUEsWUFBWSxFQUFFYyxXQUFXLENBQUNDLElBQVosQ0FBaUJmLFlBRDVCO0FBRUhXLE1BQUFBLFNBQVMsRUFBRUMsYUFBYSxDQUFDRDtBQUZ0QjtBQURKLEdBQVA7QUFNSDs7Ozs7Ozs7OztBQ2hGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvdS91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3R5bGVzL0FjY291bnQvT3duZXJBY2NvdW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL0FjY291bnQvT3duZXJBY2NvdW50Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCAqIGFzIGNvb2tpZSBmcm9tICdjb29raWUnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkUGFnZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFt2aWRlb0ZpbGUsIHNldHZpZGVvRmlsZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbUmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3QgVXBsb2FkRmlsZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIHZpZGVvRmlsZVswXSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiVmlkZW9UaXRsZVwiLCBcIlpFRFwiKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJVc2VyUHVibGljVG9rZW5cIiwgQ29va2llcy5nZXQoXCJQdWJsaWNVc2VyVG9rZW5cIikpO1xyXG5cclxuICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogeydjb250ZW50LXR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm1kYXRhJ31cclxuICAgICAgICB9XHJcbiAgICAgICAgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo3MDAwL2FwaS92aWRlb3MtbWFuYWdlci91cGxvYWQtdmlkZW9gLCBmb3JtRGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cHJvcHMuQWNjb3VudEV4aXN0ID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlBhZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJteUZpbGVcIiBvbkNoYW5nZT17KGUpID0+IHsgc2V0dmlkZW9GaWxlKGUudGFyZ2V0LmZpbGVzKSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyBVcGxvYWRGaWxlKCkgfX0+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkFjY291bnQgTm90IEZvdW5kPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Uvc2lnbnVwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlLlRvTG9naW5MaW5rfT5DcmVhdGUgYW4gYWNjb3VudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cclxuICAgIGlmIChjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIEFjY291bnRFeGlzdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBVc2VyVG9rZW46IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXJzZWRDb29raWVzID0gY29va2llLnBhcnNlKGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llKTtcclxuXHJcblxyXG4gICAgY29uc3QgQWNjb3VudERhdGEgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTE9DQUxfQkFDS0VORF9VUkx9L3VzZXItYWNjb3VudC1tYW5hZ2VyL2dldC1vd25lci11c2VyLWFjY291bnQtZGF0YS8ke3BhcnNlZENvb2tpZXMuVXNlclRva2VufWApO1xyXG5cclxuXHJcbiAgICBpZiAoQWNjb3VudERhdGEuZGF0YS5BY2NvdW50RXhpc3QgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIEFjY291bnRFeGlzdDogQWNjb3VudERhdGEuZGF0YS5BY2NvdW50RXhpc3QsXHJcbiAgICAgICAgICAgICAgICBVc2VyVG9rZW46IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIEFjY291bnRFeGlzdDogQWNjb3VudERhdGEuZGF0YS5BY2NvdW50RXhpc3QsXHJcbiAgICAgICAgICAgIFVzZXJUb2tlbjogcGFyc2VkQ29va2llcy5Vc2VyVG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiUGFnZUNvbnRhaW5lclwiOiBcIk93bmVyQWNjb3VudF9QYWdlQ29udGFpbmVyX182bGhsNlwiLFxuXHRcIkNoYW5lbFVwcGVyQmFyXCI6IFwiT3duZXJBY2NvdW50X0NoYW5lbFVwcGVyQmFyX19DVVBsVFwiLFxuXHRcIkFjY291bnRQcm9maWxlSW1hZ2VcIjogXCJPd25lckFjY291bnRfQWNjb3VudFByb2ZpbGVJbWFnZV9fM0hwRWZcIixcblx0XCJDaGFuZWxTdGF0c1wiOiBcIk93bmVyQWNjb3VudF9DaGFuZWxTdGF0c19fVWYtVUhcIixcblx0XCJBY2NvdW50TmFtZVRleHRcIjogXCJPd25lckFjY291bnRfQWNjb3VudE5hbWVUZXh0X18yLTJlZ1wiLFxuXHRcIkNoYW5lbFN0YXRzQmFyXCI6IFwiT3duZXJBY2NvdW50X0NoYW5lbFN0YXRzQmFyX19Wb3RjdVwiLFxuXHRcIkFjY291bnRGb2xvd2Vyc1RleHRcIjogXCJPd25lckFjY291bnRfQWNjb3VudEZvbG93ZXJzVGV4dF9fM0RYRHJcIixcblx0XCJDb250ZW50XCI6IFwiT3duZXJBY2NvdW50X0NvbnRlbnRfXzFUX0tYXCIsXG5cdFwiVmlkZW9zXCI6IFwiT3duZXJBY2NvdW50X1ZpZGVvc19fMjc5S2hcIixcblx0XCJDaGFuZWxJbmZvc1wiOiBcIk93bmVyQWNjb3VudF9DaGFuZWxJbmZvc19fMnR5LUNcIixcblx0XCJBYm91dENoYW5lbFBhcnRcIjogXCJPd25lckFjY291bnRfQWJvdXRDaGFuZWxQYXJ0X19tR1IxRVwiLFxuXHRcIkFib3V0Q2hhbmVsVGV4dFwiOiBcIk93bmVyQWNjb3VudF9BYm91dENoYW5lbFRleHRfXzJzV3QyXCIsXG5cdFwiQWJvdXRDaGFuZWxMaW5lXCI6IFwiT3duZXJBY2NvdW50X0Fib3V0Q2hhbmVsTGluZV9fM0wxSFFcIixcblx0XCJBYm91dENoYW5lbFBhcmdyYXBoVGV4dFwiOiBcIk93bmVyQWNjb3VudF9BYm91dENoYW5lbFBhcmdyYXBoVGV4dF9fMUgtQ2FcIixcblx0XCJDaGFuZWxXYWxsUGFydFwiOiBcIk93bmVyQWNjb3VudF9DaGFuZWxXYWxsUGFydF9fMy1xdFJcIixcblx0XCJNb3N0SGlnaGxpdGhlZEdhbWVzUGFydFwiOiBcIk93bmVyQWNjb3VudF9Nb3N0SGlnaGxpdGhlZEdhbWVzUGFydF9fUFBKYm1cIixcblx0XCJNb3N0SGlnaGxpdGhlZEdhbWVzVGV4dFwiOiBcIk93bmVyQWNjb3VudF9Nb3N0SGlnaGxpdGhlZEdhbWVzVGV4dF9fMXc2QkpcIixcblx0XCJFbXB0eVNpZ25cIjogXCJPd25lckFjY291bnRfRW1wdHlTaWduX18yMFlZSVwiLFxuXHRcIkVtcHR5VGV4dFwiOiBcIk93bmVyQWNjb3VudF9FbXB0eVRleHRfX05nVDgzXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInN0eWxlIiwiQ29va2llcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJjb29raWUiLCJMaW5rIiwiVXBsb2FkUGFnZSIsInByb3BzIiwidmlkZW9GaWxlIiwic2V0dmlkZW9GaWxlIiwiUmVhZHkiLCJzZXRSZWFkeSIsIlVwbG9hZEZpbGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZ2V0IiwiY29uZmlnIiwiaGVhZGVyIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiQWNjb3VudEV4aXN0IiwiUGFnZUNvbnRhaW5lciIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsIlRvTG9naW5MaW5rIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcSIsImhlYWRlcnMiLCJ1bmRlZmluZWQiLCJVc2VyVG9rZW4iLCJwYXJzZWRDb29raWVzIiwicGFyc2UiLCJBY2NvdW50RGF0YSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9