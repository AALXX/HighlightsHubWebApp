(() => {
var exports = {};
exports.id = "pages/u";
exports.ids = ["pages/u"];
exports.modules = {

/***/ "./Components/NumberAbbreviator/NumberAbbreviator.js":
/*!***********************************************************!*\
  !*** ./Components/NumberAbbreviator/NumberAbbreviator.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ abbreviateNumber)
/* harmony export */ });
function abbreviateNumber(value) {
  var newValue = value;

  if (value >= 1000) {
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = '';

    for (var precision = 3; precision >= 1; precision--) {
      shortValue = parseFloat(suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value);
      var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');

      if (dotLessShortValue.length <= 2) {
        break;
      }
    }

    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }

  return newValue;
}

/***/ }),

/***/ "./Components/userAccount/CustomizeUserAccountPopup.js":
/*!*************************************************************!*\
  !*** ./Components/userAccount/CustomizeUserAccountPopup.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomizeAccountPopUp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CustomizeAccoutStyle.module.css */ "./Components/userAccount/styles/CustomizeAccoutStyle.module.css");
/* harmony import */ var _styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/mnt/d/Projects/GameHighlightsWebApp/client/Components/userAccount/CustomizeUserAccountPopup.js";






function CustomizeAccountPopUp(props) {
  const {
    0: AccountName,
    1: setAccountName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAccountName(props.AccountName);
  }, []);

  const ChangeUserName = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${"http://192.168.72.81:7000/api"}/user-account-manager/change-user-account-name/`, {
      AccountToken: props.AccountToken,
      newAccountName: AccountName
    }).then(res => {
      if (res.data.error) {
        window.alert("error");
      }

      next_router__WEBPACK_IMPORTED_MODULE_2___default().reload(window.location.pathname);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup_inner),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().XButton),
        onClick: props.closePopup,
        children: "\u2573"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().AccountNameDiv),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().AccountnaNameText),
          children: "UserName:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          name: "AccountName",
          placeholder: "Name...",
          onChange: e => {
            setAccountName(e.target.value);
          },
          value: AccountName,
          maxLength: "10",
          className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().AccountnaNameInput)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().ChangeNameButton),
        onClick: () => {
          ChangeUserName();
        },
        children: "Change!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {
        color: "#676767",
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().BasicPanelHorizontalLine)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().MakeProfilePublicChecked),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().ShowProfileText),
          children: "Make Profile Public: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().ShowProfileCheckBox),
          type: "checkbox",
          name: "ShowProfileCheckBox"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {
        color: "#676767",
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().BasicPanelHorizontalLine)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          children: "Change Account Picture:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "file"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./Components/userAccount/VideoTamplate.js":
/*!*************************************************!*\
  !*** ./Components/userAccount/VideoTamplate.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoTamplate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Videotamplate_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Videotamplate.module.css */ "./Components/userAccount/styles/Videotamplate.module.css");
/* harmony import */ var _styles_Videotamplate_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Videotamplate_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_OnHoverHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/OnHoverHook */ "./hooks/OnHoverHook.js");
/* harmony import */ var _NumberAbbreviator_NumberAbbreviator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NumberAbbreviator/NumberAbbreviator */ "./Components/NumberAbbreviator/NumberAbbreviator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/mnt/d/Projects/GameHighlightsWebApp/client/Components/userAccount/VideoTamplate.js";





function VideoTamplate(props) {
  const [hoverRef, isHovered] = (0,_hooks_OnHoverHook__WEBPACK_IMPORTED_MODULE_1__.default)(); //*Custom On hoverEvent hook

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    ref: hoverRef,
    className: (_styles_Videotamplate_module_css__WEBPACK_IMPORTED_MODULE_4___default().VideoTamplateContainer),
    children: isHovered ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_Videotamplate_module_css__WEBPACK_IMPORTED_MODULE_4___default().Infobar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: (_styles_Videotamplate_module_css__WEBPACK_IMPORTED_MODULE_4___default().VideoTitle),
        children: props.VideoTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
        src: "assets/Chanelicons/ActiveFireIcon.svg",
        alt: "FireIcon",
        className: (_styles_Videotamplate_module_css__WEBPACK_IMPORTED_MODULE_4___default().Fireicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: (_styles_Videotamplate_module_css__WEBPACK_IMPORTED_MODULE_4___default().FiresNumber),
        children: (0,_NumberAbbreviator_NumberAbbreviator__WEBPACK_IMPORTED_MODULE_2__.default)(props.VideoFires)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./hooks/OnHoverHook.js":
/*!******************************!*\
  !*** ./hooks/OnHoverHook.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useHover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useHover() {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const handleMouseOver = () => setValue(true);

  const handleMouseOut = () => setValue(false);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}

/***/ }),

/***/ "./pages/u/index.js":
/*!**************************!*\
  !*** ./pages/u/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OwnerAccountPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Account/OwnerAccount.module.css */ "./styles/Account/OwnerAccount.module.css");
/* harmony import */ var _styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_userAccount_CustomizeUserAccountPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/userAccount/CustomizeUserAccountPopup */ "./Components/userAccount/CustomizeUserAccountPopup.js");
/* harmony import */ var _Components_userAccount_VideoTamplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/userAccount/VideoTamplate */ "./Components/userAccount/VideoTamplate.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/mnt/d/Projects/GameHighlightsWebApp/client/pages/u/index.js";










function OwnerAccountPage(props) {
  const {
    0: AccountPublicToken,
    1: setAccountPublicToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: AccountEMail,
    1: setAccountEMail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: ToggledCustomizePopUp,
    1: setToggledCustomizePopUp
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAccountPublicToken(js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get("PublicUserToken"));
    console.log(props.VideoList);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: props.AccountExist ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().PageContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ChanelUpperBar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
          src: `${"http://192.168.72.81:7000/api"}/user-account-manager/get-user-account-image/${AccountPublicToken}`,
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AccountProfileImage)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ChanelStats),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AccountNameText),
            children: props.AccountName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("hr", {
            color: "#676767",
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ChanelStatsBar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AccountFolowersText),
            children: ["Folowers: ", props.AccountFolowers]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().Content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().Videos),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().VideosGrid),
            children: props.VideoList.map((Chanel, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Components_userAccount_VideoTamplate__WEBPACK_IMPORTED_MODULE_6__.default, {
                VideoTitle: Chanel.VideoTitle,
                VideoFires: Chanel.Fires
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 21
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 19
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ChanelInfos),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AboutChanelPart),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AboutChanelText),
              children: "About Chanel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("hr", {
              color: "#676767",
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AboutChanelLine)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h4", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AboutChanelPargraphText),
              children: props.ChanelDescription
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ChanelWallPart),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AboutChanelText),
              children: "Chanel Wall"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("hr", {
              color: "#676767",
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AboutChanelLine)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().EmptySign),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
                className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().EmptyText),
                children: "EMPTY"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 50
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().MostHighlithedGamesPart),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().MostHighlithedGamesText),
              children: "Highlithed Games"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("hr", {
              color: "#676767",
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AboutChanelLine)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().MostHighlithedGamesText),
              children: "NULL"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AccountNotFoundcontainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
        className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().AccountNotFoundtext),
        children: "Account Not Found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/u/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_8___default().ToLoginLink),
          children: "Already Have an account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
async function getServerSideProps(context) {
  if (context.req.headers.cookie === undefined) {
    return {
      props: {
        AccountExist: false,
        AccountName: "",
        AccountEmail: null,
        AccountFolowers: 0,
        ChanelDescription: "",
        UserToken: null
      }
    };
  }

  const parsedCookies = cookie__WEBPACK_IMPORTED_MODULE_3__.parse(context.req.headers.cookie);
  const AccountData = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${"http://192.168.72.81:7000/api"}/user-account-manager/get-owner-user-account-data/${parsedCookies.UserToken}`);
  const AccountVideos = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${"http://192.168.72.81:7000/api"}/user-account-manager/get-owner-user-account-videos/${parsedCookies.PublicUserToken}`);

  if (AccountData.data.AccountExist === false) {
    return {
      props: {
        AccountExist: AccountData.data.AccountExist,
        AccountName: "",
        AccountEmail: null,
        AccountFolowers: 0,
        ChanelDescription: "",
        UserToken: null,
        VideoList: null
      }
    };
  }

  return {
    props: {
      AccountExist: AccountData.data.AccountExist,
      AccountName: AccountData.data.AccountName,
      AccountEmail: AccountData.data.AccountEmail,
      AccountFolowers: AccountData.data.AccountFolowers,
      ChanelDescription: AccountData.data.ChanelDescription,
      UserToken: parsedCookies.UserToken,
      VideoList: AccountVideos.data.Videos
    }
  };
}

/***/ }),

/***/ "./Components/userAccount/styles/CustomizeAccoutStyle.module.css":
/*!***********************************************************************!*\
  !*** ./Components/userAccount/styles/CustomizeAccoutStyle.module.css ***!
  \***********************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"popup": "CustomizeAccoutStyle_popup__3XUv3",
	"popup_inner": "CustomizeAccoutStyle_popup_inner__3Pn_O",
	"PupUpbackground": "CustomizeAccoutStyle_PupUpbackground__2zcJw",
	"XButton": "CustomizeAccoutStyle_XButton__3Ynp3",
	"BasicPanelHorizontalLine": "CustomizeAccoutStyle_BasicPanelHorizontalLine__8BoGu",
	"AccountNameDiv": "CustomizeAccoutStyle_AccountNameDiv__KOvwm",
	"AccountnaNameInput": "CustomizeAccoutStyle_AccountnaNameInput__2xFi-",
	"AccountnaNameText": "CustomizeAccoutStyle_AccountnaNameText__1pm2P",
	"ChangeNameButton": "CustomizeAccoutStyle_ChangeNameButton__2Irfe",
	"MakeProfilePublicChecked": "CustomizeAccoutStyle_MakeProfilePublicChecked__7VPAv",
	"ShowProfileText": "CustomizeAccoutStyle_ShowProfileText__3JGfg",
	"ShowProfileCheckBox": "CustomizeAccoutStyle_ShowProfileCheckBox__2uUrv"
};


/***/ }),

/***/ "./Components/userAccount/styles/Videotamplate.module.css":
/*!****************************************************************!*\
  !*** ./Components/userAccount/styles/Videotamplate.module.css ***!
  \****************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"VideoTamplateContainer": "Videotamplate_VideoTamplateContainer__1voOF",
	"Infobar": "Videotamplate_Infobar__1mTxn",
	"VideoTitle": "Videotamplate_VideoTitle__2kUN5",
	"Fireicon": "Videotamplate_Fireicon__1hfVL",
	"FiresNumber": "Videotamplate_FiresNumber__1jdzz"
};


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
	"VideosGrid": "OwnerAccount_VideosGrid__1xt0i",
	"ChanelInfos": "OwnerAccount_ChanelInfos__2ty-C",
	"AboutChanelPart": "OwnerAccount_AboutChanelPart__mGR1E",
	"AboutChanelText": "OwnerAccount_AboutChanelText__2sWt2",
	"AboutChanelLine": "OwnerAccount_AboutChanelLine__3L1HQ",
	"AboutChanelPargraphText": "OwnerAccount_AboutChanelPargraphText__1H-Ca",
	"ChanelWallPart": "OwnerAccount_ChanelWallPart__3-qtR",
	"MostHighlithedGamesPart": "OwnerAccount_MostHighlithedGamesPart__PPJbm",
	"MostHighlithedGamesText": "OwnerAccount_MostHighlithedGamesText__1w6BJ",
	"EmptySign": "OwnerAccount_EmptySign__20YYI",
	"EmptyText": "OwnerAccount_EmptyText__NgT83",
	"AccountNotFoundcontainer": "OwnerAccount_AccountNotFoundcontainer__30sQQ",
	"AccountNotFoundtext": "OwnerAccount_AccountNotFoundtext__1ndJY",
	"ToLoginLink": "OwnerAccount_ToLoginLink__1AJlt"
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
var __webpack_exports__ = (__webpack_exec__("./pages/u/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtMYSxNQUFBQSxpQkFBaUIsRUFBRWtCLFdBQVcsQ0FBQzlGLElBQVosQ0FBaUI0RSxpQkFML0I7QUFNTGUsTUFBQUEsU0FBUyxFQUFFQyxhQUFhLENBQUNELFNBTnBCO0FBT0xyQyxNQUFBQSxTQUFTLEVBQUV5QyxhQUFhLENBQUMvRixJQUFkLENBQW1CaUU7QUFQekI7QUFERixHQUFQO0FBV0Q7Ozs7Ozs7Ozs7QUNwSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vQ29tcG9uZW50cy9OdW1iZXJBYmJyZXZpYXRvci9OdW1iZXJBYmJyZXZpYXRvci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9Db21wb25lbnRzL3VzZXJBY2NvdW50L0N1c3RvbWl6ZVVzZXJBY2NvdW50UG9wdXAuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vQ29tcG9uZW50cy91c2VyQWNjb3VudC9WaWRlb1RhbXBsYXRlLmpzIiwid2VicGFjazovL2NsaWVudC8uL2hvb2tzL09uSG92ZXJIb29rLmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL3UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vQ29tcG9uZW50cy91c2VyQWNjb3VudC9zdHlsZXMvQ3VzdG9taXplQWNjb3V0U3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9Db21wb25lbnRzL3VzZXJBY2NvdW50L3N0eWxlcy9WaWRlb3RhbXBsYXRlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3R5bGVzL0FjY291bnQvT3duZXJBY2NvdW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJicmV2aWF0ZU51bWJlcih2YWx1ZSkge1xyXG4gICAgdmFyIG5ld1ZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgPj0gMTAwMCkge1xyXG4gICAgICAgIHZhciBzdWZmaXhlcyA9IFtcIlwiLCBcImtcIiwgXCJtXCIsIFwiYlwiLFwidFwiXTtcclxuICAgICAgICB2YXIgc3VmZml4TnVtID0gTWF0aC5mbG9vciggKFwiXCIrdmFsdWUpLmxlbmd0aC8zICk7XHJcbiAgICAgICAgdmFyIHNob3J0VmFsdWUgPSAnJztcclxuICAgICAgICBmb3IgKHZhciBwcmVjaXNpb24gPSAzOyBwcmVjaXNpb24gPj0gMTsgcHJlY2lzaW9uLS0pIHtcclxuICAgICAgICAgICAgc2hvcnRWYWx1ZSA9IHBhcnNlRmxvYXQoIChzdWZmaXhOdW0gIT0gMCA/ICh2YWx1ZSAvIE1hdGgucG93KDEwMDAsc3VmZml4TnVtKSApIDogdmFsdWUpKTtcclxuICAgICAgICAgICAgdmFyIGRvdExlc3NTaG9ydFZhbHVlID0gKHNob3J0VmFsdWUgKyAnJykucmVwbGFjZSgvW15hLXpBLVogMC05XSsvZywnJyk7XHJcbiAgICAgICAgICAgIGlmIChkb3RMZXNzU2hvcnRWYWx1ZS5sZW5ndGggPD0gMikgeyBicmVhazsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvcnRWYWx1ZSAlIDEgIT0gMCkgIHNob3J0VmFsdWUgPSBzaG9ydFZhbHVlLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgbmV3VmFsdWUgPSBzaG9ydFZhbHVlK3N1ZmZpeGVzW3N1ZmZpeE51bV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3VmFsdWU7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvQ3VzdG9taXplQWNjb3V0U3R5bGUubW9kdWxlLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21pemVBY2NvdW50UG9wVXAocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbQWNjb3VudE5hbWUsIHNldEFjY291bnROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0QWNjb3VudE5hbWUocHJvcHMuQWNjb3VudE5hbWUpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBDaGFuZ2VVc2VyTmFtZSA9ICgpID0+IHtcclxuICAgICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkxPQ0FMX0JBQ0tFTkRfVVJMfS91c2VyLWFjY291bnQtbWFuYWdlci9jaGFuZ2UtdXNlci1hY2NvdW50LW5hbWUvYCwgeyBBY2NvdW50VG9rZW46IHByb3BzLkFjY291bnRUb2tlbiwgbmV3QWNjb3VudE5hbWU6IEFjY291bnROYW1lIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUm91dGVyLnJlbG9hZCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cF9pbm5lcn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLlhCdXR0b259IG9uQ2xpY2s9e3Byb3BzLmNsb3NlUG9wdXB9PiYjOTU4Nzs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQWNjb3VudE5hbWVEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5BY2NvdW50bmFOYW1lVGV4dH0+VXNlck5hbWU6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQWNjb3VudE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjY291bnROYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17QWNjb3VudE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQWNjb3VudG5hTmFtZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkNoYW5nZU5hbWVCdXR0b259IG9uQ2xpY2s9eygpID0+IHsgQ2hhbmdlVXNlck5hbWUoKTsgfX0+Q2hhbmdlITwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxociBjb2xvcj1cIiM2NzY3NjdcIiBjbGFzc05hbWU9e3N0eWxlcy5CYXNpY1BhbmVsSG9yaXpvbnRhbExpbmV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWtlUHJvZmlsZVB1YmxpY0NoZWNrZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5TaG93UHJvZmlsZVRleHR9Pk1ha2UgUHJvZmlsZSBQdWJsaWM6IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLlNob3dQcm9maWxlQ2hlY2tCb3h9IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJTaG93UHJvZmlsZUNoZWNrQm94XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzY3Njc2N1wiIGNsYXNzTmFtZT17c3R5bGVzLkJhc2ljUGFuZWxIb3Jpem9udGFsTGluZX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkNoYW5nZSBBY2NvdW50IFBpY3R1cmU6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL1ZpZGVvdGFtcGxhdGUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB1c2VIb3ZlciBmcm9tIFwiLi4vLi4vaG9va3MvT25Ib3Zlckhvb2tcIlxyXG5cclxuaW1wb3J0IGFiYnJldmlhdGVOdW1iZXIgZnJvbSBcIi4uL051bWJlckFiYnJldmlhdG9yL051bWJlckFiYnJldmlhdG9yXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvVGFtcGxhdGUocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbaG92ZXJSZWYsIGlzSG92ZXJlZF0gPSB1c2VIb3ZlcigpOy8vKkN1c3RvbSBPbiBob3ZlckV2ZW50IGhvb2tcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtob3ZlclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuVmlkZW9UYW1wbGF0ZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtpc0hvdmVyZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkluZm9iYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5WaWRlb1RpdGxlfT57cHJvcHMuVmlkZW9UaXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL0NoYW5lbGljb25zL0FjdGl2ZUZpcmVJY29uLnN2Z1wiIGFsdD1cIkZpcmVJY29uXCIgY2xhc3NOYW1lPXtzdHlsZXMuRmlyZWljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLkZpcmVzTnVtYmVyfT57YWJicmV2aWF0ZU51bWJlcihwcm9wcy5WaWRlb0ZpcmVzKX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAobnVsbCl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSG92ZXIoKSB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlT3ZlciA9ICgpID0+IHNldFZhbHVlKHRydWUpO1xyXG4gICAgY29uc3QgaGFuZGxlTW91c2VPdXQgPSAoKSA9PiBzZXRWYWx1ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlID0gcmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBoYW5kbGVNb3VzZU92ZXIpO1xyXG4gICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgaGFuZGxlTW91c2VPdXQpO1xyXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGhhbmRsZU1vdXNlT3Zlcik7XHJcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGhhbmRsZU1vdXNlT3V0KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbcmVmLmN1cnJlbnRdIC8vIFJlY2FsbCBvbmx5IGlmIHJlZiBjaGFuZ2VzXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIFtyZWYsIHZhbHVlXTtcclxuICB9IiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvQWNjb3VudC9Pd25lckFjY291bnQubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0ICogYXMgY29va2llIGZyb20gJ2Nvb2tpZSdcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiXHJcblxyXG5pbXBvcnQgQ3VzdG9taXplQWNjb3VudFBvcFVwIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL3VzZXJBY2NvdW50L0N1c3RvbWl6ZVVzZXJBY2NvdW50UG9wdXBcIlxyXG5pbXBvcnQgVmlkZW9UYW1wbGF0ZSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy91c2VyQWNjb3VudC9WaWRlb1RhbXBsYXRlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE93bmVyQWNjb3VudFBhZ2UocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW0FjY291bnRQdWJsaWNUb2tlbiwgc2V0QWNjb3VudFB1YmxpY1Rva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbQWNjb3VudEVNYWlsLCBzZXRBY2NvdW50RU1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW1RvZ2dsZWRDdXN0b21pemVQb3BVcCwgc2V0VG9nZ2xlZEN1c3RvbWl6ZVBvcFVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRBY2NvdW50UHVibGljVG9rZW4oQ29va2llcy5nZXQoXCJQdWJsaWNVc2VyVG9rZW5cIikpO1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMuVmlkZW9MaXN0KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Byb3BzLkFjY291bnRFeGlzdCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuUGFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ2hhbmVsVXBwZXJCYXJ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7cHJvY2Vzcy5lbnYuTE9DQUxfQkFDS0VORF9VUkx9L3VzZXItYWNjb3VudC1tYW5hZ2VyL2dldC11c2VyLWFjY291bnQtaW1hZ2UvJHtBY2NvdW50UHVibGljVG9rZW59YH0gY2xhc3NOYW1lPXtzdHlsZS5BY2NvdW50UHJvZmlsZUltYWdlfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ2hhbmVsU3RhdHN9PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLkFjY291bnROYW1lVGV4dH0+e3Byb3BzLkFjY291bnROYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzY3Njc2N1wiIGNsYXNzTmFtZT17c3R5bGUuQ2hhbmVsU3RhdHNCYXJ9IC8+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuQWNjb3VudEZvbG93ZXJzVGV4dH0+Rm9sb3dlcnM6IHtwcm9wcy5BY2NvdW50Rm9sb3dlcnN9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5WaWRlb3N9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5WaWRlb3NHcmlkfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5WaWRlb0xpc3QubWFwKChDaGFuZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZGVvVGFtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIFZpZGVvVGl0bGU9e0NoYW5lbC5WaWRlb1RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgVmlkZW9GaXJlcz17Q2hhbmVsLkZpcmVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ2hhbmVsSW5mb3N9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5BYm91dENoYW5lbFBhcnR9PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuQWJvdXRDaGFuZWxUZXh0fT5BYm91dCBDaGFuZWw8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzY3Njc2N1wiIGNsYXNzTmFtZT17c3R5bGUuQWJvdXRDaGFuZWxMaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGUuQWJvdXRDaGFuZWxQYXJncmFwaFRleHR9Pntwcm9wcy5DaGFuZWxEZXNjcmlwdGlvbn08L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ2hhbmVsV2FsbFBhcnR9PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuQWJvdXRDaGFuZWxUZXh0fT5DaGFuZWwgV2FsbDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aHIgY29sb3I9XCIjNjc2NzY3XCIgY2xhc3NOYW1lPXtzdHlsZS5BYm91dENoYW5lbExpbmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5FbXB0eVNpZ259PjxoMSBjbGFzc05hbWU9e3N0eWxlLkVtcHR5VGV4dH0+RU1QVFk8L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLk1vc3RIaWdobGl0aGVkR2FtZXNQYXJ0fT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLk1vc3RIaWdobGl0aGVkR2FtZXNUZXh0fT5IaWdobGl0aGVkIEdhbWVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxociBjb2xvcj1cIiM2NzY3NjdcIiBjbGFzc05hbWU9e3N0eWxlLkFib3V0Q2hhbmVsTGluZX0gLz5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLk1vc3RIaWdobGl0aGVkR2FtZXNUZXh0fT5OVUxMPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkFjY291bnROb3RGb3VuZGNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZS5BY2NvdW50Tm90Rm91bmR0ZXh0fT5BY2NvdW50IE5vdCBGb3VuZDwvaDE+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3UvbG9naW5cIiA+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGUuVG9Mb2dpbkxpbmt9PkFscmVhZHkgSGF2ZSBhbiBhY2NvdW50PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblxyXG4gIGlmIChjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIEFjY291bnRFeGlzdDogZmFsc2UsXHJcbiAgICAgICAgQWNjb3VudE5hbWU6IFwiXCIsXHJcbiAgICAgICAgQWNjb3VudEVtYWlsOiBudWxsLFxyXG4gICAgICAgIEFjY291bnRGb2xvd2VyczogMCxcclxuICAgICAgICBDaGFuZWxEZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBVc2VyVG9rZW46IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyc2VkQ29va2llcyA9IGNvb2tpZS5wYXJzZShjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSk7XHJcblxyXG5cclxuICBjb25zdCBBY2NvdW50RGF0YSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5MT0NBTF9CQUNLRU5EX1VSTH0vdXNlci1hY2NvdW50LW1hbmFnZXIvZ2V0LW93bmVyLXVzZXItYWNjb3VudC1kYXRhLyR7cGFyc2VkQ29va2llcy5Vc2VyVG9rZW59YCk7XHJcbiAgY29uc3QgQWNjb3VudFZpZGVvcyA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5MT0NBTF9CQUNLRU5EX1VSTH0vdXNlci1hY2NvdW50LW1hbmFnZXIvZ2V0LW93bmVyLXVzZXItYWNjb3VudC12aWRlb3MvJHtwYXJzZWRDb29raWVzLlB1YmxpY1VzZXJUb2tlbn1gKTtcclxuXHJcbiAgaWYgKEFjY291bnREYXRhLmRhdGEuQWNjb3VudEV4aXN0ID09PSBmYWxzZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBBY2NvdW50RXhpc3Q6IEFjY291bnREYXRhLmRhdGEuQWNjb3VudEV4aXN0LFxyXG4gICAgICAgIEFjY291bnROYW1lOiBcIlwiLFxyXG4gICAgICAgIEFjY291bnRFbWFpbDogbnVsbCxcclxuICAgICAgICBBY2NvdW50Rm9sb3dlcnM6IDAsXHJcbiAgICAgICAgQ2hhbmVsRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgVXNlclRva2VuOiBudWxsLFxyXG4gICAgICAgIFZpZGVvTGlzdDogbnVsbCxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIEFjY291bnRFeGlzdDogQWNjb3VudERhdGEuZGF0YS5BY2NvdW50RXhpc3QsXHJcbiAgICAgIEFjY291bnROYW1lOiBBY2NvdW50RGF0YS5kYXRhLkFjY291bnROYW1lLFxyXG4gICAgICBBY2NvdW50RW1haWw6IEFjY291bnREYXRhLmRhdGEuQWNjb3VudEVtYWlsLFxyXG4gICAgICBBY2NvdW50Rm9sb3dlcnM6IEFjY291bnREYXRhLmRhdGEuQWNjb3VudEZvbG93ZXJzLFxyXG4gICAgICBDaGFuZWxEZXNjcmlwdGlvbjogQWNjb3VudERhdGEuZGF0YS5DaGFuZWxEZXNjcmlwdGlvbixcclxuICAgICAgVXNlclRva2VuOiBwYXJzZWRDb29raWVzLlVzZXJUb2tlbixcclxuICAgICAgVmlkZW9MaXN0OiBBY2NvdW50VmlkZW9zLmRhdGEuVmlkZW9zLFxyXG4gICAgfSxcclxuICB9XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3B1cFwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX3BvcHVwX18zWFV2M1wiLFxuXHRcInBvcHVwX2lubmVyXCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfcG9wdXBfaW5uZXJfXzNQbl9PXCIsXG5cdFwiUHVwVXBiYWNrZ3JvdW5kXCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfUHVwVXBiYWNrZ3JvdW5kX18yemNKd1wiLFxuXHRcIlhCdXR0b25cIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9YQnV0dG9uX18zWW5wM1wiLFxuXHRcIkJhc2ljUGFuZWxIb3Jpem9udGFsTGluZVwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX0Jhc2ljUGFuZWxIb3Jpem9udGFsTGluZV9fOEJvR3VcIixcblx0XCJBY2NvdW50TmFtZURpdlwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX0FjY291bnROYW1lRGl2X19LT3Z3bVwiLFxuXHRcIkFjY291bnRuYU5hbWVJbnB1dFwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX0FjY291bnRuYU5hbWVJbnB1dF9fMnhGaS1cIixcblx0XCJBY2NvdW50bmFOYW1lVGV4dFwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX0FjY291bnRuYU5hbWVUZXh0X18xcG0yUFwiLFxuXHRcIkNoYW5nZU5hbWVCdXR0b25cIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9DaGFuZ2VOYW1lQnV0dG9uX18ySXJmZVwiLFxuXHRcIk1ha2VQcm9maWxlUHVibGljQ2hlY2tlZFwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX01ha2VQcm9maWxlUHVibGljQ2hlY2tlZF9fN1ZQQXZcIixcblx0XCJTaG93UHJvZmlsZVRleHRcIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9TaG93UHJvZmlsZVRleHRfXzNKR2ZnXCIsXG5cdFwiU2hvd1Byb2ZpbGVDaGVja0JveFwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX1Nob3dQcm9maWxlQ2hlY2tCb3hfXzJ1VXJ2XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJWaWRlb1RhbXBsYXRlQ29udGFpbmVyXCI6IFwiVmlkZW90YW1wbGF0ZV9WaWRlb1RhbXBsYXRlQ29udGFpbmVyX18xdm9PRlwiLFxuXHRcIkluZm9iYXJcIjogXCJWaWRlb3RhbXBsYXRlX0luZm9iYXJfXzFtVHhuXCIsXG5cdFwiVmlkZW9UaXRsZVwiOiBcIlZpZGVvdGFtcGxhdGVfVmlkZW9UaXRsZV9fMmtVTjVcIixcblx0XCJGaXJlaWNvblwiOiBcIlZpZGVvdGFtcGxhdGVfRmlyZWljb25fXzFoZlZMXCIsXG5cdFwiRmlyZXNOdW1iZXJcIjogXCJWaWRlb3RhbXBsYXRlX0ZpcmVzTnVtYmVyX18xamR6elwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiUGFnZUNvbnRhaW5lclwiOiBcIk93bmVyQWNjb3VudF9QYWdlQ29udGFpbmVyX182bGhsNlwiLFxuXHRcIkNoYW5lbFVwcGVyQmFyXCI6IFwiT3duZXJBY2NvdW50X0NoYW5lbFVwcGVyQmFyX19DVVBsVFwiLFxuXHRcIkFjY291bnRQcm9maWxlSW1hZ2VcIjogXCJPd25lckFjY291bnRfQWNjb3VudFByb2ZpbGVJbWFnZV9fM0hwRWZcIixcblx0XCJDaGFuZWxTdGF0c1wiOiBcIk93bmVyQWNjb3VudF9DaGFuZWxTdGF0c19fVWYtVUhcIixcblx0XCJBY2NvdW50TmFtZVRleHRcIjogXCJPd25lckFjY291bnRfQWNjb3VudE5hbWVUZXh0X18yLTJlZ1wiLFxuXHRcIkNoYW5lbFN0YXRzQmFyXCI6IFwiT3duZXJBY2NvdW50X0NoYW5lbFN0YXRzQmFyX19Wb3RjdVwiLFxuXHRcIkFjY291bnRGb2xvd2Vyc1RleHRcIjogXCJPd25lckFjY291bnRfQWNjb3VudEZvbG93ZXJzVGV4dF9fM0RYRHJcIixcblx0XCJDb250ZW50XCI6IFwiT3duZXJBY2NvdW50X0NvbnRlbnRfXzFUX0tYXCIsXG5cdFwiVmlkZW9zXCI6IFwiT3duZXJBY2NvdW50X1ZpZGVvc19fMjc5S2hcIixcblx0XCJWaWRlb3NHcmlkXCI6IFwiT3duZXJBY2NvdW50X1ZpZGVvc0dyaWRfXzF4dDBpXCIsXG5cdFwiQ2hhbmVsSW5mb3NcIjogXCJPd25lckFjY291bnRfQ2hhbmVsSW5mb3NfXzJ0eS1DXCIsXG5cdFwiQWJvdXRDaGFuZWxQYXJ0XCI6IFwiT3duZXJBY2NvdW50X0Fib3V0Q2hhbmVsUGFydF9fbUdSMUVcIixcblx0XCJBYm91dENoYW5lbFRleHRcIjogXCJPd25lckFjY291bnRfQWJvdXRDaGFuZWxUZXh0X18yc1d0MlwiLFxuXHRcIkFib3V0Q2hhbmVsTGluZVwiOiBcIk93bmVyQWNjb3VudF9BYm91dENoYW5lbExpbmVfXzNMMUhRXCIsXG5cdFwiQWJvdXRDaGFuZWxQYXJncmFwaFRleHRcIjogXCJPd25lckFjY291bnRfQWJvdXRDaGFuZWxQYXJncmFwaFRleHRfXzFILUNhXCIsXG5cdFwiQ2hhbmVsV2FsbFBhcnRcIjogXCJPd25lckFjY291bnRfQ2hhbmVsV2FsbFBhcnRfXzMtcXRSXCIsXG5cdFwiTW9zdEhpZ2hsaXRoZWRHYW1lc1BhcnRcIjogXCJPd25lckFjY291bnRfTW9zdEhpZ2hsaXRoZWRHYW1lc1BhcnRfX1BQSmJtXCIsXG5cdFwiTW9zdEhpZ2hsaXRoZWRHYW1lc1RleHRcIjogXCJPd25lckFjY291bnRfTW9zdEhpZ2hsaXRoZWRHYW1lc1RleHRfXzF3NkJKXCIsXG5cdFwiRW1wdHlTaWduXCI6IFwiT3duZXJBY2NvdW50X0VtcHR5U2lnbl9fMjBZWUlcIixcblx0XCJFbXB0eVRleHRcIjogXCJPd25lckFjY291bnRfRW1wdHlUZXh0X19OZ1Q4M1wiLFxuXHRcIkFjY291bnROb3RGb3VuZGNvbnRhaW5lclwiOiBcIk93bmVyQWNjb3VudF9BY2NvdW50Tm90Rm91bmRjb250YWluZXJfXzMwc1FRXCIsXG5cdFwiQWNjb3VudE5vdEZvdW5kdGV4dFwiOiBcIk93bmVyQWNjb3VudF9BY2NvdW50Tm90Rm91bmR0ZXh0X18xbmRKWVwiLFxuXHRcIlRvTG9naW5MaW5rXCI6IFwiT3duZXJBY2NvdW50X1RvTG9naW5MaW5rX18xQUpsdFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJhYmJyZXZpYXRlTnVtYmVyIiwidmFsdWUiLCJuZXdWYWx1ZSIsInN1ZmZpeGVzIiwic3VmZml4TnVtIiwiTWF0aCIsImZsb29yIiwibGVuZ3RoIiwic2hvcnRWYWx1ZSIsInByZWNpc2lvbiIsInBhcnNlRmxvYXQiLCJwb3ciLCJkb3RMZXNzU2hvcnRWYWx1ZSIsInJlcGxhY2UiLCJ0b0ZpeGVkIiwiUmVhY3QiLCJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm91dGVyIiwic3R5bGVzIiwiQ3VzdG9taXplQWNjb3VudFBvcFVwIiwicHJvcHMiLCJBY2NvdW50TmFtZSIsInNldEFjY291bnROYW1lIiwiQ2hhbmdlVXNlck5hbWUiLCJwb3N0IiwiQWNjb3VudFRva2VuIiwibmV3QWNjb3VudE5hbWUiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVycm9yIiwid2luZG93IiwiYWxlcnQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicG9wdXAiLCJwb3B1cF9pbm5lciIsIlhCdXR0b24iLCJjbG9zZVBvcHVwIiwiQWNjb3VudE5hbWVEaXYiLCJBY2NvdW50bmFOYW1lVGV4dCIsImUiLCJ0YXJnZXQiLCJBY2NvdW50bmFOYW1lSW5wdXQiLCJDaGFuZ2VOYW1lQnV0dG9uIiwiQmFzaWNQYW5lbEhvcml6b250YWxMaW5lIiwiTWFrZVByb2ZpbGVQdWJsaWNDaGVja2VkIiwiU2hvd1Byb2ZpbGVUZXh0IiwiU2hvd1Byb2ZpbGVDaGVja0JveCIsInVzZUhvdmVyIiwiVmlkZW9UYW1wbGF0ZSIsImhvdmVyUmVmIiwiaXNIb3ZlcmVkIiwiVmlkZW9UYW1wbGF0ZUNvbnRhaW5lciIsIkluZm9iYXIiLCJWaWRlb1RpdGxlIiwiRmlyZWljb24iLCJGaXJlc051bWJlciIsIlZpZGVvRmlyZXMiLCJ1c2VSZWYiLCJzZXRWYWx1ZSIsInJlZiIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlT3V0Iiwibm9kZSIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiQ29va2llcyIsImNvb2tpZSIsIkxpbmsiLCJPd25lckFjY291bnRQYWdlIiwiQWNjb3VudFB1YmxpY1Rva2VuIiwic2V0QWNjb3VudFB1YmxpY1Rva2VuIiwiQWNjb3VudEVNYWlsIiwic2V0QWNjb3VudEVNYWlsIiwiVG9nZ2xlZEN1c3RvbWl6ZVBvcFVwIiwic2V0VG9nZ2xlZEN1c3RvbWl6ZVBvcFVwIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIlZpZGVvTGlzdCIsIkFjY291bnRFeGlzdCIsIlBhZ2VDb250YWluZXIiLCJDaGFuZWxVcHBlckJhciIsIkFjY291bnRQcm9maWxlSW1hZ2UiLCJDaGFuZWxTdGF0cyIsIkFjY291bnROYW1lVGV4dCIsIkNoYW5lbFN0YXRzQmFyIiwiQWNjb3VudEZvbG93ZXJzVGV4dCIsIkFjY291bnRGb2xvd2VycyIsIkNvbnRlbnQiLCJWaWRlb3MiLCJWaWRlb3NHcmlkIiwibWFwIiwiQ2hhbmVsIiwiaW5kZXgiLCJGaXJlcyIsIkNoYW5lbEluZm9zIiwiQWJvdXRDaGFuZWxQYXJ0IiwiQWJvdXRDaGFuZWxUZXh0IiwiQWJvdXRDaGFuZWxMaW5lIiwiQWJvdXRDaGFuZWxQYXJncmFwaFRleHQiLCJDaGFuZWxEZXNjcmlwdGlvbiIsIkNoYW5lbFdhbGxQYXJ0IiwiRW1wdHlTaWduIiwiRW1wdHlUZXh0IiwiTW9zdEhpZ2hsaXRoZWRHYW1lc1BhcnQiLCJNb3N0SGlnaGxpdGhlZEdhbWVzVGV4dCIsIkFjY291bnROb3RGb3VuZGNvbnRhaW5lciIsIkFjY291bnROb3RGb3VuZHRleHQiLCJUb0xvZ2luTGluayIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXEiLCJoZWFkZXJzIiwidW5kZWZpbmVkIiwiQWNjb3VudEVtYWlsIiwiVXNlclRva2VuIiwicGFyc2VkQ29va2llcyIsInBhcnNlIiwiQWNjb3VudERhdGEiLCJBY2NvdW50VmlkZW9zIiwiUHVibGljVXNlclRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==