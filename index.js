

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgcontainer");
let Para = document.querySelector("#msg");
let turnO = true;
let click_count =0;


const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    turnO = true;
    enablebtn();
    msgContainer.classList.add("hide");
}

 

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        
        
        if(turnO){
            box.innerText= "O";
            box.style.color = "green"
            turnO = false;
        }else{
            box.innerText= "X"
            box.style.color = "black"
            turnO = true;
        }
        box.disabled = true;
        click_count++;

        let isWinner = checkWinner();
        if(click_count===9 && !isWinner){
            Gamedraw();

        }
    })
})
const Gamedraw = ()=>{
    msg.innerText="game was draw";
    msgContainer.classList.remove("hide");
    disablebtn();
}
const disablebtn = ()=>{
    for(box of boxes){
        box.disabled = true;

    }
    
}
const enablebtn = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
    
}
const showWinner =(winner)=>{
    msg.innerText = `congratulations , winner is ${winner}`
    msgContainer.classList.remove("hide");
    disablebtn();
    
}

const checkWinner =()=>{
    for( let pattern of winpatterns){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        if(pos1val !=""&&pos2val !="" &&pos3val !=""){
            if(pos1val===pos2val&&pos2val===pos3val){
            
            showWinner(pos1val);
            }
          
        }
        
        
        
    }
}

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);







