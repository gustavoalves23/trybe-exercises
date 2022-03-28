import { readFileSync } from "fs";
import Product from "../Interfaces/Product";


export default async function read():Promise<Product[]> {
  const Products:Product[] = JSON.parse(readFileSync('./data.json', 'utf-8'));
  return Products;
}