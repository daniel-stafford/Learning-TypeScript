const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40
}

//type alias
type Drink = [string, boolean, number]

const pepsi: [string, boolean, number] = ['brown', true, 40]
// pepsi[0]= 40

const dietCoke: Drink = ['brown', false, 0]

const carSpecs: [number, number] = [400, 3354]

const carStats = {
	horsepower: 400,
	weight: 3354
}
