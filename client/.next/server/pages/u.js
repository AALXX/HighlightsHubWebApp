(() => {
var exports = {};
exports.id = "pages/u";
exports.ids = ["pages/u"];
exports.modules = {

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CustomizeAccoutStyle.module.css */ "./Components/userAccount/styles/CustomizeAccoutStyle.module.css");
/* harmony import */ var _styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/mnt/d/xamp/htdocs/GameHighlitsWeb/client/Components/userAccount/CustomizeUserAccountPopup.js";





function CustomizeAccountPopUp(props) {
  const {
    0: AccountName,
    1: setAccountName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAccountName(props.AccountName);
  }, []);

  const ChangeUserName = () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${"http://localhost:7000/api"}/user-account-manager/change-user-account-name/`, {
      AccountToken: props.AccountToken,
      newAccountName: AccountName
    }).then(res => {
      if (res.data.error) {
        window.alert("error");
      }

      next_router__WEBPACK_IMPORTED_MODULE_3___default().reload(window.location.pathname);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup_inner),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().XButton),
        onClick: props.closePopup,
        children: "\u2573"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().AccountNameDiv),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().AccountnaNameText),
          children: "UserName:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().ChangeNameButton),
        onClick: () => {
          ChangeUserName();
        },
        children: "Change!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        color: "#676767",
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().BasicPanelHorizontalLine)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().MakeProfilePublicChecked),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().ShowProfileText),
          children: "Make Profile Public: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        color: "#676767",
        className: (_styles_CustomizeAccoutStyle_module_css__WEBPACK_IMPORTED_MODULE_4___default().BasicPanelHorizontalLine)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Change Account Picture:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Account/OwnerAccount.module.css */ "./styles/Account/OwnerAccount.module.css");
/* harmony import */ var _styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var _Components_userAccount_CustomizeUserAccountPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/userAccount/CustomizeUserAccountPopup */ "./Components/userAccount/CustomizeUserAccountPopup.js");


var _jsxFileName = "/mnt/d/xamp/htdocs/GameHighlitsWeb/client/pages/u/index.js";







function OwnerAccountPage(props) {
  const {
    0: AccountPublicToken,
    1: setAccountPublicToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: AccountEMail,
    1: setAccountEMail
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: ToggledCustomizePopUp,
    1: setToggledCustomizePopUp
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setAccountPublicToken(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("PublicUserToken"));
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: props.AccountExist ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().PageContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ChanelUpperBar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: `${"http://localhost:7000/api"}/user-account-manager/get-user-account-image/${AccountPublicToken}`,
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AccountProfileImage)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ChanelStats),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AccountNameText),
            children: props.AccountName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            color: "#676767",
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ChanelStatsBar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AccountFolowersText),
            children: ["Folowers: ", props.AccountFolowers]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().Content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().Videos)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ChanelInfos),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelPart),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelText),
              children: "About Chanel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
              color: "#676767",
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelLine)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelPargraphText),
              children: props.ChanelDescription
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ChanelWallPart),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelText),
              children: "Chanel Wall"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
              color: "#676767",
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelLine)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().EmptySign),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().EmptyText),
                children: "EMPTY"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 50
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().MostHighlithedGamesPart),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().MostHighlithedGamesText),
              children: "Highlithed Games"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
              color: "#676767",
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelLine)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().MostHighlithedGamesText),
              children: "NULL"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Account Not Found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/u/signup",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ToLoginLink),
          children: "Already Have an account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
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

  const parsedCookies = cookie__WEBPACK_IMPORTED_MODULE_4__.parse(context.req.headers.cookie);
  const AccountData = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${"http://localhost:7000/api"}/user-account-manager/get-owner-user-account-data/${parsedCookies.UserToken}`);

  if (AccountData.data.AccountExist === false) {
    return {
      props: {
        AccountExist: AccountData.data.AccountExist,
        AccountName: "",
        AccountEmail: null,
        AccountFolowers: 0,
        ChanelDescription: "",
        UserToken: null
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
      UserToken: parsedCookies.UserToken
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBQUEsZUFBZSxFQUFFd0IsV0FBVyxDQUFDbEUsSUFBWixDQUFpQjBDLGVBSjdCO0FBS0xRLE1BQUFBLGlCQUFpQixFQUFFZ0IsV0FBVyxDQUFDbEUsSUFBWixDQUFpQmtELGlCQUwvQjtBQU1MYSxNQUFBQSxTQUFTLEVBQUVDLGFBQWEsQ0FBQ0Q7QUFOcEI7QUFERixHQUFQO0FBVUQ7Ozs7Ozs7Ozs7QUN0SEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9Db21wb25lbnRzL3VzZXJBY2NvdW50L0N1c3RvbWl6ZVVzZXJBY2NvdW50UG9wdXAuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvdS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9Db21wb25lbnRzL3VzZXJBY2NvdW50L3N0eWxlcy9DdXN0b21pemVBY2NvdXRTdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC8uL3N0eWxlcy9BY2NvdW50L093bmVyQWNjb3VudC5tb2R1bGUuY3NzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiY29va2llXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9DdXN0b21pemVBY2NvdXRTdHlsZS5tb2R1bGUuY3NzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZUFjY291bnRQb3BVcChwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtBY2NvdW50TmFtZSwgc2V0QWNjb3VudE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRBY2NvdW50TmFtZShwcm9wcy5BY2NvdW50TmFtZSk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IENoYW5nZVVzZXJOYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTE9DQUxfQkFDS0VORF9VUkx9L3VzZXItYWNjb3VudC1tYW5hZ2VyL2NoYW5nZS11c2VyLWFjY291bnQtbmFtZS9gLCB7IEFjY291bnRUb2tlbjogcHJvcHMuQWNjb3VudFRva2VuLCBuZXdBY2NvdW50TmFtZTogQWNjb3VudE5hbWUgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBSb3V0ZXIucmVsb2FkKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwX2lubmVyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuWEJ1dHRvbn0gb25DbGljaz17cHJvcHMuY2xvc2VQb3B1cH0+JiM5NTg3OzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BY2NvdW50TmFtZURpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLkFjY291bnRuYU5hbWVUZXh0fT5Vc2VyTmFtZTo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJBY2NvdW50TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWNjb3VudE5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtBY2NvdW50TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5BY2NvdW50bmFOYW1lSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbmdlTmFtZUJ1dHRvbn0gb25DbGljaz17KCkgPT4geyBDaGFuZ2VVc2VyTmFtZSgpOyB9fT5DaGFuZ2UhPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzY3Njc2N1wiIGNsYXNzTmFtZT17c3R5bGVzLkJhc2ljUGFuZWxIb3Jpem9udGFsTGluZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1ha2VQcm9maWxlUHVibGljQ2hlY2tlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLlNob3dQcm9maWxlVGV4dH0+TWFrZSBQcm9maWxlIFB1YmxpYzogPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuU2hvd1Byb2ZpbGVDaGVja0JveH0gdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlNob3dQcm9maWxlQ2hlY2tCb3hcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIgY29sb3I9XCIjNjc2NzY3XCIgY2xhc3NOYW1lPXtzdHlsZXMuQmFzaWNQYW5lbEhvcml6b250YWxMaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+Q2hhbmdlIEFjY291bnQgUGljdHVyZTo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufSIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL0FjY291bnQvT3duZXJBY2NvdW50Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCAqIGFzIGNvb2tpZSBmcm9tICdjb29raWUnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIlxyXG5cclxuaW1wb3J0IEN1c3RvbWl6ZUFjY291bnRQb3BVcCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy91c2VyQWNjb3VudC9DdXN0b21pemVVc2VyQWNjb3VudFBvcHVwXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE93bmVyQWNjb3VudFBhZ2UocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW0FjY291bnRQdWJsaWNUb2tlbiwgc2V0QWNjb3VudFB1YmxpY1Rva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtBY2NvdW50RU1haWwsIHNldEFjY291bnRFTWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbVG9nZ2xlZEN1c3RvbWl6ZVBvcFVwLCBzZXRUb2dnbGVkQ3VzdG9taXplUG9wVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEFjY291bnRQdWJsaWNUb2tlbihDb29raWVzLmdldChcIlB1YmxpY1VzZXJUb2tlblwiKSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtwcm9wcy5BY2NvdW50RXhpc3QgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlBhZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkNoYW5lbFVwcGVyQmFyfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Byb2Nlc3MuZW52LkxPQ0FMX0JBQ0tFTkRfVVJMfS91c2VyLWFjY291bnQtbWFuYWdlci9nZXQtdXNlci1hY2NvdW50LWltYWdlLyR7QWNjb3VudFB1YmxpY1Rva2VufWB9IGNsYXNzTmFtZT17c3R5bGUuQWNjb3VudFByb2ZpbGVJbWFnZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkNoYW5lbFN0YXRzfT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5BY2NvdW50TmFtZVRleHR9Pntwcm9wcy5BY2NvdW50TmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgIDxociBjb2xvcj1cIiM2NzY3NjdcIiBjbGFzc05hbWU9e3N0eWxlLkNoYW5lbFN0YXRzQmFyfSAvPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLkFjY291bnRGb2xvd2Vyc1RleHR9PkZvbG93ZXJzOiB7cHJvcHMuQWNjb3VudEZvbG93ZXJzfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuVmlkZW9zfT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ2hhbmVsSW5mb3N9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5BYm91dENoYW5lbFBhcnR9PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuQWJvdXRDaGFuZWxUZXh0fT5BYm91dCBDaGFuZWw8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzY3Njc2N1wiIGNsYXNzTmFtZT17c3R5bGUuQWJvdXRDaGFuZWxMaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZS5BYm91dENoYW5lbFBhcmdyYXBoVGV4dH0+e3Byb3BzLkNoYW5lbERlc2NyaXB0aW9ufTwvaDQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5DaGFuZWxXYWxsUGFydH0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5BYm91dENoYW5lbFRleHR9PkNoYW5lbCBXYWxsPC9oMj5cclxuICAgICAgICAgICAgICAgIDxociBjb2xvcj1cIiM2NzY3NjdcIiBjbGFzc05hbWU9e3N0eWxlLkFib3V0Q2hhbmVsTGluZX0gLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkVtcHR5U2lnbn0+PGgxIGNsYXNzTmFtZT17c3R5bGUuRW1wdHlUZXh0fT5FTVBUWTwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Nb3N0SGlnaGxpdGhlZEdhbWVzUGFydH0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5Nb3N0SGlnaGxpdGhlZEdhbWVzVGV4dH0+SGlnaGxpdGhlZCBHYW1lczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aHIgY29sb3I9XCIjNjc2NzY3XCIgY2xhc3NOYW1lPXtzdHlsZS5BYm91dENoYW5lbExpbmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5Nb3N0SGlnaGxpdGhlZEdhbWVzVGV4dH0+TlVMTDwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+QWNjb3VudCBOb3QgRm91bmQ8L2gxPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi91L3NpZ251cFwiID5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZS5Ub0xvZ2luTGlua30+QWxyZWFkeSBIYXZlIGFuIGFjY291bnQ8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHJcbiAgaWYgKGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgQWNjb3VudEV4aXN0OiBmYWxzZSxcclxuICAgICAgICBBY2NvdW50TmFtZTogXCJcIixcclxuICAgICAgICBBY2NvdW50RW1haWw6IG51bGwsXHJcbiAgICAgICAgQWNjb3VudEZvbG93ZXJzOiAwLFxyXG4gICAgICAgIENoYW5lbERlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIFVzZXJUb2tlbjogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJzZWRDb29raWVzID0gY29va2llLnBhcnNlKGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llKTtcclxuXHJcblxyXG4gIGNvbnN0IEFjY291bnREYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkxPQ0FMX0JBQ0tFTkRfVVJMfS91c2VyLWFjY291bnQtbWFuYWdlci9nZXQtb3duZXItdXNlci1hY2NvdW50LWRhdGEvJHtwYXJzZWRDb29raWVzLlVzZXJUb2tlbn1gKTtcclxuXHJcblxyXG4gIGlmIChBY2NvdW50RGF0YS5kYXRhLkFjY291bnRFeGlzdCA9PT0gZmFsc2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgQWNjb3VudEV4aXN0OiBBY2NvdW50RGF0YS5kYXRhLkFjY291bnRFeGlzdCxcclxuICAgICAgICBBY2NvdW50TmFtZTogXCJcIixcclxuICAgICAgICBBY2NvdW50RW1haWw6IG51bGwsXHJcbiAgICAgICAgQWNjb3VudEZvbG93ZXJzOiAwLFxyXG4gICAgICAgIENoYW5lbERlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIFVzZXJUb2tlbjogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgQWNjb3VudEV4aXN0OiBBY2NvdW50RGF0YS5kYXRhLkFjY291bnRFeGlzdCxcclxuICAgICAgQWNjb3VudE5hbWU6IEFjY291bnREYXRhLmRhdGEuQWNjb3VudE5hbWUsXHJcbiAgICAgIEFjY291bnRFbWFpbDogQWNjb3VudERhdGEuZGF0YS5BY2NvdW50RW1haWwsXHJcbiAgICAgIEFjY291bnRGb2xvd2VyczogQWNjb3VudERhdGEuZGF0YS5BY2NvdW50Rm9sb3dlcnMsXHJcbiAgICAgIENoYW5lbERlc2NyaXB0aW9uOiBBY2NvdW50RGF0YS5kYXRhLkNoYW5lbERlc2NyaXB0aW9uLFxyXG4gICAgICBVc2VyVG9rZW46IHBhcnNlZENvb2tpZXMuVXNlclRva2VuXHJcbiAgICB9LFxyXG4gIH1cclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvcHVwXCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfcG9wdXBfXzNYVXYzXCIsXG5cdFwicG9wdXBfaW5uZXJcIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9wb3B1cF9pbm5lcl9fM1BuX09cIixcblx0XCJQdXBVcGJhY2tncm91bmRcIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9QdXBVcGJhY2tncm91bmRfXzJ6Y0p3XCIsXG5cdFwiWEJ1dHRvblwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX1hCdXR0b25fXzNZbnAzXCIsXG5cdFwiQmFzaWNQYW5lbEhvcml6b250YWxMaW5lXCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfQmFzaWNQYW5lbEhvcml6b250YWxMaW5lX184Qm9HdVwiLFxuXHRcIkFjY291bnROYW1lRGl2XCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfQWNjb3VudE5hbWVEaXZfX0tPdndtXCIsXG5cdFwiQWNjb3VudG5hTmFtZUlucHV0XCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfQWNjb3VudG5hTmFtZUlucHV0X18yeEZpLVwiLFxuXHRcIkFjY291bnRuYU5hbWVUZXh0XCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfQWNjb3VudG5hTmFtZVRleHRfXzFwbTJQXCIsXG5cdFwiQ2hhbmdlTmFtZUJ1dHRvblwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX0NoYW5nZU5hbWVCdXR0b25fXzJJcmZlXCIsXG5cdFwiTWFrZVByb2ZpbGVQdWJsaWNDaGVja2VkXCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfTWFrZVByb2ZpbGVQdWJsaWNDaGVja2VkX183VlBBdlwiLFxuXHRcIlNob3dQcm9maWxlVGV4dFwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX1Nob3dQcm9maWxlVGV4dF9fM0pHZmdcIixcblx0XCJTaG93UHJvZmlsZUNoZWNrQm94XCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfU2hvd1Byb2ZpbGVDaGVja0JveF9fMnVVcnZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlBhZ2VDb250YWluZXJcIjogXCJPd25lckFjY291bnRfUGFnZUNvbnRhaW5lcl9fNmxobDZcIixcblx0XCJDaGFuZWxVcHBlckJhclwiOiBcIk93bmVyQWNjb3VudF9DaGFuZWxVcHBlckJhcl9fQ1VQbFRcIixcblx0XCJBY2NvdW50UHJvZmlsZUltYWdlXCI6IFwiT3duZXJBY2NvdW50X0FjY291bnRQcm9maWxlSW1hZ2VfXzNIcEVmXCIsXG5cdFwiQ2hhbmVsU3RhdHNcIjogXCJPd25lckFjY291bnRfQ2hhbmVsU3RhdHNfX1VmLVVIXCIsXG5cdFwiQWNjb3VudE5hbWVUZXh0XCI6IFwiT3duZXJBY2NvdW50X0FjY291bnROYW1lVGV4dF9fMi0yZWdcIixcblx0XCJDaGFuZWxTdGF0c0JhclwiOiBcIk93bmVyQWNjb3VudF9DaGFuZWxTdGF0c0Jhcl9fVm90Y3VcIixcblx0XCJBY2NvdW50Rm9sb3dlcnNUZXh0XCI6IFwiT3duZXJBY2NvdW50X0FjY291bnRGb2xvd2Vyc1RleHRfXzNEWERyXCIsXG5cdFwiQ29udGVudFwiOiBcIk93bmVyQWNjb3VudF9Db250ZW50X18xVF9LWFwiLFxuXHRcIlZpZGVvc1wiOiBcIk93bmVyQWNjb3VudF9WaWRlb3NfXzI3OUtoXCIsXG5cdFwiQ2hhbmVsSW5mb3NcIjogXCJPd25lckFjY291bnRfQ2hhbmVsSW5mb3NfXzJ0eS1DXCIsXG5cdFwiQWJvdXRDaGFuZWxQYXJ0XCI6IFwiT3duZXJBY2NvdW50X0Fib3V0Q2hhbmVsUGFydF9fbUdSMUVcIixcblx0XCJBYm91dENoYW5lbFRleHRcIjogXCJPd25lckFjY291bnRfQWJvdXRDaGFuZWxUZXh0X18yc1d0MlwiLFxuXHRcIkFib3V0Q2hhbmVsTGluZVwiOiBcIk93bmVyQWNjb3VudF9BYm91dENoYW5lbExpbmVfXzNMMUhRXCIsXG5cdFwiQWJvdXRDaGFuZWxQYXJncmFwaFRleHRcIjogXCJPd25lckFjY291bnRfQWJvdXRDaGFuZWxQYXJncmFwaFRleHRfXzFILUNhXCIsXG5cdFwiQ2hhbmVsV2FsbFBhcnRcIjogXCJPd25lckFjY291bnRfQ2hhbmVsV2FsbFBhcnRfXzMtcXRSXCIsXG5cdFwiTW9zdEhpZ2hsaXRoZWRHYW1lc1BhcnRcIjogXCJPd25lckFjY291bnRfTW9zdEhpZ2hsaXRoZWRHYW1lc1BhcnRfX1BQSmJtXCIsXG5cdFwiTW9zdEhpZ2hsaXRoZWRHYW1lc1RleHRcIjogXCJPd25lckFjY291bnRfTW9zdEhpZ2hsaXRoZWRHYW1lc1RleHRfXzF3NkJKXCIsXG5cdFwiRW1wdHlTaWduXCI6IFwiT3duZXJBY2NvdW50X0VtcHR5U2lnbl9fMjBZWUlcIixcblx0XCJFbXB0eVRleHRcIjogXCJPd25lckFjY291bnRfRW1wdHlUZXh0X19OZ1Q4M1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJzdHlsZXMiLCJDdXN0b21pemVBY2NvdW50UG9wVXAiLCJwcm9wcyIsIkFjY291bnROYW1lIiwic2V0QWNjb3VudE5hbWUiLCJDaGFuZ2VVc2VyTmFtZSIsInBvc3QiLCJBY2NvdW50VG9rZW4iLCJuZXdBY2NvdW50TmFtZSIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyb3IiLCJ3aW5kb3ciLCJhbGVydCIsInJlbG9hZCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwb3B1cCIsInBvcHVwX2lubmVyIiwiWEJ1dHRvbiIsImNsb3NlUG9wdXAiLCJBY2NvdW50TmFtZURpdiIsIkFjY291bnRuYU5hbWVUZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiQWNjb3VudG5hTmFtZUlucHV0IiwiQ2hhbmdlTmFtZUJ1dHRvbiIsIkJhc2ljUGFuZWxIb3Jpem9udGFsTGluZSIsIk1ha2VQcm9maWxlUHVibGljQ2hlY2tlZCIsIlNob3dQcm9maWxlVGV4dCIsIlNob3dQcm9maWxlQ2hlY2tCb3giLCJzdHlsZSIsIkNvb2tpZXMiLCJjb29raWUiLCJMaW5rIiwiT3duZXJBY2NvdW50UGFnZSIsIkFjY291bnRQdWJsaWNUb2tlbiIsInNldEFjY291bnRQdWJsaWNUb2tlbiIsIkFjY291bnRFTWFpbCIsInNldEFjY291bnRFTWFpbCIsIlRvZ2dsZWRDdXN0b21pemVQb3BVcCIsInNldFRvZ2dsZWRDdXN0b21pemVQb3BVcCIsImdldCIsIkFjY291bnRFeGlzdCIsIlBhZ2VDb250YWluZXIiLCJDaGFuZWxVcHBlckJhciIsIkFjY291bnRQcm9maWxlSW1hZ2UiLCJDaGFuZWxTdGF0cyIsIkFjY291bnROYW1lVGV4dCIsIkNoYW5lbFN0YXRzQmFyIiwiQWNjb3VudEZvbG93ZXJzVGV4dCIsIkFjY291bnRGb2xvd2VycyIsIkNvbnRlbnQiLCJWaWRlb3MiLCJDaGFuZWxJbmZvcyIsIkFib3V0Q2hhbmVsUGFydCIsIkFib3V0Q2hhbmVsVGV4dCIsIkFib3V0Q2hhbmVsTGluZSIsIkFib3V0Q2hhbmVsUGFyZ3JhcGhUZXh0IiwiQ2hhbmVsRGVzY3JpcHRpb24iLCJDaGFuZWxXYWxsUGFydCIsIkVtcHR5U2lnbiIsIkVtcHR5VGV4dCIsIk1vc3RIaWdobGl0aGVkR2FtZXNQYXJ0IiwiTW9zdEhpZ2hsaXRoZWRHYW1lc1RleHQiLCJUb0xvZ2luTGluayIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXEiLCJoZWFkZXJzIiwidW5kZWZpbmVkIiwiQWNjb3VudEVtYWlsIiwiVXNlclRva2VuIiwicGFyc2VkQ29va2llcyIsInBhcnNlIiwiQWNjb3VudERhdGEiXSwic291cmNlUm9vdCI6IiJ9