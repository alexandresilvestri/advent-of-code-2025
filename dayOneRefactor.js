const rl = ['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82']

let pointer = 50
let counterZeros = 0

for await (const line of rl) {
  let direction = line.substring(0, 1)
  let clicks = Number(line.substring(1))

  if (direction === 'R') {
    const [updatePointer, clocks] = countRightClocks(pointer, clicks)
    counterZeros += clocks
    pointer = updatePointer
    console.log(pointer)
  } else {
    const [updatePointer, clocks] = countLeftClocks(pointer, clicks)
    counterZeros += clocks
    pointer = updatePointer
    console.log(pointer)
  }
}

function countRightClocks(pointer, clicks) {
  if (pointer + clicks < 100) {
    const newPointer = pointer + clicks
    return [newPointer, 0]
  } else {
    const total = pointer + clicks
    const clocks = Math.floor(total / 100)

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
  } else if (pointer - clicks < 0 && pointer - clicks > -100) {
    const distance = pointer
    range = range - distance
    const newPointer = 99
    newPointer -= range
    return [newPointer, 1]
  } else {
    const distance = pointer
    range = range - distance
    const newPointer = 99
    const clocks = Math.floor(total / 100) * -1

    const tmp = total.toString()
    const newP= Number(tmp.substring(2))

    return [newPointer, clocks]
  }
}

console.log(counterZeros)
