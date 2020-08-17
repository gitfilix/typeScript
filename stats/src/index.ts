import { CsvFileReader } from './CsvFileReader'
// we want the output of the csv file by line in an array of strings:
//  [ '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson' ],

const reader = new CsvFileReader('football.csv')
// call reader helper
reader.read()

// MatchResult ENUM - no unused is no Problem
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else 
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`ManUnited won ${manUnitedWins} games`)