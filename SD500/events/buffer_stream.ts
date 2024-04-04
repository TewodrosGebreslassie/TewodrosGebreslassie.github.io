// import { readFileSync, writeFileSync } from "node:fs";
// import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

// const pathToFile = join(__dirname, "package.json");
// //const content = readFileSync(pathToFile); // Buffer
// const filecontent = readFile(pathToFile); // Buffer
// //console.log(content);
// console.log(filecontent.toString());
//const pathToFile = join(__dirname, "file.txt");
// writeFileSync(pathToFile, "Hello");
// await writeFile(pathToFile, "Hello");
// const filecontent = readFile(pathToFile);
// console.log(filecontent);

(async function () {
  const filecontent = readFile(pathToFile);
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
  process.nextTick(() => console.log("nexttick"));
})();

import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const pathToSource = join(__dirname, "file.txt");
const pathToDestination = join(__dirname, "file.txt.gz");
const readableStream = createReadStream(pathToSource);
const gzipStream = createGzip(); // Duplex Stream
const writableStream = createWriteStream(pathToDestination);
readableStream.pipe(gzipStream).pipe(writableStream);
