const rl = ['R499', 'L451', 'L100', 'R0', 'R2', 'L40']
let pointer = 50

for (const line of rl) {
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
      console.log(pointer)
    }
  } else {
    if (pointer - range >= 0) {
      pointer = pointer - range
    } else {
      while (pointer - range < 0 && range !== 0) {
        const distance = pointer - 1
        range = range - distance
        pointer = 99
        if (range < 99) {
          pointer = pointer - range
        }
      }
    }
    console.log(pointer)
  }
}
