(() => {
var exports = {};
exports.id = "pages/u/signup";
exports.ids = ["pages/u/signup"];
exports.modules = {

/***/ "./pages/u/signup.js":
/*!***************************!*\
  !*** ./pages/u/signup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Account/Signup.module.css */ "./styles/Account/Signup.module.css");
/* harmony import */ var _styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/mnt/d/xamp/htdocs/GameHighlitsWeb/client/pages/u/signup.js";





function Login() {
  const {
    0: UserName,
    1: setUserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: UserEmail,
    1: setUserEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: Password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: RepeatePassword,
    1: setRepeatePassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");

  const RegisterSubmit = () => {
    if (Password !== RepeatePassword) {
      window.alert("passwords do not match");
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_3___default().post(`${"http://localhost:7000/api"}/user-account-manager/register-user-account`, {
      UserName: UserName,
      UserEmail: UserEmail,
      Password: Password
    }).then(res => {
      console.log(res.data);

      if (res.data.error) {
        return window.alert("an error has ocured");
      }

      if (res.data.UserNameExistsorEmailExists) {
        return window.alert("account with this email or username already exists");
      }

      const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("UserToken", res.data.UserToken, {
        expires: inFifteenMinutes
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("PublicUserToken", res.data.PublicUserToken, {
        expires: inFifteenMinutes
      });
      return;
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().LoginCard),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().SignUpText),
        children: "Create an account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        color: "#676767",
        className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().Bar)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().SignupContentBody),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().UserNamePart),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().UserNameText),
            children: "UserName:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().UserNameInput),
            type: "text",
            placeholder: "User Name...",
            onChange: e => {
              setUserName(e.target.value);
            },
            value: UserName,
            maxLength: "10",
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().EmailPart),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().EmailText),
            children: "E-Mail:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().EmailInput),
            type: "email",
            placeholder: "exampl@example.com",
            onChange: e => {
              setUserEmail(e.target.value);
            },
            value: UserEmail,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().PasswordPart),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().PasswordText),
            children: "Password:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().PasswordTextInput),
            type: "password",
            placeholder: "User Name...",
            onChange: e => {
              setPassword(e.target.value);
            },
            value: Password,
            maxLength: "10",
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().RepeatPasswordPart),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().ReapeatPasswordText),
            children: "Repeat Password:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().PasswordTextInput),
            type: "password",
            placeholder: "Reapeat Password...",
            onChange: e => {
              setRepeatePassword(e.target.value);
            },
            value: RepeatePassword,
            maxLength: "10",
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        color: "#676767",
        className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().BottomBar)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().FooterCardContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().SignUpButton),
          onClick: () => {
            RegisterSubmit();
          },
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/u/login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: (_styles_Account_Signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().ToLoginLink),
            children: "Already Have an account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./styles/Account/Signup.module.css":
