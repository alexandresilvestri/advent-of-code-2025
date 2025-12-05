const rl = ['R49', 'R1', 'R101', 'L119', 'L40', 'R10', 'R400', 'L550', ]

let pointer = 50
let counterZeros = 0

for (const line of rl) {
  let direction = line.substring(0, 1)
  let range = Number(line.substring(1))

  if (direction === 'R') {
    if (pointer + range <= 99) {
      pointer = pointer + range
      if (pointer === 0) counterZeros++
    } else {
      while (pointer + range > 99) {
        const distance = 100 - pointer
        range = range - distance
        counterZeros++
        pointer = 0
      }
      pointer = range
    }
  } else {
    if (pointer - range >= 0) {
      pointer = pointer - range
      if (pointer === 0) counterZeros++
    } else {
        while (pointer - range < 0) {
          const distance = pointer
          range = range - distance - 1
          counterZeros++
          pointer = 99
        }
        pointer = pointer - range
    }
  }
}

console.log(counterZeros)