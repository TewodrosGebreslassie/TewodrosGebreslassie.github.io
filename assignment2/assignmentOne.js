//         var.innerHtml=""
// var.href="" =>to change the link
// var.src =>"" to change the img
// var.value= "" =>to change the textarea

function changeText() {
  const div = document.getElementById("divId");
  div.innerHTML = " new changed div";
  // inner html->and  text content

  // innerHTML=>

  const div2 = document.createElement("div");
  document.body.append(div2);
  div2.innerHTML = "new added or append div";

  let br = document.createElement();
}

function changepText() {
  const getp = document.getElementById("pId");

  getp.innerHTML = "New changed This is insid the paragraph.";
}

function changeInput() {
  const input1 = document.getElementById("inputId");
  input1.value = "new text";

  //   change paragraph content
  const para = document.querySelector("#par");

  para.innerHTML =
    "<b>This is the new and also differnt font size paragraph </b>";
}

function chTextareaValue() {
  const textarea = document.querySelector("#textareaId");
  textarea.value = "new comment";
}

function createEle() {
  const div3 = document.createElement("div");
  div3.innerHTML = "new Div 3 new created div";
  document.body.append(div3);

  //   let section = document.querySelector("section");

  //
  let section1 = document.getElementsByTagName("section")[1];
  section1.append(div3);

  //Or
}

function addContent() {
  //to get the element whech we want to push or to put the data
  let tolabelclass = document.querySelector(".label");

  //creating div element in main
  let creatDiv = document.createElement("div");
  creatDiv.innerHTML = "New ctreated div";

  //creating label element in main
  let creatLabel1 = document.createElement("label");
  creatLabel1.innerHTML = "java";

  //creating input element in main
  let myInput = document.createElement("input");
  myInput.setAttribute("type", "radio");

  let creatLabel2 = document.createElement("label");
  creatLabel2.innerHTML = "java Script";
  let myInput1 = document.createElement("input");
  myInput1.setAttribute("type", "checkbox");

  //or
  let myInput2 = document.createElement("input");
  myInput2.type = "checkbox";
  // divOne.append(myInput);
  // divOne.append(creatLabel1);
  //   divOne.append(creatDiv);
  //creating break or new line and whenever it calls it will creat element with in main
  let newlin1 = document.createElement("br");
  newlin1.innerHTML = "<br>";
  let newlin2 = document.createElement("br");
  newlin2.innerHTML = "<br>";
  let newlin3 = document.createElement("br");
  newlin3.innerHTML = "<br>";
  let newlin4 = document.createElement("br");
  newlin4.innerHTML = "<br>";

  let newlin5 = document.createElement("br");
  newlin5.innerHTML = "<br>";
  let newlin6 = document.createElement("br");
  newlin6.innerHTML = "<br>";
  let newlin7 = document.createElement("br");
  newlin7.innerHTML = "<br>";
  let newlin8 = document.createElement("br");
  newlin8.innerHTML = "<br>";
  let newlin9 = document.createElement("br");
  newlin9.innerHTML = "<br>";

  tolabelclass.append(
    newlin1,
    creatDiv,
    newlin2,
    creatLabel1,
    newlin3,
    myInput,
    creatLabel2,
    myInput1,
    newlin4,
    myInput2
  ); //all in one
}

//creat table
function createTable() {
  let tabelcontainer = document.querySelector(".tableDiv");

  const table = document.createElement("table");

  const row1 = document.createElement("tr");
  // const row2=document.createElement("tr");
  const rheader1 = document.createElement("th");
  rheader1.innerHTML = "row1 cole1 header";
  const rheader2 = document.createElement("th");
  rheader2.innerHTML = "row1 cole2 header";

  const row2 = document.createElement("tr");

  const colem1 = document.createElement("td");
  colem1.textContent = "this is row2 columen 1";
  const colem2 = document.createElement("td");
  colem2.textContent = "this is row2 columen 2";

  const row3 = document.createElement("tr");

  const colem21 = document.createElement("td");
  colem21.textContent = "this is row2 columen 21";
  const colem22 = document.createElement("td");
  colem22.textContent = "this is row2 columen 22";

  row1.append(rheader1, rheader2);
  row2.append(colem1, colem2);
  row3.append(colem21, colem22);

  table.append(row1, row2, row3);

  tabelcontainer.append(table);

  // tabelcontainer(row1(rheader1,rheader2),row2(colem1,colem2),row3(colem21,colem22))

  //teble, th, trow , tcol, tco ///t,tr,th tr td
}

///creating orderd list and unorderd list

function orUnorlist() {
  let listcontainer = document.getElementById("listCon");

  let oList = document.createElement("ol");

  let li1 = document.createElement("li");
  li1.innerHTML = "this is element 1";

  let li2 = document.createElement("li");
  li2.innerHTML = "this is element 2";

  let li3 = document.createElement("li");
  li3.innerHTML = "this is element 3";
  let li4 = document.createElement("li");
  li4.innerHTML = "this is element 4";

  oList.append(li1, li2, li3, li4);

  listcontainer.append(oList);

  /////ordered list

  let uList = document.createElement("ul");

  let liA = document.createElement("li");
  liA.innerHTML = "this is element A";

  let liB = document.createElement("li");
  liB.innerHTML = "this is element B";

  let liC = document.createElement("li");
  liC.innerHTML = "this is element C";
  let liD = document.createElement("li");
  liD.innerHTML = "this is element D";

  uList.append(liA, liB, liC, liD);

  listcontainer.append(uList);
}

function clearfun() {
  let divContainer = document.getElementById("input2_Id");

  let creatTeb = document.createElement("input");
  creatTeb.type = "text";

  divContainer.append(creatTeb);

  //   let clerconta = document.getElementById("inputT");
  //  clerconta.value = "";
  //   clerconta.append();
}
