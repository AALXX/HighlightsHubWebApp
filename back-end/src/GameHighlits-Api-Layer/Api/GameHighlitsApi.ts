import http from 'http';
import express from 'express';

//* imports from route folder
import UserAccountRoutesControler from "../routes/UserAccountRoutes/UserAccountRoutesControler";
import VideosRoutesControler from "../routes/VideosManagerRoutes/VideoPlayesRoutesControler"
import ChanelRoutesControler from "../routes/ChanelRoutes/ChanelRoutesController"
import SearchingRoutesControler from "../routes/SearchingRoutes/SearchRoutesControler"

//*Configs
import config from "../config/config";
import logging from '../config/logging';
const NAMESPACE = "GameHighlitsApi";
const router = express();

//* Loging the request
router.use((req, res, next) => {

  // logging.info(NAMESPACE, `METHOD- [${req.method}], URL -[${req.url}], IP - [${req.socket.remoteAddress}]`);

  //   res.on("finish", () => {
  //    logging.info(NAMESPACE, `METHOD- [${req.method}], URL -[${req.url}], IP - [${req.socket.remoteAddress}], STATUS- [${res.statusCode}]`);
  // })
  next();
});

//* Parse the Request
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
router.use((req, res, next) => {

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