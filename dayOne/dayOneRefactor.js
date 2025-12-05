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
  let clicks = Number(line.substring(1))
  
  if (direction === 'R') {
    const [updatePointer, clocks] = countRightClocks(pointer, clicks)
    counterZeros += clocks
    pointer = updatePointer
  } else {
    const [updatePointer, clocks] = countLeftClocks(pointer, clicks)
    counterZeros += clocks
    pointer = updatePointer
  }
}

function countRightClocks(pointer, clicks) {
    if (pointer + clicks < 100) {
        const newPointer = pointer + clicks
        return [newPointer, 0]
    } else {
        const total = pointer + clicks
        const clocks = Math.round(total / 100)

        const tmp = total.toString()
        const newPointer = Number(tmp.substring(1))

        return [newPointer, clocks]
    }
}

function countLeftClocks(pointer, clicks) {
    if (pointer - clicks > 0) {
        const newPointer = pointer - clicks
        return [newPointer, 0]
    } else if (pointer - clicks === 0) {
        pointer = 0
        return [pointer, 1] 
    } else if (pointer - clicks > -100) {
        const total = pointer - clicks
        const positivePointer = total * -1
        return [positivePointer, 1]
    } else {
        const total = pointer - clicks
        const clocks = Math.floor(total / 100) * -1
        const newPointer = total % 100 * -1
        
        return [newPointer, clocks]
    }
}

console.log(counterZeros)