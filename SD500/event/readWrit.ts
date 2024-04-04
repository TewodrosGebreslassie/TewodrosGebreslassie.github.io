import path, { join } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import { readFileSync, writeFileSync } from "node:fs";
import events from "node:events";
import { json } from "stream/consumers";

const obj = [
  { id: 1, name: "teddy", lname: "ab" },
  { id: 2, fname: "bigint", lname: "geb" },
];
type ObjType = { id: number; fname: string; lname: string };

const pathToFile = join(__dirname, "teddyFile.json");
writeFileSync(pathToFile, JSON.stringify(obj));
//const data = console.log(JSON.parse(readFileSync(pathToFile).toString()));

class Names extends events {
  data: ObjType = JSON.parse(readFileSync(pathToFile).toString());
  constructor() {
    super();
  }
  persist(num: string[]) {
    writeFileSync(pathToFile, JSON.stringify(this.data));
    this.emit("data.json", num);
  }
}

const name = new Names();
// console.log(name.data);
// name.persist();

name.on("data.json", (y: string[]) => {
  let i = 0;
  y.forEach((e) => {
    setTimeout(() => {
      console.log(e);
    }, 1000 * i);
    i++;
  });
});
name.persist(["tedd", "bin", "mer", "kjdhjahs", "yooo"]);