/*!******************************************!*\
  !*** ./styles/Account/Signup.module.css ***!
  \******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Signup_container__2GS18",
	"LoginCard": "Signup_LoginCard__3Ylb_",
	"SignUpText": "Signup_SignUpText__17_H8",
	"Bar": "Signup_Bar__XULGT",
	"SignupContentBody": "Signup_SignupContentBody__3sq6n",
	"UserNamePart": "Signup_UserNamePart__1Xnyj",
	"UserNameText": "Signup_UserNameText__2i7V1",
	"UserNameInput": "Signup_UserNameInput__SyIf_",
	"EmailPart": "Signup_EmailPart__3mOQE",
	"EmailText": "Signup_EmailText__2f8e7",
	"EmailInput": "Signup_EmailInput__2Qr1o",
	"PasswordPart": "Signup_PasswordPart__1lABA",
	"PasswordText": "Signup_PasswordText__1b0T3",
	"PasswordTextInput": "Signup_PasswordTextInput__yLWAI",
	"RepeatPasswordPart": "Signup_RepeatPasswordPart__KRKpa",
	"ReapeatPasswordText": "Signup_ReapeatPasswordText__26wXJ",
	"BottomBar": "Signup_BottomBar__1Vv7O",
	"FooterCardContainer": "Signup_FooterCardContainer__NwclT",
	"SignUpButton": "Signup_SignUpButton__20Bqb",
	"ToLoginLink": "Signup_ToLoginLink__3AkvL"
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
var __webpack_exports__ = (__webpack_exec__("./pages/u/signup.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvdS9zaWdudXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTTSxLQUFULEdBQWlCO0FBRTVCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkwsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNNLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ1EsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJULCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDVSxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7O0FBRUEsUUFBTVksY0FBYyxHQUFHLE1BQU07QUFFekIsUUFBSUosUUFBUSxLQUFLRSxlQUFqQixFQUFrQztBQUM5QkcsTUFBQUEsTUFBTSxDQUFDQyxLQUFQLENBQWEsd0JBQWI7QUFDQTtBQUNIOztBQUVEYixJQUFBQSxpREFBQSxDQUFZLEdBQUQsMkJBQWlDLDZDQUE1QyxFQUEwRjtBQUFDRyxNQUFBQSxRQUFRLEVBQUVBLFFBQVg7QUFBcUJFLE1BQUFBLFNBQVMsRUFBRUEsU0FBaEM7QUFBMkNFLE1BQUFBLFFBQVEsRUFBQ0E7QUFBcEQsS0FBMUYsRUFDQ1EsSUFERCxDQUNPQyxHQUFELElBQVE7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7O0FBRUEsVUFBR0gsR0FBRyxDQUFDRyxJQUFKLENBQVNDLEtBQVosRUFBa0I7QUFDZCxlQUFPUixNQUFNLENBQUNDLEtBQVAsQ0FBYSxxQkFBYixDQUFQO0FBQ0g7O0FBRUQsVUFBR0csR0FBRyxDQUFDRyxJQUFKLENBQVNFLDJCQUFaLEVBQXdDO0FBQ3BDLGVBQU9ULE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLG9EQUFiLENBQVA7QUFDSDs7QUFFRCxZQUFNUyxnQkFBZ0IsR0FBRyxJQUFJQyxJQUFKLENBQVMsSUFBSUEsSUFBSixHQUFXQyxPQUFYLEtBQXVCLEtBQUssRUFBTCxHQUFVLElBQTFDLENBQXpCO0FBRUF2QixNQUFBQSxvREFBQSxDQUFZLFdBQVosRUFBeUJlLEdBQUcsQ0FBQ0csSUFBSixDQUFTTyxTQUFsQyxFQUE4QztBQUMxQ0MsUUFBQUEsT0FBTyxFQUFFTDtBQURpQyxPQUE5QztBQUlBckIsTUFBQUEsb0RBQUEsQ0FBWSxpQkFBWixFQUErQmUsR0FBRyxDQUFDRyxJQUFKLENBQVNTLGVBQXhDLEVBQTBEO0FBQ3RERCxRQUFBQSxPQUFPLEVBQUVMO0FBRDZDLE9BQTFEO0FBSUE7QUFDSCxLQXZCRDtBQXdCSCxHQS9CRDs7QUFpQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUUxQixvRkFBaEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUEsb0ZBQWhCO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFFQSxxRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSSxhQUFLLEVBQUMsU0FBVjtBQUFvQixpQkFBUyxFQUFFQSw4RUFBVW9DO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUssaUJBQVMsRUFBRXBDLDRGQUFoQjtBQUFBLGdDQUVJO0FBQUssbUJBQVMsRUFBRUEsdUZBQWhCO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFFQSx1RkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU8scUJBQVMsRUFBRUEsd0ZBQWxCO0FBQ0ksZ0JBQUksRUFBQyxNQURUO0FBRUksdUJBQVcsRUFBQyxjQUZoQjtBQUdJLG9CQUFRLEVBQUd5QyxDQUFELElBQU87QUFDYmpDLGNBQUFBLFdBQVcsQ0FBQ2lDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDSCxhQUxMO0FBTUksaUJBQUssRUFBRXBDLFFBTlg7QUFPSSxxQkFBUyxFQUFDLElBUGQ7QUFRSSxvQkFBUTtBQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBZ0JJO0FBQUssbUJBQVMsRUFBRVAsb0ZBQWhCO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFFQSxvRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU8scUJBQVMsRUFBRUEscUZBQWxCO0FBQ0ksZ0JBQUksRUFBQyxPQURUO0FBRUksdUJBQVcsRUFBQyxvQkFGaEI7QUFHSSxvQkFBUSxFQUFHeUMsQ0FBRCxJQUFPO0FBQ2IvQixjQUFBQSxZQUFZLENBQUMrQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0gsYUFMTDtBQU1JLGlCQUFLLEVBQUVsQyxTQU5YO0FBT0ksb0JBQVE7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkosZUE2Qkk7QUFBSyxtQkFBUyxFQUFFVCx1RkFBaEI7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUVBLHVGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBTyxxQkFBUyxFQUFFQSw0RkFBbEI7QUFDSSxnQkFBSSxFQUFDLFVBRFQ7QUFFSSx1QkFBVyxFQUFDLGNBRmhCO0FBR0ksb0JBQVEsRUFBR3lDLENBQUQsSUFBTztBQUNiN0IsY0FBQUEsV0FBVyxDQUFDNkIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNILGFBTEw7QUFNSSxpQkFBSyxFQUFFaEMsUUFOWDtBQU9JLHFCQUFTLEVBQUMsSUFQZDtBQVFJLG9CQUFRO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0JKLGVBMkNJO0FBQUssbUJBQVMsRUFBRVgsNkZBQWhCO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFFQSw4RkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU8scUJBQVMsRUFBRUEsNEZBQWxCO0FBQ0ksZ0JBQUksRUFBQyxVQURUO0FBRUksdUJBQVcsRUFBQyxxQkFGaEI7QUFHSSxvQkFBUSxFQUFHeUMsQ0FBRCxJQUFPO0FBQ2IzQixjQUFBQSxrQkFBa0IsQ0FBQzJCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQ0gsYUFMTDtBQU1JLGlCQUFLLEVBQUU5QixlQU5YO0FBT0kscUJBQVMsRUFBQyxJQVBkO0FBUUksb0JBQVE7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUE0REk7QUFBSSxhQUFLLEVBQUMsU0FBVjtBQUFvQixpQkFBUyxFQUFFYixvRkFBZ0JvRDtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNURKLGVBNkRJO0FBQUssaUJBQVMsRUFBRXBELDhGQUFoQjtBQUFBLGdDQUNJO0FBQVEsbUJBQVMsRUFBRUEsdUZBQW5CO0FBQXdDLGlCQUFPLEVBQUUsTUFBSztBQUFDZSxZQUFBQSxjQUFjO0FBQUksV0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQUEsaUNBQ0k7QUFBRyxxQkFBUyxFQUFFZixzRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0RKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlFSDs7Ozs7Ozs7OztBQ3pIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0QkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy91L3NpZ251cC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zdHlsZXMvQWNjb3VudC9TaWdudXAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9BY2NvdW50L1NpZ251cC5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG5cclxuICAgIGNvbnN0IFtVc2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbVXNlckVtYWlsLCBzZXRVc2VyRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbUGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW1JlcGVhdGVQYXNzd29yZCwgc2V0UmVwZWF0ZVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IFJlZ2lzdGVyU3VibWl0ID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoUGFzc3dvcmQgIT09IFJlcGVhdGVQYXNzd29yZCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJwYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTE9DQUxfQkFDS0VORF9VUkx9L3VzZXItYWNjb3VudC1tYW5hZ2VyL3JlZ2lzdGVyLXVzZXItYWNjb3VudGAsIHtVc2VyTmFtZTogVXNlck5hbWUsIFVzZXJFbWFpbDogVXNlckVtYWlsLCBQYXNzd29yZDpQYXNzd29yZH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG5cclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hbGVydChcImFuIGVycm9yIGhhcyBvY3VyZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLlVzZXJOYW1lRXhpc3Rzb3JFbWFpbEV4aXN0cyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmFsZXJ0KFwiYWNjb3VudCB3aXRoIHRoaXMgZW1haWwgb3IgdXNlcm5hbWUgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGluRmlmdGVlbk1pbnV0ZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDE1ICogNjAgKiAxMDAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KFwiVXNlclRva2VuXCIsIHJlcy5kYXRhLlVzZXJUb2tlbiwgIHtcclxuICAgICAgICAgICAgICAgIGV4cGlyZXM6IGluRmlmdGVlbk1pbnV0ZXNcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBDb29raWVzLnNldChcIlB1YmxpY1VzZXJUb2tlblwiLCByZXMuZGF0YS5QdWJsaWNVc2VyVG9rZW4sICB7XHJcbiAgICAgICAgICAgICAgICBleHBpcmVzOiBpbkZpZnRlZW5NaW51dGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxvZ2luQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuU2lnblVwVGV4dH0+Q3JlYXRlIGFuIGFjY291bnQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNvbG9yPVwiIzY3Njc2N1wiIGNsYXNzTmFtZT17c3R5bGVzLkJhcn0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2lnbnVwQ29udGVudEJvZHl9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlVzZXJOYW1lUGFydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5Vc2VyTmFtZVRleHR9PlVzZXJOYW1lOjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5Vc2VyTmFtZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIE5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlck5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1VzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FbWFpbFBhcnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuRW1haWxUZXh0fT5FLU1haWw6PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLkVtYWlsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJleGFtcGxAZXhhbXBsZS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlckVtYWlsKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtVc2VyRW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBhc3N3b3JkUGFydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5QYXNzd29yZFRleHR9PlBhc3N3b3JkOjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5QYXNzd29yZFRleHRJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgTmFtZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlJlcGVhdFBhc3N3b3JkUGFydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5SZWFwZWF0UGFzc3dvcmRUZXh0fT5SZXBlYXQgUGFzc3dvcmQ6PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLlBhc3N3b3JkVGV4dElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVhcGVhdCBQYXNzd29yZC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXBlYXRlUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1JlcGVhdGVQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxociBjb2xvcj1cIiM2NzY3NjdcIiBjbGFzc05hbWU9e3N0eWxlcy5Cb3R0b21CYXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvb3RlckNhcmRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuU2lnblVwQnV0dG9ufSBvbkNsaWNrPXsoKSA9PntSZWdpc3RlclN1Ym1pdCgpO319PlNpZ24gVXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3UvbG9naW5cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLlRvTG9naW5MaW5rfT5BbHJlYWR5IEhhdmUgYW4gYWNjb3VudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU2lnbnVwX2NvbnRhaW5lcl9fMkdTMThcIixcblx0XCJMb2dpbkNhcmRcIjogXCJTaWdudXBfTG9naW5DYXJkX18zWWxiX1wiLFxuXHRcIlNpZ25VcFRleHRcIjogXCJTaWdudXBfU2lnblVwVGV4dF9fMTdfSDhcIixcblx0XCJCYXJcIjogXCJTaWdudXBfQmFyX19YVUxHVFwiLFxuXHRcIlNpZ251cENvbnRlbnRCb2R5XCI6IFwiU2lnbnVwX1NpZ251cENvbnRlbnRCb2R5X18zc3E2blwiLFxuXHRcIlVzZXJOYW1lUGFydFwiOiBcIlNpZ251cF9Vc2VyTmFtZVBhcnRfXzFYbnlqXCIsXG5cdFwiVXNlck5hbWVUZXh0XCI6IFwiU2lnbnVwX1VzZXJOYW1lVGV4dF9fMmk3VjFcIixcblx0XCJVc2VyTmFtZUlucHV0XCI6IFwiU2lnbnVwX1VzZXJOYW1lSW5wdXRfX1N5SWZfXCIsXG5cdFwiRW1haWxQYXJ0XCI6IFwiU2lnbnVwX0VtYWlsUGFydF9fM21PUUVcIixcblx0XCJFbWFpbFRleHRcIjogXCJTaWdudXBfRW1haWxUZXh0X18yZjhlN1wiLFxuXHRcIkVtYWlsSW5wdXRcIjogXCJTaWdudXBfRW1haWxJbnB1dF9fMlFyMW9cIixcblx0XCJQYXNzd29yZFBhcnRcIjogXCJTaWdudXBfUGFzc3dvcmRQYXJ0X18xbEFCQVwiLFxuXHRcIlBhc3N3b3JkVGV4dFwiOiBcIlNpZ251cF9QYXNzd29yZFRleHRfXzFiMFQzXCIsXG5cdFwiUGFzc3dvcmRUZXh0SW5wdXRcIjogXCJTaWdudXBfUGFzc3dvcmRUZXh0SW5wdXRfX3lMV0FJXCIsXG5cdFwiUmVwZWF0UGFzc3dvcmRQYXJ0XCI6IFwiU2lnbnVwX1JlcGVhdFBhc3N3b3JkUGFydF9fS1JLcGFcIixcblx0XCJSZWFwZWF0UGFzc3dvcmRUZXh0XCI6IFwiU2lnbnVwX1JlYXBlYXRQYXNzd29yZFRleHRfXzI2d1hKXCIsXG5cdFwiQm90dG9tQmFyXCI6IFwiU2lnbnVwX0JvdHRvbUJhcl9fMVZ2N09cIixcblx0XCJGb290ZXJDYXJkQ29udGFpbmVyXCI6IFwiU2lnbnVwX0Zvb3RlckNhcmRDb250YWluZXJfX053Y2xUXCIsXG5cdFwiU2lnblVwQnV0dG9uXCI6IFwiU2lnbnVwX1NpZ25VcEJ1dHRvbl9fMjBCcWJcIixcblx0XCJUb0xvZ2luTGlua1wiOiBcIlNpZ251cF9Ub0xvZ2luTGlua19fM0FrdkxcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNvb2tpZXMiLCJMb2dpbiIsIlVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJVc2VyRW1haWwiLCJzZXRVc2VyRW1haWwiLCJQYXNzd29yZCIsInNldFBhc3N3b3JkIiwiUmVwZWF0ZVBhc3N3b3JkIiwic2V0UmVwZWF0ZVBhc3N3b3JkIiwiUmVnaXN0ZXJTdWJtaXQiLCJ3aW5kb3ciLCJhbGVydCIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsIlVzZXJOYW1lRXhpc3Rzb3JFbWFpbEV4aXN0cyIsImluRmlmdGVlbk1pbnV0ZXMiLCJEYXRlIiwiZ2V0VGltZSIsInNldCIsIlVzZXJUb2tlbiIsImV4cGlyZXMiLCJQdWJsaWNVc2VyVG9rZW4iLCJjb250YWluZXIiLCJMb2dpbkNhcmQiLCJTaWduVXBUZXh0IiwiQmFyIiwiU2lnbnVwQ29udGVudEJvZHkiLCJVc2VyTmFtZVBhcnQiLCJVc2VyTmFtZVRleHQiLCJVc2VyTmFtZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiRW1haWxQYXJ0IiwiRW1haWxUZXh0IiwiRW1haWxJbnB1dCIsIlBhc3N3b3JkUGFydCIsIlBhc3N3b3JkVGV4dCIsIlBhc3N3b3JkVGV4dElucHV0IiwiUmVwZWF0UGFzc3dvcmRQYXJ0IiwiUmVhcGVhdFBhc3N3b3JkVGV4dCIsIkJvdHRvbUJhciIsIkZvb3RlckNhcmRDb250YWluZXIiLCJTaWduVXBCdXR0b24iLCJUb0xvZ2luTGluayJdLCJzb3VyY2VSb290IjoiIn0=