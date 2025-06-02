import { Router, Request, Response } from "express";
import { Item } from "../types/Item";
import { getAllItems } from "../services/itemService";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = getAllItems();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
