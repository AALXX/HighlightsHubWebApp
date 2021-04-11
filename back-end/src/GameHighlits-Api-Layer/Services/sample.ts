import { Request, Response, NextFunction } from "express";
import logging from "../../config/logging";

const NAMESPACE = 'sample service';

const samplehealthCkecn = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Sample health Check called");
  return res.status(200).json({
    message: "pog"
  })
};

export default{
  samplehealthCkecn
};