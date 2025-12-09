import fs from 'fs'
import readline from 'node:readline';

const input = fs.createReadStream('input.txt')

const inputs = readline.createInterface({
  input: input,
  crlfDelay: Infinity
})

for await (const value of inputs) {
    const arrayOfNumber = divideValue(value)
    console.log(typeof value)
    const number1 = getFirstNumber(arrayOfNumber) 
    const number2 = getSecondNumber(arrayOfNumber)
    while (number1 < number2) {
        if (number1 % 2 == 0) {
            const length = number1.length
            const half = length / 2
            const slice1 = number1.substring(0, half)
            const slice2 = number1.substring(half)
            console.log(number1, slice1, slice2)
        }
    }
}

function divideValue(value) {
    return value.split("-")
}

function getFirstNumber(numbers) {
    return numbers[0]
}

function getSecondNumber(numbers) {
    return numbers[1]
}