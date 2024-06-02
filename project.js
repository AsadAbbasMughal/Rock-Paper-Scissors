let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg")
const userScorePara = document.querySelector(".user-score")
const compScorePara= document.querySelector(".comp-score")

 
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("Winner");
        msg.innerText = "You Win!"
        msg.style.background = "green"
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("Losser");
        msg.innerText = "You Loss"
        msg.style.background = "red"
    }
}

const drawGame = () => {
    console.log("Draw Game");
    msg.innerText = "Game was Draw! Play again."
}

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame =(userChoice) =>{
    console.log("User Choice =", userChoice );
    const compChoice = genCompChoice();
    console.log("Computer Choice", compChoice);

    if( userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor"?false:true;
        }else{
            userWin =compChoice === "rock"?false:true;
        }
        showWinner(userWin);
    }


}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame( userChoice )
    });
}

);