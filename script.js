// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages

const input = require('sync-input');




const commands = ["buy","fill","take"];






// ===============================================================================



// const input = require('sync-input');
// let amount;
// const recipe = {
//     water: 200,
//     milk: 50,
//     coffeeBeans: 15
// }
// let index = 0;



// const questions = [
//      "Write how many ml of water the coffee machine has:",
//      "Write how many ml of milk the coffee machine has:",
//      "Write how many grams of coffee beans the coffee machine has:",
//      "Write how many cups of coffee you will need:"
//  ]
// const answer = [];







//  do{
//      console.log(`${questions[index]}`)
//      amount =  input();
//      amount = amount * 1

//      if(isNaN(amount)) {
//          console.log("input correct value")
//      } else {
//          answer.push(amount)
//          index++;
//      }

//  } while (index < questions.length)


// function howManuCups(arr=[]){
//      let valueOfCups = []
//      valueOfCups.push(Math.floor(arr[0] / recipe.water));
//      valueOfCups.push(Math.floor(arr[1] / recipe.milk));
//      valueOfCups.push(Math.floor(arr[2] / recipe.coffeeBeans));

//      let [cups] = valueOfCups.sort((a,b) =>{
//          return (a - b)
//      })
//      let [needValue] = arr.slice(-1);

//     if(cups > needValue) {
//         console.log(`Yes, I can make that amount of coffee (and even ${cups-needValue} more than that)`);
//         }else if(cups < needValue) {
//             console.log(`No, I can make only ${cups} cups of coffee`);
//         }else {
//             console.log(`Yes, I can make that amount of coffee`)
//         }
// }
//  howManuCups(answer)

