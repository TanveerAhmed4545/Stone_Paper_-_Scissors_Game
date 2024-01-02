let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorepara =document.querySelector("#user_score");
const compScorepara =document.querySelector("#comp_score");


const showWinner = (userWin,userChoice,compChoice) =>{
       
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore ;
        console.log("You Lose!");
        msg.innerText = `You Lost . ${userChoice} beats Your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const drawGame = () =>{
    console.log("Game is Draw");
    msg.innerText = "Game was Draw . Play again.";
    msg.style.backgroundColor = "#292030";
}

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const playGame = (userChoice) =>{
      console.log(`User = ${userChoice}`)
      const compChoice = genComputerChoice();
      console.log(`compUser = ${compChoice}`);

      if(userChoice === compChoice){
        //drawGame
        drawGame();
      }else{
        let userWin = true;
        if(userChoice === "rock"){
            // "paper","scissors" 
            userWin = compChoice === "paper" ? false : true ;

        } else if(userChoice === "paper"){
            // "rock","scissors"
            userWin = compChoice === "scissors" ? false : true ;

        }else{
            // "rock","paper"
            userWin = compChoice === "rock" ? false : true ;
        }

        showWinner(userWin,userChoice,compChoice);
      }



}

choices.forEach((choice)=>{
    
    choice.addEventListener("click" , ()=>{
        // console.log("Choice is clicked");
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

})