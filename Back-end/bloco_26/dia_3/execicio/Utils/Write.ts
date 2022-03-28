import { writeFileSync } from "fs";
import Product from "../Interfaces/Product";

export default async function write(data: Product[]) {
  writeFileSync('./data.json', JSON.stringify(data));
}