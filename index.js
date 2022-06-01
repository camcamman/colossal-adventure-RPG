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

//warpin
let warpin = {
  health: 100,
  alive: true,
  ran: true,
}

//main function 
while (player.alive) { // name
  
  let actions = ['[w]alk', '[q]uit']
  actions.forEach(a=>console.log(a))
  let input = readline.keyIn('Your health is '+player.health+'! What action would you like to select?', {limit: ['w','q']})
  
  if (input === 'w') walk(player)
  if (input === 'q') quit(player, NaN)
  
  
  function walk() {
    let randomNum = Math.floor(Math.random() * 4)
    console.log(randomNum)
    if (randomNum === 0) {
      readline.question(name+" you steped on a  stick. enter to continue")
    }
    
    if (randomNum === 1) {
      readline.question(name+" you stubbed your toe. enter to continue")
    }
    
    if (randomNum === 2) {
      readline.question("Your shoe fell off "+name+". enter to continue")
    }
    
    if (randomNum === 3) {
      
      let randomEvil = Math.floor(Math.random() * 2) 
      console.log(randomEvil)
      
      if (randomEvil === 1) {
        randomEvil = 0
      }
      
      if (randomEvil === 0) {
        if (warpin.ran === false){
          warpin.ran = true
        }
        readline.question(name+'! Its the warpin! enter to continue')
       

        while (warpin.alive && warpin.ran) {
          // console.log("warpin")
          // console.log(warpin.health)
          // console.log(player.health)
          startFight(warpin, player)

          fight (warpin, 70, 20)
          attakDamge (50, 10, player)
          
          if (warpin.health <= 0) {
            warpin.alive = false
          }
          if (player.health <= 0) { 
            warpin.alive = false
            endGame
          }
        }
      }
      
      if (randomEvil === 2) {
        console.log("skeleton")
      }
      
      if (randomEvil === 3) {
        console.log("creeper")
      }
      
      if (randomEvil === 4) {
        console.log("endermite")
      }
      
      if (randomEvil === 5) {
        console.log("spider")
      }
    }
  }
  if (player.health <= 0) {
    // player.alive = false
    endGame (player)
  }
}  


//game functions 
function fight (takeDamge, high, low) {
  let actions = ['[a]ttak', '[r]un away','[q]uit']
  actions.forEach(a=>console.log(a))
  let input = readline.keyIn('What action would you like to select?', {limit: ['a','r','q']})

  
  if (input === 'a') {
    attakDamge (high ,low ,takeDamge)
  }
  
  if (input === 'r') {
    // warpin.alive = false
    let runAway = Math.floor(Math.random() * 2);
    
    if (runAway === 0) {
      takeDamge.ran = false
      readline.question(name+" you escaped. Enter to continue")
    }
    if (runAway === 1) {
      readline.question(name+'you did not escap. enter to continue')
    }
  }
  
  if (input === 'q') {
    quit (player, warpin)
  }
}


function attakDamge (floor, ceil, gettingAttaked) {
  let attakNum = Math.floor(Math.random() * (floor - ceil + 1) ) + ceil;
  gettingAttaked.health = gettingAttaked.health - attakNum
  // player.health = 12
}


function startFight (badGuy, goodGuy) {
console.log(name+' your health is '+goodGuy.health)
console.log('And the '+badGuy+' health is '+badGuy.health)
}


function endGame(them) {
  readline.question("you have died "+name+" enter to contune")
  them.alive = false
}



function quit (goodGuy, badGuy) {
  goodGuy.alive = false
  badGuy.alive = false
  readline.question(name+"you have left the game. enter to contune")
}