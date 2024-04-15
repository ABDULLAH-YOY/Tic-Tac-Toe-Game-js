// let user;
// document.getElementById("submit").onclick = function(){
//     user =document.getElementById("input").value;
//     document.getElementById("name").textContent= `Name is ${user}`
// }

// for (let a=1; a<=500;a++){
//     console.log("Abdullah");
// }
// console.log("Loop end");


// let a =1;
// while(a<=20){
//     console.log(a);
//     a++
// }


// let gameNum = 10;
// let guessNum = prompt("Guess the Number")
// while (gameNum != guessNum ){
//     guessNum = prompt("Number is wrong try again!")
// }
// console.log("Number is correct");guessNum

// let str ="abdullah";
// let newStr = str.toUpperCase();
// console.log(newStr);

// let str ="ABDULLAH";
// let newStr = str.toLowerCase();
// console.log(newStr);

// let str="            Abdullah Al Nirob  "
// console.log(str.trim());

// let fullName = prompt("Inter full name")
// let userName = "@"+fullName +fullName.length
// console.log(userName);

// let submit = document.getElementById("submit")
// submit.onclick=()=>{
//     console.log("clicked");
// }

// let submit = document.getElementById("submit")
// submit.onmouseover=()=>{
//     console.log("clicked");
// }

// let submit = document.getElementById("submit")
// submit.addEventListener("click" ,()=>{

//     console.log("clicked");
// })

// let modeBtn = document.getElementById("submit");
// let body = document.querySelector("body");
// let currmode ="light";

// modeBtn.addEventListener("click",()=>{
//     if(currmode==="light"){
//         currmode ="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currmode ="light"
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currmode);
// })

//tic tac toe
let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll("#reset_btn");
let gameWinner= document.getElementById("winner");


// reset.addEventListener("click",()=>{
//     location.reload();
// })

let turnO =true; //playerO, playerX
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
       
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disable= true;

        checkWin();
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disable=true;
        alert("click to Reset button")
    }
}

const showWinner = (Winner)=>{
    gameWinner.textContent=`Winner is: ${Winner}`
}
const checkWin = ()=>{
    for(pattern of winpattern){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner");
                showWinner(pos1val);
            }
        }
    }
}
