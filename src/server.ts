import { Request, Response } from "express";
import userRoutes from "./routes/users";

import express from "express";
const app = express();
app.use(express.json());
app.use(userRoutes);

const PORTA = "3333"

const user = {
  nome: "Ricardo",
  idade: 25
}

app.get("/", (req: Request, res: Response) => {
  return res.json(user)
});


app.listen("3333", () => {
  console.log(`Servidor iniciado no http://localhost:${PORTA}`)
});
