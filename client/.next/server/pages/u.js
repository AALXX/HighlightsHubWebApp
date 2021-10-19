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
    axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${"http://localhost:7000/api"}/user-account-manager/change-user-account-name/`, {
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
/* harmony import */ var _styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Account/OwnerAccount.module.css */ "./styles/Account/OwnerAccount.module.css");
/* harmony import */ var _styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: props.AccountExist ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().PageContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ChanelUpperBar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          src: `${"http://localhost:7000/api"}/user-account-manager/get-user-account-image/${AccountPublicToken}`,
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AccountProfileImage)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ChanelStats),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AccountNameText),
            children: props.AccountName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("hr", {
            color: "#676767",
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ChanelStatsBar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().Content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().Videos)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ChanelInfos),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelPart),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelText),
              children: "About Chanel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("hr", {
              color: "#676767",
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelLine)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h4", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ChanelWallPart),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelText),
              children: "Chanel Wall"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("hr", {
              color: "#676767",
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelLine)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().EmptySign),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().MostHighlithedGamesPart),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().MostHighlithedGamesText),
              children: "Highlithed Games"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("hr", {
              color: "#676767",
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().AboutChanelLine)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().MostHighlithedGamesText),
              children: "NULL"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
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
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: "Account Not Found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/u/signup",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          className: (_styles_Account_OwnerAccount_module_css__WEBPACK_IMPORTED_MODULE_7___default().ToLoginLink),
          children: "Already Have an account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
  const AccountData = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${"http://localhost:7000/api"}/user-account-manager/get-owner-user-account-data/${parsedCookies.UserToken}`);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixNQUFBQSxlQUFlLEVBQUV3QixXQUFXLENBQUNsRSxJQUFaLENBQWlCMEMsZUFKN0I7QUFLTFEsTUFBQUEsaUJBQWlCLEVBQUVnQixXQUFXLENBQUNsRSxJQUFaLENBQWlCa0QsaUJBTC9CO0FBTUxhLE1BQUFBLFNBQVMsRUFBRUMsYUFBYSxDQUFDRDtBQU5wQjtBQURGLEdBQVA7QUFVRDs7Ozs7Ozs7OztBQ3ZIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JCQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL0NvbXBvbmVudHMvdXNlckFjY291bnQvQ3VzdG9taXplVXNlckFjY291bnRQb3B1cC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy91L2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC8uL0NvbXBvbmVudHMvdXNlckFjY291bnQvc3R5bGVzL0N1c3RvbWl6ZUFjY291dFN0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3R5bGVzL0FjY291bnQvT3duZXJBY2NvdW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL0N1c3RvbWl6ZUFjY291dFN0eWxlLm1vZHVsZS5jc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9taXplQWNjb3VudFBvcFVwKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW0FjY291bnROYW1lLCBzZXRBY2NvdW50TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEFjY291bnROYW1lKHByb3BzLkFjY291bnROYW1lKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgQ2hhbmdlVXNlck5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5MT0NBTF9CQUNLRU5EX1VSTH0vdXNlci1hY2NvdW50LW1hbmFnZXIvY2hhbmdlLXVzZXItYWNjb3VudC1uYW1lL2AsIHsgQWNjb3VudFRva2VuOiBwcm9wcy5BY2NvdW50VG9rZW4sIG5ld0FjY291bnROYW1lOiBBY2NvdW50TmFtZSB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFJvdXRlci5yZWxvYWQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXBfaW5uZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5YQnV0dG9ufSBvbkNsaWNrPXtwcm9wcy5jbG9zZVBvcHVwfT4mIzk1ODc7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFjY291bnROYW1lRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuQWNjb3VudG5hTmFtZVRleHR9PlVzZXJOYW1lOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkFjY291bnROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY2NvdW50TmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0FjY291bnROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkFjY291bnRuYU5hbWVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5DaGFuZ2VOYW1lQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7IENoYW5nZVVzZXJOYW1lKCk7IH19PkNoYW5nZSE8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aHIgY29sb3I9XCIjNjc2NzY3XCIgY2xhc3NOYW1lPXtzdHlsZXMuQmFzaWNQYW5lbEhvcml6b250YWxMaW5lfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFrZVByb2ZpbGVQdWJsaWNDaGVja2VkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuU2hvd1Byb2ZpbGVUZXh0fT5NYWtlIFByb2ZpbGUgUHVibGljOiA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5TaG93UHJvZmlsZUNoZWNrQm94fSB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiU2hvd1Byb2ZpbGVDaGVja0JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxociBjb2xvcj1cIiM2NzY3NjdcIiBjbGFzc05hbWU9e3N0eWxlcy5CYXNpY1BhbmVsSG9yaXpvbnRhbExpbmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5DaGFuZ2UgQWNjb3VudCBQaWN0dXJlOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59IiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvQWNjb3VudC9Pd25lckFjY291bnQubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0ICogYXMgY29va2llIGZyb20gJ2Nvb2tpZSdcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiXHJcblxyXG5pbXBvcnQgQ3VzdG9taXplQWNjb3VudFBvcFVwIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL3VzZXJBY2NvdW50L0N1c3RvbWl6ZVVzZXJBY2NvdW50UG9wdXBcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3duZXJBY2NvdW50UGFnZShwcm9wcykge1xyXG5cclxuICBjb25zdCBbQWNjb3VudFB1YmxpY1Rva2VuLCBzZXRBY2NvdW50UHVibGljVG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0FjY291bnRFTWFpbCwgc2V0QWNjb3VudEVNYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtUb2dnbGVkQ3VzdG9taXplUG9wVXAsIHNldFRvZ2dsZWRDdXN0b21pemVQb3BVcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0QWNjb3VudFB1YmxpY1Rva2VuKENvb2tpZXMuZ2V0KFwiUHVibGljVXNlclRva2VuXCIpKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Byb3BzLkFjY291bnRFeGlzdCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuUGFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ2hhbmVsVXBwZXJCYXJ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7cHJvY2Vzcy5lbnYuTE9DQUxfQkFDS0VORF9VUkx9L3VzZXItYWNjb3VudC1tYW5hZ2VyL2dldC11c2VyLWFjY291bnQtaW1hZ2UvJHtBY2NvdW50UHVibGljVG9rZW59YH0gY2xhc3NOYW1lPXtzdHlsZS5BY2NvdW50UHJvZmlsZUltYWdlfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ2hhbmVsU3RhdHN9PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLkFjY291bnROYW1lVGV4dH0+e3Byb3BzLkFjY291bnROYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzY3Njc2N1wiIGNsYXNzTmFtZT17c3R5bGUuQ2hhbmVsU3RhdHNCYXJ9IC8+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuQWNjb3VudEZvbG93ZXJzVGV4dH0+Rm9sb3dlcnM6IHtwcm9wcy5BY2NvdW50Rm9sb3dlcnN9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5WaWRlb3N9PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5DaGFuZWxJbmZvc30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkFib3V0Q2hhbmVsUGFydH0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5BYm91dENoYW5lbFRleHR9PkFib3V0IENoYW5lbDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aHIgY29sb3I9XCIjNjc2NzY3XCIgY2xhc3NOYW1lPXtzdHlsZS5BYm91dENoYW5lbExpbmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlLkFib3V0Q2hhbmVsUGFyZ3JhcGhUZXh0fT57cHJvcHMuQ2hhbmVsRGVzY3JpcHRpb259PC9oND5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkNoYW5lbFdhbGxQYXJ0fT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLkFib3V0Q2hhbmVsVGV4dH0+Q2hhbmVsIFdhbGw8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzY3Njc2N1wiIGNsYXNzTmFtZT17c3R5bGUuQWJvdXRDaGFuZWxMaW5lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuRW1wdHlTaWdufT48aDEgY2xhc3NOYW1lPXtzdHlsZS5FbXB0eVRleHR9PkVNUFRZPC9oMT48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLk1vc3RIaWdobGl0aGVkR2FtZXNQYXJ0fT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLk1vc3RIaWdobGl0aGVkR2FtZXNUZXh0fT5IaWdobGl0aGVkIEdhbWVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxociBjb2xvcj1cIiM2NzY3NjdcIiBjbGFzc05hbWU9e3N0eWxlLkFib3V0Q2hhbmVsTGluZX0gLz5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLk1vc3RIaWdobGl0aGVkR2FtZXNUZXh0fT5OVUxMPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT5BY2NvdW50IE5vdCBGb3VuZDwvaDE+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Uvc2lnbnVwXCIgPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlLlRvTG9naW5MaW5rfT5BbHJlYWR5IEhhdmUgYW4gYWNjb3VudDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cclxuICBpZiAoY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBBY2NvdW50RXhpc3Q6IGZhbHNlLFxyXG4gICAgICAgIEFjY291bnROYW1lOiBcIlwiLFxyXG4gICAgICAgIEFjY291bnRFbWFpbDogbnVsbCxcclxuICAgICAgICBBY2NvdW50Rm9sb3dlcnM6IDAsXHJcbiAgICAgICAgQ2hhbmVsRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgVXNlclRva2VuOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcnNlZENvb2tpZXMgPSBjb29raWUucGFyc2UoY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUpO1xyXG5cclxuXHJcbiAgY29uc3QgQWNjb3VudERhdGEgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTE9DQUxfQkFDS0VORF9VUkx9L3VzZXItYWNjb3VudC1tYW5hZ2VyL2dldC1vd25lci11c2VyLWFjY291bnQtZGF0YS8ke3BhcnNlZENvb2tpZXMuVXNlclRva2VufWApO1xyXG5cclxuXHJcbiAgaWYgKEFjY291bnREYXRhLmRhdGEuQWNjb3VudEV4aXN0ID09PSBmYWxzZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBBY2NvdW50RXhpc3Q6IEFjY291bnREYXRhLmRhdGEuQWNjb3VudEV4aXN0LFxyXG4gICAgICAgIEFjY291bnROYW1lOiBcIlwiLFxyXG4gICAgICAgIEFjY291bnRFbWFpbDogbnVsbCxcclxuICAgICAgICBBY2NvdW50Rm9sb3dlcnM6IDAsXHJcbiAgICAgICAgQ2hhbmVsRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgVXNlclRva2VuOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBBY2NvdW50RXhpc3Q6IEFjY291bnREYXRhLmRhdGEuQWNjb3VudEV4aXN0LFxyXG4gICAgICBBY2NvdW50TmFtZTogQWNjb3VudERhdGEuZGF0YS5BY2NvdW50TmFtZSxcclxuICAgICAgQWNjb3VudEVtYWlsOiBBY2NvdW50RGF0YS5kYXRhLkFjY291bnRFbWFpbCxcclxuICAgICAgQWNjb3VudEZvbG93ZXJzOiBBY2NvdW50RGF0YS5kYXRhLkFjY291bnRGb2xvd2VycyxcclxuICAgICAgQ2hhbmVsRGVzY3JpcHRpb246IEFjY291bnREYXRhLmRhdGEuQ2hhbmVsRGVzY3JpcHRpb24sXHJcbiAgICAgIFVzZXJUb2tlbjogcGFyc2VkQ29va2llcy5Vc2VyVG9rZW5cclxuICAgIH0sXHJcbiAgfVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9wdXBcIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9wb3B1cF9fM1hVdjNcIixcblx0XCJwb3B1cF9pbm5lclwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX3BvcHVwX2lubmVyX18zUG5fT1wiLFxuXHRcIlB1cFVwYmFja2dyb3VuZFwiOiBcIkN1c3RvbWl6ZUFjY291dFN0eWxlX1B1cFVwYmFja2dyb3VuZF9fMnpjSndcIixcblx0XCJYQnV0dG9uXCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfWEJ1dHRvbl9fM1lucDNcIixcblx0XCJCYXNpY1BhbmVsSG9yaXpvbnRhbExpbmVcIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9CYXNpY1BhbmVsSG9yaXpvbnRhbExpbmVfXzhCb0d1XCIsXG5cdFwiQWNjb3VudE5hbWVEaXZcIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9BY2NvdW50TmFtZURpdl9fS092d21cIixcblx0XCJBY2NvdW50bmFOYW1lSW5wdXRcIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9BY2NvdW50bmFOYW1lSW5wdXRfXzJ4RmktXCIsXG5cdFwiQWNjb3VudG5hTmFtZVRleHRcIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9BY2NvdW50bmFOYW1lVGV4dF9fMXBtMlBcIixcblx0XCJDaGFuZ2VOYW1lQnV0dG9uXCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfQ2hhbmdlTmFtZUJ1dHRvbl9fMklyZmVcIixcblx0XCJNYWtlUHJvZmlsZVB1YmxpY0NoZWNrZWRcIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9NYWtlUHJvZmlsZVB1YmxpY0NoZWNrZWRfXzdWUEF2XCIsXG5cdFwiU2hvd1Byb2ZpbGVUZXh0XCI6IFwiQ3VzdG9taXplQWNjb3V0U3R5bGVfU2hvd1Byb2ZpbGVUZXh0X18zSkdmZ1wiLFxuXHRcIlNob3dQcm9maWxlQ2hlY2tCb3hcIjogXCJDdXN0b21pemVBY2NvdXRTdHlsZV9TaG93UHJvZmlsZUNoZWNrQm94X18ydVVydlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiUGFnZUNvbnRhaW5lclwiOiBcIk93bmVyQWNjb3VudF9QYWdlQ29udGFpbmVyX182bGhsNlwiLFxuXHRcIkNoYW5lbFVwcGVyQmFyXCI6IFwiT3duZXJBY2NvdW50X0NoYW5lbFVwcGVyQmFyX19DVVBsVFwiLFxuXHRcIkFjY291bnRQcm9maWxlSW1hZ2VcIjogXCJPd25lckFjY291bnRfQWNjb3VudFByb2ZpbGVJbWFnZV9fM0hwRWZcIixcblx0XCJDaGFuZWxTdGF0c1wiOiBcIk93bmVyQWNjb3VudF9DaGFuZWxTdGF0c19fVWYtVUhcIixcblx0XCJBY2NvdW50TmFtZVRleHRcIjogXCJPd25lckFjY291bnRfQWNjb3VudE5hbWVUZXh0X18yLTJlZ1wiLFxuXHRcIkNoYW5lbFN0YXRzQmFyXCI6IFwiT3duZXJBY2NvdW50X0NoYW5lbFN0YXRzQmFyX19Wb3RjdVwiLFxuXHRcIkFjY291bnRGb2xvd2Vyc1RleHRcIjogXCJPd25lckFjY291bnRfQWNjb3VudEZvbG93ZXJzVGV4dF9fM0RYRHJcIixcblx0XCJDb250ZW50XCI6IFwiT3duZXJBY2NvdW50X0NvbnRlbnRfXzFUX0tYXCIsXG5cdFwiVmlkZW9zXCI6IFwiT3duZXJBY2NvdW50X1ZpZGVvc19fMjc5S2hcIixcblx0XCJDaGFuZWxJbmZvc1wiOiBcIk93bmVyQWNjb3VudF9DaGFuZWxJbmZvc19fMnR5LUNcIixcblx0XCJBYm91dENoYW5lbFBhcnRcIjogXCJPd25lckFjY291bnRfQWJvdXRDaGFuZWxQYXJ0X19tR1IxRVwiLFxuXHRcIkFib3V0Q2hhbmVsVGV4dFwiOiBcIk93bmVyQWNjb3VudF9BYm91dENoYW5lbFRleHRfXzJzV3QyXCIsXG5cdFwiQWJvdXRDaGFuZWxMaW5lXCI6IFwiT3duZXJBY2NvdW50X0Fib3V0Q2hhbmVsTGluZV9fM0wxSFFcIixcblx0XCJBYm91dENoYW5lbFBhcmdyYXBoVGV4dFwiOiBcIk93bmVyQWNjb3VudF9BYm91dENoYW5lbFBhcmdyYXBoVGV4dF9fMUgtQ2FcIixcblx0XCJDaGFuZWxXYWxsUGFydFwiOiBcIk93bmVyQWNjb3VudF9DaGFuZWxXYWxsUGFydF9fMy1xdFJcIixcblx0XCJNb3N0SGlnaGxpdGhlZEdhbWVzUGFydFwiOiBcIk93bmVyQWNjb3VudF9Nb3N0SGlnaGxpdGhlZEdhbWVzUGFydF9fUFBKYm1cIixcblx0XCJNb3N0SGlnaGxpdGhlZEdhbWVzVGV4dFwiOiBcIk93bmVyQWNjb3VudF9Nb3N0SGlnaGxpdGhlZEdhbWVzVGV4dF9fMXc2QkpcIixcblx0XCJFbXB0eVNpZ25cIjogXCJPd25lckFjY291bnRfRW1wdHlTaWduX18yMFlZSVwiLFxuXHRcIkVtcHR5VGV4dFwiOiBcIk93bmVyQWNjb3VudF9FbXB0eVRleHRfX05nVDgzXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvdXRlciIsInN0eWxlcyIsIkN1c3RvbWl6ZUFjY291bnRQb3BVcCIsInByb3BzIiwiQWNjb3VudE5hbWUiLCJzZXRBY2NvdW50TmFtZSIsIkNoYW5nZVVzZXJOYW1lIiwicG9zdCIsIkFjY291bnRUb2tlbiIsIm5ld0FjY291bnROYW1lIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnJvciIsIndpbmRvdyIsImFsZXJ0IiwicmVsb2FkIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBvcHVwIiwicG9wdXBfaW5uZXIiLCJYQnV0dG9uIiwiY2xvc2VQb3B1cCIsIkFjY291bnROYW1lRGl2IiwiQWNjb3VudG5hTmFtZVRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJBY2NvdW50bmFOYW1lSW5wdXQiLCJDaGFuZ2VOYW1lQnV0dG9uIiwiQmFzaWNQYW5lbEhvcml6b250YWxMaW5lIiwiTWFrZVByb2ZpbGVQdWJsaWNDaGVja2VkIiwiU2hvd1Byb2ZpbGVUZXh0IiwiU2hvd1Byb2ZpbGVDaGVja0JveCIsInN0eWxlIiwiQ29va2llcyIsImNvb2tpZSIsIkxpbmsiLCJPd25lckFjY291bnRQYWdlIiwiQWNjb3VudFB1YmxpY1Rva2VuIiwic2V0QWNjb3VudFB1YmxpY1Rva2VuIiwiQWNjb3VudEVNYWlsIiwic2V0QWNjb3VudEVNYWlsIiwiVG9nZ2xlZEN1c3RvbWl6ZVBvcFVwIiwic2V0VG9nZ2xlZEN1c3RvbWl6ZVBvcFVwIiwiZ2V0IiwiQWNjb3VudEV4aXN0IiwiUGFnZUNvbnRhaW5lciIsIkNoYW5lbFVwcGVyQmFyIiwiQWNjb3VudFByb2ZpbGVJbWFnZSIsIkNoYW5lbFN0YXRzIiwiQWNjb3VudE5hbWVUZXh0IiwiQ2hhbmVsU3RhdHNCYXIiLCJBY2NvdW50Rm9sb3dlcnNUZXh0IiwiQWNjb3VudEZvbG93ZXJzIiwiQ29udGVudCIsIlZpZGVvcyIsIkNoYW5lbEluZm9zIiwiQWJvdXRDaGFuZWxQYXJ0IiwiQWJvdXRDaGFuZWxUZXh0IiwiQWJvdXRDaGFuZWxMaW5lIiwiQWJvdXRDaGFuZWxQYXJncmFwaFRleHQiLCJDaGFuZWxEZXNjcmlwdGlvbiIsIkNoYW5lbFdhbGxQYXJ0IiwiRW1wdHlTaWduIiwiRW1wdHlUZXh0IiwiTW9zdEhpZ2hsaXRoZWRHYW1lc1BhcnQiLCJNb3N0SGlnaGxpdGhlZEdhbWVzVGV4dCIsIlRvTG9naW5MaW5rIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcSIsImhlYWRlcnMiLCJ1bmRlZmluZWQiLCJBY2NvdW50RW1haWwiLCJVc2VyVG9rZW4iLCJwYXJzZWRDb29raWVzIiwicGFyc2UiLCJBY2NvdW50RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=