let choices = [
    "Rock",
    "Paper",
    "Scissors"
];

function play(userChoice){

    let randomIndex =
    Math.floor(Math.random() * 3);

    let computerChoice =
    choices[randomIndex];

    if(userChoice === computerChoice){

        document.getElementById("result").innerHTML =
        "Draw!<br>" +
        "Computer Chose: " +
        computerChoice;
    }

    else if(

        (userChoice === "Rock" &&
        computerChoice === "Scissors")

        ||

        (userChoice === "Paper" &&
        computerChoice === "Rock")

        ||

        (userChoice === "Scissors" &&
        computerChoice === "Paper")

    ){

        document.getElementById("result").innerHTML =
        "You Win!<br>" +
        "Computer Chose: " +
        computerChoice;
    }

    else{

        document.getElementById("result").innerHTML =
        "Computer Wins!<br>" +
        "Computer Chose: " +
        computerChoice;
    }
}