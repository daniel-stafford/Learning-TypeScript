let apples = 5
let speed: string = 'fast'
let hasName: boolean = true
let nothingMuch: null = null
let nothing: undefined = undefined

//built in objects
let now: Date = new Date()

//array
let colors: string[] = ['red', 'blue', 'green']

let myNumbers: number[] = [1, 2, 3, 4, 5]

let truths: boolean[] = [true, false, true, true]

//class
class Car {}

// let car: Car = new Car()

let point: { x: number; y: number } = {
	x: 10,
	y: 30
}

//function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i)
}

//When to use annotations
//1) Function that returns the "any" type

const json = '{"x": 10, "y": 20}'

const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

let words = ['red', 'green', 'blue']
let foundWord

const add = (a: number, b: number): number => {
	return a + b
}

function divide(a: number, b: number): number {
	return a / b
}

const multiply = function(a: number, b: number): number {
	return a * b
}

const logger = (message: string): void => {
	console.log(message)
	//return null, undefined
}

const throwError = (message: string): never => {
	throw new Error(message)
}

const todayWeather = {
	date: new Date(),
	weather: 'sunny'
}

const logWeather = ({
	date,
	weather
}: {
	date: Date
	weather: string
}): void => {
	console.log(date)
	console.log(weather)
}

logWeather(todayWeather)
