import { Router, Request, Response } from "express";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the Items API!" });
});

export default router;
