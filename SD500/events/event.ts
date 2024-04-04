// class MSDStudent extends events {
//   constructor() {
//     super();
//   }
//   triggerGraduation(year: number) {
//     this.emit("g", year);
//   }
// }
// const student = new MSDStudent();
// student.on("g", (year) => console.log(`Congrats ${year} graduates.`));
// student.triggerGraduation(2024);

import { error } from "console";

class Sales extends events {
  constructor() {
    super();
  }
}

const myEmiter = new events();
myEmiter.on("newsale", () => {
  console.log("therr is a new sale");
});

myEmiter.on("newsale", (callback) => {
  console.log(`this is ${callback}`);
});

myEmiter.on("newsale", () => {
  console.log("Customer name: Jonas");
});
myEmiter.emit("newsale", 4);
const b = Buffer.alloc(8);

console.log(b.toString);
10;
try {
  // Code that may throw an error
  //throw new CustomError("Width error", "Width must not be 0");
} catch (error) {
  if (error instanceof CustomError) {
    console.log("A custom error occurred:", error.details);
    // Output: A custom error occurred: Width must not be 0
  } else {
    console.log("A generic error occurred:", error.message);
  }
}
