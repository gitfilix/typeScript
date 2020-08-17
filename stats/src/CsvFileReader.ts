// helper Class csv file reader
// node-js FileSystem fs module 
import fs from 'fs'

export class CsvFileReader {
	data: string[][] = [];

	// getting a filename as a argument
	constructor (public filename: string) {}
	
	// read method
	read(): void { //no return value
		this.data = fs
			.readFileSync(this.filename, {
				encoding: 'utf-8'
			}) // now parsing that in a array of strings 'string[]'
			.split('\n')
			.map((row: string): string[] => {
				return row.split(',')
			})
	} 
}
