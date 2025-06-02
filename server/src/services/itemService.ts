// src/services/itemsService.ts
import { v4 as uuidv4 } from "uuid";
import { Item } from "../types/Item";

let items: Item[] = [];

export function getAllItems(): Item[] {
  return items;
}

