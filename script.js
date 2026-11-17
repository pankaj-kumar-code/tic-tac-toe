let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#win");

let turnO=true;
let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetgame=function(){
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("msgcontainer");
}

const enableBoxes=function(){
    for(box of boxes){
       box.disabled=false;
       box.innerText="";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",function(){
    if(turnO===true){
        box.innerText="O";
        box.style.color="blue";
        turnO=false;
    }
    else{
        box.innerText="X";
        box.style.color="red";
        turnO=true;
    }
    box.disabled=true;
    checkwinner();
});
});

const disableBoxes=function(){
    for(box of boxes){
        box.disabled=true;
    }
}


let showwinner=function(pos1){
    msg.innerText=`congratulation,winner is ${pos1}`;
    msgcontainer.classList.remove("msgcontainer");
    disableBoxes();
}

let checkwinner=function(){
    for(pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showwinner(pos1);
            }
        }
    }
}

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
