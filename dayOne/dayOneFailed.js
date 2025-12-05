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
  } else if (pointer + clicks === 100) {
    return [0, 1]
  } else {
    const total = pointer + clicks
    const clocks = Math.floor(total / 100)
    const newPointer = total % 100

    return [newPointer, clocks]
  }
}

function countLeftClocks(pointer, clicks) {
  if (pointer - clicks > 0) {
    pointer = pointer - clicks
    return [pointer, 0]
  } else if (pointer - clicks === 0) {
    return [0, 1]
  } else if (pointer - clicks < 0 && pointer - clicks > -100 && pointer > 0) {
    const distance = pointer
    clicks = clicks - distance
    clicks--
    pointer = 99
    pointer = pointer - clicks
    return [pointer, 1]
  } else if (pointer - clicks > -100 && pointer === 0) {
    clicks--
    pointer = 99
    pointer = pointer - clicks
    return [pointer, 0]
  } else if (pointer === 0 && pointer - clicks < -100) {
    const clocks = Math.floor(clicks / 100)
    pointer = 100 - (clicks % 100)

    return [pointer, clocks]
  } else {
    const distance = pointer
    clicks = clicks - distance + 1
    clicks--
    const clocks = Math.floor(clicks / 100) + 1
    pointer = 100 - (clicks % 100)

    return [pointer, clocks]
  }
}

console.log(counterZeros)