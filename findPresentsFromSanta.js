const readline = require('readline-sync')

console.log("Beep Beep Beep! The sound of the neighborhood snow removal truck woke you up. Glancing outside your window, another 8 inches of snow has fallen since last night.")
console.log ("The hill behind your backyard looks very much like Narnia, but a look-alike Santa's sleigh tracks caught your attention.\n")

const exitGame = () => {
    console.log(`Goodbye!`)
    process.exit()
}


const nameInput = readline.question("Please enter your name: \n")
const ageInput = readline.question ("Please enter your age: [Input must be a number] \n")

const newGame = () => {    
    console.log("\x1b[33m%s\x1b[0m", "Hello, good morning " + `${nameInput}` + "!~")
    console.log("\x1b[33m%s\x1b[0m", "Today is December 25th, Christmas day.")
    console.log("\x1b[33m%s\x1b[0m", "I have left a present for you last night, it is up to you to find where it is hidden!")
    console.log("\x1b[33m%s\x1b[0m", "*Whispering* You should start low! *Whispering*")
    console.log("\x1b[33m%s\x1b[0m", "With love, Santa! Ho! Ho! Ho!~\n")
    let answerPresentHunt = readline.question("Would you like to go on a present hunt? [Yes(Y) or No(N)]\n")
    if (answerPresentHunt.toLowerCase() === "yes" || answerPresentHunt.toLowerCase() === "y") {
        console.log("\nWELCOME TO THE GAME!~ Which room would you like to check out first?")
        enterRoom()
    } else {
        exitGame ()
    }
}


const playAgain = () => {
    let answerPlayAgain = readline.question("Would you like to play again?\n")
    answerPlayAgain.toLowerCase() === "yes" || answerPlayAgain.toLowerCase() === "y" ? newGame() : exitGame()
}

const lookInBedroomAgain = () => {
    let lookOrNot = readline.question (`${nameInput}. Would you like to look in the bedroom again?\n`)
    switch (lookOrNot.toLowerCase()) {
        case "look again":
            console.log("\nLooking in bedroom again, nothing but dirty socks... Maybe you should head down to the basement and wash them.");
        break;
        case "no need":
            enterRoom()
            break; 
        default:
            console.log ("\nPlease enter 'Look Again' or 'No Need'")
            lookInBedroomAgain()
    } 
}

const livingRoomTemp = () => {
    let userInputTemp = readline.question(`${nameInput}. What temperature do you see on thermostat? [Input has to be a number]\n`)
    if (userInputTemp >= 32) {
        console.log("\nThe temp is warm enough for you to take a peek outside the front porch in your PJs! You slowly open the front door and CONGRATS!")
        console.log("\x1b[33m%s\x1b[0m","Present #1 that Santa left is right infront of your eyes! Good job!~\n")
    } else if (userInputTemp < 32){
        console.log("It's too cold outside, even with jacket and gloves, you'll freeze! Staying indoor is a much better option.\n")
        enterRoom()
    } else {
        console.log("Please enter a number!");
    }
    playAgain()
}




const searchInKitchen = () => {
    let openCabinet = readline.question(`${nameInput}.` + "The cabinets looks like they been opened, would you like to check out the top or bottom cabinets?\n")
    switch (openCabinet.toLowerCase()) {
        case "top":
            console.log("Opening the top cabinets, there are a few pots and pans, but you are too short to look behind it.\n")
            break;
        case "bottom":
            console.log("Opening the bottom cabinets, there are only cleaning supplies in here.")
        break; 
        default:
            console.log("Enter 'top' or 'bottom'.\n")
    }
    let lookInSink = readline.question (`${nameInput}` + "Would you like to look in the sink? [Enter Yes(Y) or No(N)]")
    if (lookInSink.toLowerCase() === "yes" || lookInSink.toLowerCase() === "y") {
        console.log("\x1b[33m%s\x1b[0m", "Check outside if the weather is not too cold :) -XX9XX2-")
        playAgain()
    } else {
        enterRoom()
    }
} 




