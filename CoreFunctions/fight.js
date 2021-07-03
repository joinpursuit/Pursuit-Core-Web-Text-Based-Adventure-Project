//import dice,
const dice = require("./dice.js");
const dmg = require("./dmg.js");
const enemyDmg = require("./enemyDmg.js");

const { keyInSelect } = require("readline-sync");
const { hero, troll } = require("./characterStats-API.js");

const fight = (herostat, enemy, risk, experience) => {
  
  while (herostat.health > 0 || enemy.health > 0) {
    const options = ["Attack", "Dodge", "Special Attack", "Run"];
    let index = keyInSelect(options, `What's your move?`);

    if (options[index] === options[0]) {
      const damage = dmg(herostat, enemy);
      console.log(`heroDamage: `,damage)
      enemy.health = enemy.health - damage;

      console.log(
        `hero did ${damage} damage to the enemy \n${herostat.health}❤️ \n${enemy.health}🖤`
        );

      // const enDamage = enemyDmg(herostat, enemy);
      // console.log(`enDamage:`,enDamage)
      // hero.health = hero.health - enDamage
      
      
      // console.log(
      //   `Enemy did ${enDamage} damage to our hero \n HP❤️${hero.health} \nHP🖤${enemy.health}`
      // );
    }
    else if (options[index] === options[1]) {
      let dodge = dodge(risk);
      return dodge;
    }
    else if (options[index] === options[2]) {
      if (herostat.level > 3) {
        return true;
      } else {
        console.log(`Do you even lift? Your level is too low, scrub.`);
      }
    }
    else if (options[index] === options[3]) {
      const d2 = dice(2, 1);
      if (d2 === 1) {
        console.log(`How could 1 tail beat 2 heads? `);
        fight(herostat, enemy, risk, next);
      } else {
        console.log(
          `2 heads are indeed better than one. However, a hero never runs, the Heads beyond the skies have judged you and condemn thee to die`
        );
        quitGame();
      }
    }
    if (hero.health < 1) {
      console.log(` ||=====\ ======== //=====+=   ||=====\\ `);
      console.log(` ||  -   |    ||    ||          ||  -   | `);
      console.log(` ||  |   |    ||    ||---|      ||  |   | `);
      console.log(` ||  1   |    ||    ||          ||  1   | `);
      console.log(` ||=====// ======*= ||======\\ ||======// `);
      start();
    } else if (enemy.health < 1) {
      console.log(' ==        ==  ========  ||\     ||  |  ');
      console.log(' ||   ___  ||     ||     || |\   ||  |  ');
      console.log(' ||    |   ||     ||     ||  |\  ||  |  ');
      console.log(' ||    |   ||     ||     ||   |\ ||  |  ');
      console.log(' //|==|+|==//  ======*=  ||    |\||  O  ');




    }
    //enDmg stuff here
    const enDamage = enemyDmg(herostat, enemy);
        console.log(`enDamage:`,enDamage)
        hero.health = hero.health - enDamage
        
        
        console.log(
          `Enemy did ${enDamage} damage to our hero \n HP❤️${hero.health} \nHP🖤${enemy.health}`
        );
  }
  // if (herostat.health < 1) {
  //   console.log(` ||=====\\ ======== //=====+= ||=====\\ `);
  //   console.log(` ||  -   |    ||    ||        ||  -   | `);
  //   console.log(` ||  |   |    ||    ||---|    ||  |   | `);
  //   console.log(` ||  1   |    ||    ||        ||  1   | `);
  //   console.log(` ||=====// ======*= ||======\\||=====// `);
  //   start();
  // } else if (enemy.health < 1) {
  //   return "Win!";
  // }
  // //enDmg stuff here
  // const enDamage = enemyDmg(herostat, enemy);
  //     console.log(`enDamage:`,enDamage)
  //     hero.health = hero.health - enDamage
      
      
  //     console.log(
  //       `Enemy did ${enDamage} damage to our hero \n HP❤️${hero.health} \nHP🖤${enemy.health}`
  //     );



};

console.log(fight(hero, troll));

