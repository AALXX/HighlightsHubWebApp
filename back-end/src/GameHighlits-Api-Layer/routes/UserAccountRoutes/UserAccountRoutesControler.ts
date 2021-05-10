import express from "express";

import UserAccountService from "../../Services/UserAccountManager/UserAccountManager";

const router = express.Router();

router.get("/get-user-account-data/:AccountToken", UserAccountService.GetUserAccountData);
router.post("/login-user-account", UserAccountService.LoginUserAccount);
router.post("/register-user-account", UserAccountService.RegisterUserAccount);
router.post("/change-user-account", UserAccountService.ChangeAccountSettings);


export = router;