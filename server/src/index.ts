import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Express server!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
