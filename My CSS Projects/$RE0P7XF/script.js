let userscore=0; 
let compscore=0;

const options=document.querySelectorAll(".option");
const msg=document.querySelector("#msg");

const userscorepara= document.querySelector("#userscore");
const compscorepara= document.querySelector("#compscore");


const gencompoption= () => {
    const options=["rock","paper","scissors"];  
    const randidx=Math.floor(Math.random()*3);
   return options[randidx];
}

const drawGame=() =>{
    console.log("game was draw.");
    msg.innerText="Draw, Play Again";
    msg.style.backgroundColor="black"
    msg.style.color="white"
};

const showWinner=(userWin, useroption,compoption) => {
  if(userWin){
    userscore++;
    userscorepara.innerText=userscore;
    console.log ("you won!") ;
    msg.innerText=`You won Your ${useroption} beats ${compoption}`;
    msg.style.backgroundColor="green"

  }else{
    compscore++;
    compscorepara.innerText=compscore;
    console.log("you lost");
   msg.innerText=`You lost. ${compoption} beats your ${useroption}`;
   msg.style.backgroundColor="red";
  }
}


 const playGame= (useroption) => {
 console.log("user option=",useroption);
 const compoption=gencompoption();
 console.log("comp option=",compoption);


 if(useroption===compoption){
    drawGame();
 } else{
    let userWin=true;
    if(useroption==="rock"){
        userWin=compoption==="paper"? false:true;
    } else if(useroption==="paper"){
        userWin=compoption=== "scissors"? false:true;
    } else{
        userWin=compoption==="rock"? false:true;
    }
  showWinner(userWin,useroption,compoption)
 }
}


options.forEach((Option) => {
    // console.log(Option);
    Option.addEventListener("click",() =>{
        const useroption= Option.getAttribute("id");
  
  playGame(useroption)
    });
});