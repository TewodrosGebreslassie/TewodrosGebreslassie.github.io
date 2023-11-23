/// call back
//when you nest a function inside another function as an argument, that is a called a callback.

function one() {
  console.log("step one");
}

function two() {
  console.log("step two");
}

two(); //steptwo
one(); //step one
//lets make conection fun2 inside fun one using arrgument

function onee(call_two) {
  call_two();
  console.log("step complite, call twoo");
}

function twoo() {
  console.log("step 2 call back");
}
onee(twoo);

//********************************************************************************************* */
let order = (call_production) => {
  console.log(" order placed, please call production");
  call_production();
};

let production = () => {
  console.log(" Order resived, starting production");
};

order(production);

let;
