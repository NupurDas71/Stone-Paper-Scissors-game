let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice img"); // Select the img elements
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const opt = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return opt[randomIdx];
}

const drawgame = () => {
    msg.innerText = "Game was a draw, play again";
    msg.style.backgroundColor = "#081b31";
}

const playgame = (userchoice) => {
    const compchoice = genCompchoice();
    console.log("userchoice =", userchoice);
    console.log("compchoice =", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userWin;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
}

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});
