let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll(".reset-btn");

let turn0 = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach(khem);
function khem(box){
    box.addEventListner('click', ()=>{
        console.log("the button was clicked");
    });}

