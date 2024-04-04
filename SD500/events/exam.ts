import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import event from "node:events";

class Name extends event {
  pathtoFile = join(__dirname, "data.json");
  readfile = readFileSync(this.pathtoFile);

  constructor() {
    super();
  }
}
