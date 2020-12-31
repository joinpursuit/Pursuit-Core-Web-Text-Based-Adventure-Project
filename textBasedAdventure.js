const readline = require('readline-sync')


const startGame = () => {
if(readline.keyInYN("Do you want to play a game?")){
    playGame()
}else{
    leaveGame1()
}
};


const leaveGame1 = () => {
    console.log("You were a bad candidate anyway. Goodbye!");
    process.exit()
};

const leaveGame2 = () => {
    console.log('Come back when you\'re 18. See ya later!');
    process.exit()
};

const playGame = () => {
let nameInput = readline.question("What is your name? \n")
console.log(`Hello ${nameInput}! Welcome to my experiment muahaha!.....I mean...game. \n`);

let ageInput = readline.question('How old are you?\n')
    if(ageInput < 18){
        console.log("Oh no, you're just a baby! Enjoy your life!");
        leaveGame2()
    }else{
        console.log("Hmmm, you're the perfect candidate for my experi- .....game. \n");
    }
};

function howToPlay(){
console.log('Here is how you play:');
console.log('Type "r" or "right" to move in that direction.');
console.log('Type "l" or "left" to move in that direction.');
console.log('Type "u" or "up" to move in that direction.');
console.log('Type "d" or "down" to move in that direction.');
console.log('Type "g" or "grab" to grab an item.');
console.log('Type "s" or "swing" to swing your arm');
console.log('Type "l" or "look" to see your surroundings. \n');
console.log('type "h" or "help" anytime for instructions.');
};


const story = () => {
 if(readline.keyInYN('Are you ready? \n')){
    console.log('You wake up alone in a room lit with red lighting');
    console.log('As you move to look around, you notice pain in your body');
    console.log('You hear beeping noises all around you');
    console.log('You look down at your body and see different wires attached to it');
    console.log('One wire for each organ');
    console.log('HEART, LUNGS, KIDNEYS. \n');
    console.log('You must get your organs so you can go home');
    console.log('The building you\'re in only has electricity for a few hours \n');
    console.log('There are 2 doors infront of you');
    console.log('1 is an exit that leads you outside, the other leads to your victory.....');
    console.log('The nearest hospital is miles away...');
}else{
     leaveGame1()
 }
};

startGame();
howToPlay();
story();

// if user types 'help', run the howToPlay function let input = help maybe?
//  