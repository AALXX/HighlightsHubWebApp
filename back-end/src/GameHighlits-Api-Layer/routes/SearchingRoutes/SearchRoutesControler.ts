import express from "express";

import SearchEngine from "../../Services/SearchingManager/SearchVideo"

const router = express.Router();


//*Search Video
router.post("/video/", SearchEngine.SearchVideoByName);


export = router;