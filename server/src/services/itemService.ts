// src/services/itemsService.ts
import { v4 as uuidv4 } from "uuid";
import { Item } from "../types/item";

let items: Item[] = [];

export function getAllItems(): Item[] {
  return items;
}

export function addItem(name: string): Item {
  const newItem: Item = { id: uuidv4(), name };
  items.push(newItem);
  return newItem;
}
