import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.json({ success: true });
});

app.get("/apps/github/callback", (req, res) => {
  res.json({ redirect_uri: "https://google.com" });
});

app.post("/apps/github/callback", (req, res) => {
  res.json({ received: true });
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
