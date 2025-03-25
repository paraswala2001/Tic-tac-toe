// 1.ways to print in javascript
// console.log('Hello World');
// alert("me");
// document.write("this is document write")

// 2.javascript console api
// console.log("hello world", 4 + 6, "another log");
// console.warning("this is warning")
// console.error("this is error")

//3. Javascript Variables
// what are variables? -  containers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// function num1(){
//     console.log("paras")
// }
// function num2(){
// console.log("wala")
// }
// function add(){
//     return num1()+num2()
// }
// add()

// let num = 44;
// function evenodd(){
//     if(num%2==0){
//         console.log("It is even number")
//     }
//     else{
//         console.log("It is odd number")
//     }
// }
// evenodd()

// let radius = 56;
// let pi =3.14;
// function perimeter(){
//     console.log(pi*radius*radius)
// }
// perimeter()


// function add (a,b){
//     console.log(a+b)
// }
// greet(3,5);

// let promise = new Promise((resolve,reject)=>{
// console.log("I am a promise");
// resolve("I am promise");
// })

// function getData(dataid){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success");
           
          
//         },2000);
//     });
// }

// (async function () {
//     console.log("getting data 1");
//     await getData(1);
//     console.log("getting data 2");
//     await getData(2);
//     console.log("getting data 3");
//     await getData(3);
   
    
// })();

// getData(1).then((res)=>{
//    return getData(2);
   
// }).then((res)=>{
//    return getData(3);

   
// }).then((res)=>{
//    console.log(res);
// })

// function asyncFunc(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          console.log("I am a promise");
//          resolve("success");

//       },4000);
       
      
//         // reject("error");
//     });
// };
// function asyncFunc2(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          console.log("I am a promise");
//          resolve("success");

//       },4000);
       
      
//         // reject("error");
//     });
// };

// console.log("fetching data1...");

//  asyncFunc().then((res)=>{
    
//     console.log("fetching data2...");
//     asyncFunc2().then(()=>{
      
//     });

//  });
 
//  promise.catch((error)=>{
//     console.log("rejected",error);
//  });

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







