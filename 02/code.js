import path from "path";
import { getRows } from "../utils/file.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const values = getRows(path.join(__dirname, "data.txt"));

// console.log(values);
