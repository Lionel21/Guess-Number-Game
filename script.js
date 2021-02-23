'use strict';

/* DEFINITION DU CHIFFRE SECRET */
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener('click',() => {
    const user_guess = Number(document.querySelector('.guess').value);

    if (!user_guess) {
        displayMessage("No number");
    } else if (user_guess === secretNumber) {
        displayMessage("✅ You found the right number!");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    } else if (user_guess !== secretNumber) {
        if (score > 1) {
            displayMessage(user_guess > secretNumber ? "📈 Your number is too high!" : "📉 Your number is too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("💥 You lost the game!");
            document.querySelector(".score").textContent = "0";
        }
    }
});

/* REINITIALISATION */
document.querySelector(".again").addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = '?';
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
});
