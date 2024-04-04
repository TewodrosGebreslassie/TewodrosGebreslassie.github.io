import path, { join } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import { readFileSync, writeFileSync } from "node:fs";
import events from "node:events";
import { json } from "stream/consumers";
import { totalmem, cpus } from "node:os";

type ObjType = { id: number; fname: string; lname: string };

const pathToFile = join(__dirname, "teddyFile.json");

class Name extends events {
  data: ObjType[] = [];
  async read() {
    this.data = JSON.parse((await readFile(pathToFile)).toString());

    //console.log(this.data);
  }
  async persiste() {
    await writeFile(pathToFile, JSON.stringify(this.data));
    this.emit("dataWriten", "saved sucess");
  }

  async add(id: number, fname: string, lname: string) {
    await this.read();
    this.data.push({ id, fname, lname });
    console.log("addddd" + this.data);
    this.persiste();
  }
  async delet(id: number) {
    await this.read();
    this.data.filter((obj) => obj.id !== id);
    this.persiste();
  }
}

// const name = new Name();
// name.on("dataWriten", (mss) => {
//   console.log(mss);
// });
// name.add(4, "mek", "kal");

// console.log(name.data);

function checkSystem(): Promise<string> {
  return new Promise<string>((res, rej) => {
    const proC = cpus().length;
    const osmemo = totalmem() / 1024 / 1024 / 1024;

    if (osmemo >= 8 && proC >= 4) {
      return res("System is checked successfully");
    }
    if (osmemo < 4) {
      return rej("You need at least 4 GB of RAM");
    }
    if (proC < 4) {
      return rej("Processor must have at least 4 cores");
    }
  });
}

checkSystem()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

class CustemError extends Error {
  constructor(mss: string, public log: string) {
    super(mss);
  }
}
