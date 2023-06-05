import express, { Request, Response, Router } from "express";

const route: Router = express.Router();

route.get("/users", (req: Request, res: Response) => {
  res.send({
    message: "funcionando"
  })
});

