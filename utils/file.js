import fs from "fs";
export const getRows = (filePath) => {
  const readFile = fs.readFileSync;
  const input = readFile(filePath, "utf8");
  return input.split("\n");
};
