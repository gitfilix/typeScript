// node-js FileSystem fs module 
import fs from 'fs'
// we want the output of the csv file by line in an array of strings:
//  [ '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson' ],

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
}) // now parsing that in a array of strings
.split('\n')
.map((row: string): string[] => {
    return row.split(',')
})

let manUnitedWins = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++
  } else 
  if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)