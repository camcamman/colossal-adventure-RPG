// 0 - 10 - 20 ---- 100



// function pause(milliseconds) {
  //   var dt = new Date();
  //   while ((new Date()) - dt <= milliseconds) {
    //       /* Do nothing */
    //   }
    // }
    
    // THE DOCUMENTATION FOR BOTH OF THE NUMBER FUNCTIONS BELOW CAN BE FOUND AT THE GIVEN LINK
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // function getRandomInt(max) {
      //   return Math.floor(Math.random() * Math.floor(max)); // input is zero-based
      // }
      // This example returns a random integer between the specified values. 
      // The value is no lower than min (or the next integer greater than min if min isn't an integer), 
      // and is less than (but not equal to) max.
      // function getRandomIntMinMax(min, max) {
        //   min = Math.ceil(min);
        //   max = Math.floor(max);
        //   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        // }
const readline = require("readline-sync");

console.log("hey im glad you came to play this game!")
const name = readline.question("What is your name? ");
console.log("HEY " + name + " to walk use W")

//player
let player = {
  health: 100, 
  alive: true
}
function VillainMaker (health, name) {
  this.health = health
  this.alive = true
  this.ran = true
  this.name = name;
}

let stegosaurus = new VillainMaker (100, 'stegosaurus')
let skeleton = new VillainMaker (50, 'skeleton')
let endermite = new VillainMaker (30, 'endermite')
let spider = new VillainMaker (80, 'spider')
let phantom = new VillainMaker (60, 'phantom')

//main function 
while (player.alive) { // name
    
  let actions = ['[w]alk', '[q]uit']
  actions.forEach(a=>console.log(a))
  let input = readline.keyIn('Your health is '+player.health+'! What action would you like to select?', {limit: ['w','q']})

  // const addHealth = ()
  
  if (input === 'w') walk(player)
  if (input === 'q') quit(player, NaN)


  function walk() {
    let randomNum = Math.floor(Math.random() * 4)
    console.log(randomNum)

  if (randomNum === 0) {//walking
      readline.question(name+" you steped on a  stick. enter to continue")
    }
    
    if (randomNum === 1) {//walking
      readline.question(name+" you stubbed your toe. enter to continue")
    }
    
    if (randomNum === 2) {//walking
      readline.question("Your shoe fell off "+name+". enter to continue")
    }
    
    if (randomNum === 3) {//walking 
      
      let randomEvil = Math.floor(Math.random() * 5) 
      console.log(randomEvil)

      //stegosaurus
      if (randomEvil === 0) {
        encounter(stegosaurus, player, 80, 20, 1);
      }

      //skeleton
      if (randomEvil === 1) {
        encounter(skeleton, player, 41, 19, 2)
      }

      //phantom
      if (randomEvil === 2) {
          encounter(phantom, player, 35, 10, 3)
      }  

      //endermite
      if (randomEvil === 3) {
        encounter(endermite, player, 20, 1, 4)
      }

      //spider
      if (randomEvil === 4) {
        encounter(spider, player, 40, 15, 5)
      }

      if (randomEvil === 5) {
        readline.question('GOOD JOB '+name+' you beat the game! eneter to finish')
        player.alive = false
      }
    }
    if (player.health <= 0) {
        endGame (player)
    } 
  }
} 


//game functions 
function fight (badGuy,goodGuy, high, low) {

  let actions = ['[a]ttak', '[r]un away','[q]uit']
  actions.forEach(a=>console.log(a))
  let input = readline.keyIn('What action would you like to select?', {limit: ['a','r','q']})


  if (input === 'a') {
    console.log('a')
    attakDamge (high ,low ,badGuy)
  }

  if (input === 'r') {
    //badGuy.ran = false
    let runAway = Math.floor(Math.random() * 2);
    
    if (runAway === 0) {
      badGuy.ran = false
      readline.question(name+" you escaped. Enter to continue")
    }
    if (runAway === 1) {
      readline.question(name+'you did not escap. enter to continue')
    }
  }

  if (input === 'q') {
    quit (goodGuy, badGuy)
  }
}



function attakDamge (high, low, gettingAttaked) {
  let attakNum = Math.floor(Math.random() * (high - low + 1) ) + low;
  gettingAttaked.health = gettingAttaked.health - attakNum
  // player.health = 12
}

function youDead (badGuy, goodGuy) {
  if (badGuy.health <= 0) {
    badGuy.alive = false
    goodGuy.health = 100
    readline.question(name+'you killed '+badGuy.name+' good job! enter to continue')
  }
  if (goodGuy.health <= 0) { 
    badGuy.alive = false
    endGame
  }
}

function endGame(goodGuy) {
  readline.question("you have died "+name+" do better next time common man enter to contune")
  goodGuy.alive = false
}

function quit (goodGuy, badGuy) {
  goodGuy.alive = false
  badGuy.ran = false
  readline.question(name+"you have left the game. enter to contune")
}

function encounter(badguy, player, badHighNum, badLowNum, nextNum) {
  // console.log(badguy)
  if (badguy.alive === false) {
    randomEvil = nextNum
  }

  if (badguy.alive === true) {

    player.ran = true
    
    readline.question(name+'! Its a '+badguy.name+'! enter to continue')
    
    
    while (badguy.alive && badguy.ran) {
      console.log(name+' your health is '+player.health)
      console.log('And the opponent health is '+badguy.health)
      // startFight(badguy, player)

      fight (badguy ,player, 70, 20)
      // console.log(badguy.health)
      attakDamge (badHighNum, badLowNum, player)
      // console.log(player.health)
      youDead (badguy, player)
    }
  }
}