const lightInBasement = () => {
    let userInputOnOff = readline.question(`${nameInput}. Would you like to turn on the lights?\n`)
    switch (userInputOnOff.toLowerCase()){
        case "turn on":
            console.log("\nYou reach and flip light switch. The fluorescent light flickers for a few seconds before turning on. You see nothing but spider webs from here.");
            break;
        case "keep off":
            console.log("Guess you aren't ready to face your fears...\n");
            enterRoom()
            break;
        default: 
        console.log ("\nPlease enter: 'turn on' or 'keep off'");
        lightInBasement()
    }
    let userInputGoDown = readline.question(`${nameInput}. Do you want to walk down the stairs and take a look? [Enter yes(y) or no(n)]\n`) 
    if(userInputGoDown.toLowerCase() === "yes" || userInputGoDown.toLowerCase() === "y") {
        console.log("\nHalfway down the dusty stairs, you see something sparkling to your left, and walk towards it...")
        console.log("You pick up the star you could not find for your Christmas tree. Oh well, you know where it is now for next Christmas.")
        console.log("A piece of paper slipped out...")
        console.log("\x1b[33m%s\x1b[0m", 'Check the closet :) -X0XX1X-\n')
    } else if (userInputGoDown.toLowerCase() === "no" || userInputGoDown.toLowerCase() === "n"){
        console.log("\nYea, I agree. Way too dusty and scary to keep going when you're alone.")
    } else {
        console.log("Please enter yes(n) or no(n).\n")
        lightInBasement(userInputGoDown)
    }
    enterRoom()
}


const snackInCloset = () => {
    let eatOrNot = readline.question (`${nameInput}. You look pretty down, shall we eat a snack before we continue the search? (Input must be lowercase)\n`)
    if (eatOrNot === "yes" || eatOrNot === "y") {
        console.log("\nYou picked up a bag of gummy bears, just the right amount of sweet to keep you going.")
        console.log("As you reach for the last gummy, you pull out a piece of paper.")
        console.log("\x1b[33m%s\x1b[0m",'You forgot to wash the dishes last night :) -8XX3XX- \n')
        enterRoom() 
    } else if (eatOrNot === "no" || eatOrNot === "n") {
        console.log("\nYou decided to keep it going, snacks will not deter you from the mission!\n")
    } else {
        console.log("\nPlease enter either yes(y) or no(n)")
        snackInCloset()
    }
}


const enterRoom = () => {
    let pickRoom = readline.question("Please enter a room: [Input has to be lowercase] \n")
    let room = ["bedroom", "living room", "kitchen", "basement", "closet"]
    for(let i = 0; i <= room.length - 1; i++){
        if (pickRoom === room[0]) {
            console.log("\nYou were already in bedroom. No present in there, only the letter from Santa.")
            lookInBedroomAgain()
            break;
        } else if (pickRoom === room[1]){
            console.log("\nYou walk towards the living room. Infront of the fireplace, there are faint santa footprints.")
            console.log("Your eyes wander over to the temperature reading on the wall, you walk towards it.\n")
            livingRoomTemp()
            break;
        } else if (pickRoom === room[2]){
            console.log("\nWalking towards the kitchen. The full plate of cookies you left on counter last night is now half emptied with crumbs everywhere.")
            searchInKitchen()
            break;
        } else if (pickRoom === room[3]) {
            console.log("\nYou open the door that leds to the basement, it's pitch dark.")
            lightInBasement()
            break;
        } else if (pickRoom === room[4]) {
            console.log("\nOpening up the closet door, there's a pile of your favorite snacks but no present.")
            snackInCloset()
            break;
        } else {
            console.log ("\nPlease move toward any of these rooms: bedroom, living room, kitchen, basement or closet to continue the game.")
            break;
        }
    }
    enterRoom ()
}


// && typeof(ageInput) === "number"
if (ageInput <= 12 ) {
    console.log ("\nSlowly sitting up, you reach for the glass of water on your nightstand. Instead, you feel something else. A letter with your name on it. \n")
    console.log ("Opening the letter ...\n")
    newGame()
} else {
    console.log("\nSowwie. You're old enough to know Santa is fake, dont pretend like he exists. :)")
    exitGame()
}















