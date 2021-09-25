import express from "express";

import UserAccountService from "../../Services/UserAccountManager/UserAccountManager";

const router = express.Router();

router.get("/get-user-account-image/:PublicAccountToken", UserAccountService.GetAccountImage);
router.get("/get-owner-user-account-data/:AccountToken", UserAccountService.GetOwnerUserAccountData);

router.get("/get-user-folowed-chanels/:AccountToken", UserAccountService.GetUserFolowedChanels);

router.post("/login-user-account", UserAccountService.LoginUserAccount);
router.post("/register-user-account", UserAccountService.RegisterUserAccount);

router.post("/change-user-account-name", UserAccountService.ChangeAccountName);


export = router;