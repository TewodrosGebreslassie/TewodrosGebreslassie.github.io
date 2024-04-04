import { readFile, writeFile } from "node:fs/promises";
import { readFileSync, writeFileSync } from "node:fs";
import path, { join } from "node:path";
import events from "node:events";

// const jsonData = [
//   { id: 1, name: "Asaad Saad" },
//   { id: 2, name: "Theo Saad" },
// ];
type Data = { id: number; name: string };

const pathToFIle = join(__dirname, "mercy_File.json");

// writeFile(pathToFIle, JSON.stringify(jsonData));
class Name extends events {
  data: Data[] = JSON.parse(readFileSync(pathToFIle).toString());

  constructor() {
    super();
  }

  persist() {
    writeFileSync(pathToFIle, JSON.stringify(this.data));
    this.emit("data.save");
  }

  addName(id: number, name: string) {
    this.data.push({ id: id, name: name });
    this.persist();
  }

  getNames(): string[] {
    return this.data.map((obj) => obj.name);
  }

  getNameById(id: number): string | null {
    const obj = this.data.find((file) => file.id === id);
    if (obj) {
      return obj.name;
    } else return null;
  }

  deleteNameById(id: number) {
    return this.data.filter((obj) => obj.id !== id);
    this.persist();
  }
}

const name = new Name();
name.on("data.save", () => {
  console.log("success");
});
name.persist();

//console.log(name.getNames());
//name.addName(1, "namam");
//name.addName(2, "undjdjdjd");
console.log(name.getNameById(1));
name.deleteNameById(2);

import {cpus, totalmem} from 'node:os'


function core(){
    return new Promise((res,rej)=>{

      const cores = cpus.length;
      const totalMemory =

      
    })
}


