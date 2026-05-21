let gamenum = 25;
let usernum = prompt("Guess the game number : ");

while(usernum != gamenum){
    usernum = prompt("You Entered  wrong number. Guess again:");
}

console.log("congratulations, you entered the right number");