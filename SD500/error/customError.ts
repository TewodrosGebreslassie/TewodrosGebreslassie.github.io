import fs from "node:fs";
// class CustomError extends Error {
//   constructor(message, public exampleError: string) {
//     super(message);
//     this.exampleError = exampleError;
//   }
//   getError() {
//     console.log(this.exampleError);
//   }
//   getOlderror() {
//     console.log(this.message);
//   }
// }

// const custemError = new CustomError("olderoor", "example");
// custemError.getError();
// custemError.getOlderror();

// const calculate = () => Promise.reject(console.log("Something went wrong"));
// const run = async () => {
//   try {
//     calculate();
//   } catch (error) {
//     if (error instanceof Error) console.log("An error occurred:", error);
//   }
// };
// calculate();

// async function namee() {
//   try {
// Throw an error
//     throw new Error("Something went wrong in namee");
//   } catch (error) {
//     {
//       if (error instanceof Error) {
//         // Output: An error occurred: Something went wrong
//         console.log("An error occurred:", error.message);
//       }
//       console.log(error);
//     }
//   }
// }

setTimeout(() => console.log(5), 1000);
setImmediate(() => console.log(1));
Promise.resolve().then(() => console.log(2)); //
process.nextTick(() => console.log(3)); //

let dir = "C:UsersabtedDesktop";
fs.readFile("C:UsersabtedDesktop\2ndclass-works and exercise", () => {
  console.log(4);
  setTimeout(() => console.log(5));
  setImmediate(() => console.log(6));
  process.nextTick(() => console.log(7));
});

console.log(8); //
