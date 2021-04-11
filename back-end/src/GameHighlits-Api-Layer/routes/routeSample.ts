import express from "express";
import sapleCheck from "../Services/sample"

const router = express.Router();

router.get("/", sapleCheck.samplehealthCkecn);

export = router;