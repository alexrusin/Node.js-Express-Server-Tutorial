import express from "express";

export function auth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === "mysecretkey") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
