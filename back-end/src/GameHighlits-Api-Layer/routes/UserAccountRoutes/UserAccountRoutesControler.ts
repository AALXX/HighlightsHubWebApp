import express from "express";

import UserAccountService from "../../Services/UserAccountManager/UserAccountManager";
import { body, validationResult } from 'express-validator'

const router = express.Router();

router.get("/get-user-account-image/:PublicAccountToken", UserAccountService.GetAccountImage);
router.get("/get-owner-user-account-data/:AccountToken", UserAccountService.GetOwnerUserAccountData);
router.get("/get-owner-user-account-videos/:AccountToken", UserAccountService.GetAccountVideos);

router.get("/get-user-folowed-chanels/:AccountToken", UserAccountService.GetUserFolowedChanels);

router.post("/login-user-account", body('UserEmail').isEmail(), body('Password').isLength({ min: 4 }).not().isEmpty().trim(), UserAccountService.LoginUserAccount);
router.post("/register-user-account", body('UserName').isLength({ max: 10 }).not().isEmpty().trim().escape(), body('UserEmail').isEmail(), body('Password').isLength({ min: 5 }).not().isEmpty().trim(),UserAccountService.RegisterUserAccount);

router.post("/change-user-account-name", UserAccountService.ChangeAccountName);


export = router;