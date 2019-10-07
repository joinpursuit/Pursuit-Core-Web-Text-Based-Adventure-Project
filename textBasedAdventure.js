const readline = require("readline-sync");
// Example
// let nameInput = readline.question("Enter your name: ")
// console.log(`Hello ${nameInput}!  Welcome to my game.`)

// Creating arrays that will display the questions and answers given for the user at the end.
let arrQuestions = [];
let arrAnswers = [];

// Introduction - Question 1
let nameInput = readline.question("Enter your first name: ");
arrQuestions.push("Enter your first name"); 
arrAnswers.push(nameInput);

console.log(`Good morning ${nameInput}!`);
console.log("");
console.log("You wake up after a good nights rest and walk to the bathroom.");
let health = 100;

// Bathroom attack
console.log("Oh no! Bad breath attacks!");
let breathDamage = Math.floor(Math.random() * 15) + 1; // Takes a random integer for damage
health -= breathDamage; // Subtracts the damage above from the users health total
console.log(`You take ${breathDamage} points of damage! You have ${health}HP.`);

// Bathroom Routine - Question 2
let firstStep = readline.question("What's the first step of your bathroom routine? ");
arrQuestions.push("What's the first step of your bathroom routine? ");
arrAnswers.push(firstStep);
console.log(`${firstStep} heals you.`);

// Bathroom Routine - Question 3 (Number input)
let bathroomHeal = readline.question("How many health points do you recover? ");
arrQuestions.push("How many health points do you recover? ");


// Bathroom Routine - While and if
let healComplete = false;
healComplete: while (healComplete === false) {
  if (Number(bathroomHeal) > breathDamage) {
    //If the heal is greater than the damage taken requires a redo of the heal input
    console.log("So you're trying to cheat? I've caught you.");
    bathroomHeal = readline.question("How many health points do you recover? ");
  } else if (Number(bathroomHeal) === breathDamage) {
    //If the heal is equal to the damage taken then user is fully healed
    health += Number(bathroomHeal);
    console.log("Fully healed!");
    arrAnswers.push(bathroomHeal);
    healComplete = true;
    break healComplete;
  } else if (Number(bathroomHeal) === 0) {
    //If the heal is equal to 0 the user heals nothing
    console.log("You heal nothing!");
    arrAnswers.push(bathroomHeal);
    healComplete = true;
    break healComplete;
  } else if (Number(bathroomHeal) < 0) {
    //If the user enters a negative number requires a redo of the heal input
    console.log(`You can't heal ${bathroomHeal} points!`);
    bathroomHeal = readline.question("How many health points do you recover? ");
  } else if (Number(bathroomHeal) > 0 && Number(bathroomHeal) < breathDamage) {
    //If the number is between 0 and the damage the user is healed
    health += Number(bathroomHeal);
    console.log("Ah, refreshing.");
    arrAnswers.push(bathroomHeal);
    healComplete = true;
    break healComplete;
  } else {
    //If any of the above are not true then a redo is required
    console.log("I do not understand.");
    bathroomHeal = readline.question("How many health points do you recover? ");
  }
}

// Breakfast & Question 4
console.log("You finish your bathroom routine and continue about your day.");
let breakfast = readline.question("Do you eat breakfast?(Y/N) ");
arrQuestions.push("Do you eat breakfast?(Y/N) ");

// Branching switch for breakfast.
breakfast = breakfast.toUpperCase();
let breakfastComplete = false;
let favoriteBreakfast; // Initializing favoriteBreakfast so it can be called outside of the while loop if necessary

breakfastComplete: while (breakfastComplete === false) {
  switch (breakfast) {
    case "Y":
      // If the user eats breakfast then this branch is followed
      console.log(
        `The most important meal of the day! Serving it up ${nameInput}'s way!`
      );
      favoriteBreakfast = readline.question(
        "What's your favorite breakfast food? "
      );
      console.log(`No way! I love ${favoriteBreakfast}`);
      arrAnswers.push(breakfast);
      breakfastComplete = true;
      break breakfastComplete;
    case "N": //Contains question 5
      // If the user does not eat breakfast then this branch is followed
      // Add in a battle with a waffle iron because it hasn't been used in forever
      console.log("This angered your waffle iron. It attacks!");
      console.log("The waffle iron uses 'face press'!");
      let waffleAttack = Math.floor(Math.random() * 25) + 1; // Random Integer between 1 and 25
      health -= waffleAttack; // Subtracting the damage done from total health

      console.log(`You take ${waffleAttack}. You have ${health}HP`);
      console.log("Which action do you take?");
      console.log("1. Unplug the waffle iron.");
      console.log("2. Splash water.");
      console.log("3. Jump on it.");
      console.log("4. Just walk away.");
      let waffleCounter = readline.question("(Input a number between 1 and 4) ");
      arrQuestions.push("Which action do you take?");
      let waffleBattleComplete = false;
      waffleBattle: while (waffleBattleComplete === false) {
        if (waffleCounter === "1") {
          //If the user chooses choice 1 the move is super effective and defeats the waffle iron
          console.log("The move is super effective!");
          console.log("The waffle iron is defeated.");
          arrAnswers.push(waffleCounter);
          waffleBattleComplete = true;
          break waffleBattle;
        } else if (waffleCounter === "2") {
          //If the user chooses choice 2 the move kills both the player and the waffle iron creating a game over
          console.log("The move is super effective!");
          console.log("The water creates a fire and explodes.");
          console.log("The explosion reaches to you and defeats you.");
          health = 0;
          console.log("You have died.");
          arrAnswers.push(waffleCounter);
          waffleBattleComplete = true;
          process.exit();
          break waffleBattle;
        } else if (waffleCounter === "3") {
          //If the user chooses choice 3 the move kills the waffle iron and hurts the user
          console.log("The move is effective!");
          console.log("The heat from the waffle iron burns your legs.");
          health -= 15;
          console.log(`You take 15 points of damage. You have ${health}HP.`);
          arrAnswers.push(waffleCounter);
          waffleBattleComplete = true;
          break waffleBattle;
        } else if (waffleCounter === "4") {
          //If the user chooses choice 4 the waffle iron lives, but kills the player and creates a game over
          console.log("You turn your back to the waffle iron to escape.");
          console.log("The waffle iron's anger grows.");
          console.log("The waffle iron uses waffle throw!");
          console.log(`You take ${health} points of damage!`);
          arrAnswers.push(waffleCounter);
          waffleBattleComplete = true;
          process.exit();
          break waffleBattle;
        } else {
          //If the user doesn't do a correct input then it asks for a repeat
          console.log("I do not understand");
          waffleCounter = readline.question(
            "(Input a number between 1 and 4) "
          );
        }
      }
      arrAnswers.push(breakfast);
      breakfastComplete = true;
      break breakfastComplete;
    default:
      //If any of the above are not true then a redo is required
      console.log("I do not understand.");
      breakfast = readline.question("Do you eat breakfast?(Y/N) ");
  }
}

// Pet Care - Question 6
console.log("You return to your room.");
console.log("You get dressed, and ready for your day.");
let pets = readline.question("Do you have any pets?(Y/N) ");
arrQuestions.push("Do you have any pets?(Y/N) ")


// Add an array for all the questions and all the answers to be displayed at the very end
// It'll run through using a for loop and display the question and answer
