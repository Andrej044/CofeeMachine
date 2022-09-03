
const input = require('sync-input');
const stateResources ={
    water: 400,
    milk: 540,
    coffeeBeans: 120,
    cups: 9,
    money: 550
} 


function calculate(obj={}){
 let showMesage =true;   
 let keysArr = Object.keys(obj)   
    for( let i = 0; i < keysArr.length; i++){
        for (const stateKey of Object.keys(stateResources)) {
            
            for(let j=0; j<keysArr.length; j++){
                if(!showMesage || keysArr[j] === "money" ) continue;
                if(stateResources[keysArr[j]] < obj[keysArr[j]]){
                    console.log(`Sorry, not enough ${keysArr[j]}`);
                    return;                    
                } else if(stateResources.cups === 0) {
                    console.log(`Sorry, not enough cups`);
                    return;
                }
            }

            if(keysArr[i] === stateKey){
                if(stateResources[stateKey] < obj[keysArr[i]] && stateKey != "money") {
                    // console.log(`Sorry, not enough ${stateKey}`);
                    return;
                }
                else {
                    if(stateKey === "money") {
                        stateResources[stateKey] = stateResources[stateKey] + obj[keysArr[i]];
                        return;
                    }
                    if(showMesage){
                        showMesage=!showMesage;
                        stateResources.cups-- ; 
                        console.log(`I have enough resources, making you a coffee!`);
                    }
                    stateResources[stateKey] = stateResources[stateKey] - obj[keysArr[i]];
                }
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


    const buyAnswer = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n`);

    switch (buyAnswer) {
        case "1":
            calculate(recipeOfEspresso);
            break;
        case "2":
            calculate(recipeOfLatte);
            break;
        case "3":
            calculate(recipeOfCappuccino);
            break;
        case "back":
            return;
        default:
            break;
    }

}
let fillCoffeeMachine = () => {
    for (const key in stateResources) {
        let answer;
        switch (key) {
            case "coffeeBeans":
                answer = input(`Write how many grams of coffee beans you want to add:\n`)*1;
                stateResources.coffeeBeans = stateResources.coffeeBeans + answer;      
                break;
            case "cups":
                answer = input(`Write how many disposable coffee cups you want to add:\n`)*1;
                stateResources.cups = stateResources.cups + answer;
                break;
            case "money":
                break;
            default:
                answer = input(`Write how many ml of ${key} you want to add:\n`)*1;
                stateResources[key] = stateResources[key] + answer;
                break;
        }
    }
}

let takeMoney = () => {
    console.log(`I gave you ${stateResources.money}$`);
    stateResources.money=0;
}
let remainingResource = () =>{
    console.log(`The coffee machine has:
    ${stateResources.water} ml of water
    ${stateResources.milk} ml of milk
    ${stateResources.coffeeBeans} g of coffee beans
    ${stateResources.cups} disposable cups
    $${stateResources.money} of money 
 `)

}

function runCoffeMachine(){    

    const choice = input(`Write action (buy, fill, take, remaining, exit):\n`);
    switch (choice) {
            case "exit":
                // coffee machine will be always running 
                //  if users want to turn off the coffee machine, they should type in exit
                return;  
            case "buy":
                buyCoffee();
                break;
            case "fill":
                fillCoffeeMachine();
                break;
            case "take":
                takeMoney();
                break;
            case "remaining":
                remainingResource();
                break;
            default:
                break;
        }
        runCoffeMachine()

}


runCoffeMachine()
