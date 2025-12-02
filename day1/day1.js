import fs from 'fs'
import readline from 'readline'

const fileStream = fs.createReadStream('input.txt')

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
})

let pointer = 50
let counterZeros = 0

for await (const line of rl) {
  let direction = line.substring(0, 1)
  let range = Number(line.substring(1))

  if (direction === 'R') {
    if (pointer + range <= 99 && range !== 0) {
      pointer = pointer + range
    } else {
      while (pointer + range > 99) {
        const distance = 100 - pointer
        range = range - distance
        pointer = 0
      }
      pointer = range
    }
  } else {
    if (pointer - range >= 0) {
      pointer = pointer - range
    } else {
        while (pointer - range < 0 && range !== 0) {
          const distance = pointer
          range = range - distance - 1
          pointer = 99
        }
        pointer = pointer - range
    }
  }
  if (pointer === 0) counterZeros++
}

console.log(counterZeros)