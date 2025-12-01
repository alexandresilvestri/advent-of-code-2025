import fs from 'fs'
import readline from 'readline'

const fileStream = fs.createReadStream('input.txt');

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let pointer = 50

for await (const line of rl) {
    const direction = line.substring(0, 1)
    const range = Number(line.substring(1))

    if (direction === 'R') {
        if (pointer + range > 99) {
            const limit = pointer - 99
            range = range - 
            pointer = 0
        }
    } else {
        range = range * -1
    }
}