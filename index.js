//Calculadora de partidas Rankeadas
console.log("Vamos descobrir o saldo de vitórias do seu herói!\n")

function winBalance(wins , losses){ 
    let gameVictory = (wins - losses)
    return gameVictory
}

let numberOfWins = 15
let numberOfLosses = 5

let winBalanceResult  = winBalance(numberOfWins, numberOfLosses)
let rankLevel;

switch(true){
case (winBalanceResult < 10):
    rankLevel = "Ferro"
    break;
case (winBalanceResult <= 20):
    rankLevel = "Bronze"
    break;
case (winBalanceResult <= 50):
    rankLevel = "Prata"
    break;
case (winBalanceResult <= 80):
    rankLevel = "Ouro"
    break;
case (winBalanceResult <= 90):
    rankLevel = "Diamante"
    break;
case (winBalanceResult <= 100):
    rankLevel = "Lendário"
    break;
case (winBalanceResult >= 101):
    rankLevel = "Imortal"
    break;
    default:
        rankLevel = "Desconhecido"
}

console.log("O seu herói tem saldo de " + winBalanceResult + " vitórias, e está no nível " + rankLevel +".")