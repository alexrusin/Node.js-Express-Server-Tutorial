import { Request, Response, NextFunction } from "express";
import { getErrorMessage } from "../utils";

export default function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent) {
    next(error);
    return;
  }

  res.status(500).json({
    error: {
      message: getErrorMessage(error),
    },
  });

  next(error);
}
