import { PrismaClient } from "@prisma/client";
import express, { Request, Response, Router } from "express";

export const router: Router = express.Router();
export default router;

const Prisma = new PrismaClient();

router.get("/users", (req: Request, res: Response) => {
  const users = Prisma.user.findMany();

  res.send(users)
});

