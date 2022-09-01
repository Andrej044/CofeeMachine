
const input = require('sync-input');
const config ={
    water: 400,
    milk: 540,
    coffeeBeans: 120,
    cups: 9,
    money: 550
} 


function calculate(obj={}){
 config.cups-- ; 
 let keysArr = Object.keys(obj)   
    for( let i = 0; i < keysArr.length; i++){
        for (const key of Object.keys(config)) {
            if(keysArr[i] === key){
                if(key === "money") {
                    config[key] = config[key] + obj[keysArr[i]];
                    return;
                }
                config[key] = config[key] - obj[keysArr[i]];
            }
        }
    }
} 

let buyCoffee = () => {
    const recipeOfCappuccino = {
        water: 200,
        milk: 100,
        coffeeBeans: 12,
        money: 6
    }
    const recipeOfEspresso = {
        water: 250,
        coffeeBeans: 16,
        money: 4
    }
    const recipeOfLatte = {
        water: 350,
        milk: 75,
        coffeeBeans: 20,
        money: 7
    }


    const buyAnswer = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:`)*1;

    switch (buyAnswer) {
        case 1:
            calculate(recipeOfEspresso);
            break;
        case 2:
            calculate(recipeOfLatte);
            break;
        case 3:
            calculate(recipeOfCappuccino);
            break;
        default:
            break;
    }

}
let fillCoffeeMachine = () => {
    for (const key in config) {
        let answer;
        switch (key) {
            case "coffeeBeans":
                answer = input(`Write how many grams of coffee beans you want to add:`)*1;
                config.coffeeBeans = config.coffeeBeans + answer;      
                break;
            case "cups":
                answer = input(`Write how many disposable coffee cups you want to add:`)*1;
                config.cups = config.cups + answer;
                break;
            case "money":
                break;
            default:
                answer = input(`Write how many ml of ${key} you want to add:`)*1;
                config[key] = config[key] + answer;
                break;
        }
    }
}

let takeMoney = () => {
    console.log(`I gave you ${config.money}$`);
    config.money=0;
}

function runCoffeMachine(){    
    console.log(`The coffee machine has:
    ${config.water} ml of water
    ${config.milk} ml of milk
    ${config.coffeeBeans} g of coffee beans
    ${config.cups} disposable cups
    $${config.money} of money 
 `)
    const choice = input(`Write action (buy, fill, take):`);
        
    switch (choice) {
            case "buy":
                buyCoffee();
                break;
            case "fill":
                fillCoffeeMachine();
                break;
            case "take":
                takeMoney();
                break;
            default:
                break;
        }

   
    console.log(`The coffee machine has:
    ${config.water} ml of water
    ${config.milk} ml of milk
    ${config.coffeeBeans} g of coffee beans
    ${config.cups} disposable cups
    $${config.money} of money 
 `)
}


runCoffeMachine()
