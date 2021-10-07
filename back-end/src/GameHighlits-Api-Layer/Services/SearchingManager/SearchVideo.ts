import { Request, Response, NextFunction } from 'express';

import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";

const NAMESPACE = 'VideoPlayerManagerService';

const SearchVideoByName = (req: Request, res: Response, next: NextFunction) => {

  let SplitedInput = req.body.input.toLowerCase().replace(/\s+/g, ' ').trim().split(" ");

  console.log(SplitedInput)

  const GetVideoNameAndTokenQuerryStting = "SELECT VideoName, VideoToken FROM videos LIMIT 10"

  let VideosNameArray: any[] = [];


  Connect()
    .then(connection => {
      Query(connection, GetVideoNameAndTokenQuerryStting).then(results => {

        //* Parse rows from database
        let data = JSON.parse(JSON.stringify(results));
        for (let Video in data.VideoName) {
          console.log(Video)
        }
        
        for (let Word of SplitedInput) {
          
          
          console.log(Word)
          
        }

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(500).json({
          error: true,
          message: "Error"
        });
      }).finally(() => {
        connection.end();
      });
    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return res.status(500).json({
        error: true,
        message: "Error"
      });
    });

};

export default {
  SearchVideoByName
};