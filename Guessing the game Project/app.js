let range =prompt("Enter the  Number from 0 to the maximum number till you want to guess");
let num = Math.floor(Math.random()* range) + 1 ;
let guess = prompt("Enter the Number you guess");

while(true){
    if (guess == "quit"){
        alert("You Quit");
        break;
    }
    if (guess == num){
        console.log("You Won");
        break;
    }
    else if(guess > num) {
        alert("You Entered Higher number");
        guess = prompt("wrong guess,Try Again");
    }
    else if( guess < num) {
        alert("You Entered Lower Number");
        guess = prompt("wrong guess,Try Again");
    }
    
}