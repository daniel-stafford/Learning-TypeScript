const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake = [['f150'], ['corolla'], ['camero']]

//help wit inference when extracting values

const car = carMakers[0]
const myCar = carMakers.pop()

//prevent incompatible values
// carMakers.push(100)

//help with 'map'
carMakers.map(
	(car: String): String => {
		return car.toUpperCase()
	}
)

//flexible types
const importantDates: (Date | String)[] = [new Date()]
importantDates.push('23 Feb 1985')
