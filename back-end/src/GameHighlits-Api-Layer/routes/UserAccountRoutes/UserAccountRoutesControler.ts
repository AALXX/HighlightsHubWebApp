import express from "express";

import UserAccountService from "../../Services/UserAccountManager/UserAccountManager";
import { body } from 'express-validator'

const router = express.Router();

//*Get Owneraccount Infos
router.get("/get-user-account-image/:PublicAccountToken", UserAccountService.GetAccountImage);
router.get("/get-owner-user-account-data/:AccountToken", UserAccountService.GetOwnerUserAccountData);
router.get("/get-owner-user-account-videos/:AccountToken", UserAccountService.GetOwnerAccountVideos);
router.get("/get-user-folowed-chanels/:AccountToken", UserAccountService.GetUserFolowedChanels);

//*Get Non Woner Account Infos
router.get("/get-other-user-account-data/:PublicAccountToken", UserAccountService.GetUserAccountData);
router.get("/get-other-user-account-videos/:PublicAccountToken", UserAccountService.GetOtherAccountVideos);
router.get("/user-folow-acc-check/:PublicAccountToken/:PublicUserToken", UserAccountService.UserFolowAccCheck);
router.post("/user-folow-acc/", body('UserPublicToken').not().isEmpty().trim(), body('UserPrivateToken').not().isEmpty().trim(), body('ChanelToken').not().isEmpty().trim(), UserAccountService.FolowAcc);

//*Account auth
router.post("/login-user-account", body('UserEmail').isEmail(), body('Password').isLength({ min: 5 }).not().isEmpty().trim(), UserAccountService.LoginUserAccount);
router.post("/register-user-account", body('UserName').isLength({ max: 10 }).not().isEmpty().trim().escape(), body('UserEmail').isEmail(), body('Password').isLength({ min: 5 }).not().isEmpty().trim(), UserAccountService.RegisterUserAccount);

//*Account change/Updates
router.post("/change-user-account-name", body('newAccountName').isLength({ max: 10 }).not().isEmpty().trim().escape(), body('AccountToken').not().isEmpty().trim().escape(), UserAccountService.ChangeAccountName);
router.post("/change-user-account-email", body('newEmail').not().isEmpty().isEmail(), body('AccountToken').not().isEmpty().trim().escape(), UserAccountService.ChangeAccountEmail);
router.post("/change-user-account-visibility", body('newVisibility').not().isEmpty(), body('AccountToken').not().isEmpty().trim().escape(), UserAccountService.ChangeAccountvisibility);
router.post("/change-user-account-password/", body('NewPassword').isLength({ min: 4 }).not().isEmpty().trim(), body('AccountEmail').not().isEmpty().trim().escape(), UserAccountService.ChangeAccountPassword);
router.post("/change-user-account-description/", body('ChanelDescription').not().isEmpty().trim(), body('AccountToken').not().isEmpty().trim().escape(), UserAccountService.UpdateChanelDescription);

//*Account delete
router.post("/delete-user-account", body('AccountToken').not().isEmpty().trim().escape(), UserAccountService.DeleteAccount);

export = router;