import http from 'http';
import express, { NextFunction } from 'express';

//* imports from route folder
import UserAccountRoutesControler from "../routes/UserAccountRoutes/UserAccountRoutesControler";
import VideosRoutesControler from "../routes/VideosManagerRoutes/VideoPlayesRoutesControler"
import SearchingRoutesControler from "../routes/SearchingRoutes/SearchRoutesControler"

//*Configs
import config from "../config/config";
import logging from '../config/logging';
const NAMESPACE = "GameHighlitsApi";
const router = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

//* Rules of Api
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method == "OPTIONS") {
    res.header("Acces-Control-Allow-Methods", "GET POST PATCH DELETE PUT");
    return res.status(200).json({});
  }
  next();
})

//* Routes
router.use("/api/user-account-manager/", UserAccountRoutesControler);

router.use("/api/videos-manager/", VideosRoutesControler);

router.use("/api/search-manager/", SearchingRoutesControler);


//* Error Handleling
router.use((req:any, res:any, next:NextFunction) => {

  const error = new Error('not found');

  return res.status(404).json({
    message: error.message,
  });
});

//* Create The Api
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => {
  logging.info(NAMESPACE, `Api runing on: ${config.server.hostname}:${config.server.port}`);
})