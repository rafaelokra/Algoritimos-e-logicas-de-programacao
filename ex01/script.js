
let firstNumber = prompt("Digite o primeiro numero")
secondNumber = prompt("digite o segundo numero")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
if (sum % 2 === 0){
    alert('A soma é par.');
} else {
    alert('A soma é impar.');
}

const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert('soma: ' + sum)
alert('subtracao: ' + sub)
alert('multiplicacao: ' + multi)
alert('divisao: ' + div)
alert('resto da divisao: ' + rest)


