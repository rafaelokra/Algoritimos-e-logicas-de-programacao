/*
    Capturar 2 numeros e fazer as operacoes matematicas de 
    soma, subtracao, multiplicacao, divisao e resto da divisao.

    e para cada operacao, mostrar um alerta com o resultado.
 
*/

let firstNumber = prompt('Digite o primeiro numemro')
let secondNumber = prompt('Digite o segundo numero')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber -secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('soma: ' + sum)
alert('subtracao: ' + sub)
alert('multiplicacao: ' + multi)
alert('divisao: ' + div)
alert('resto da divisao: ' + restDiv)

