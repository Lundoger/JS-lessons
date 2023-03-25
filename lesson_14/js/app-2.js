//Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців
document.write(`<p class="description">1.5) Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців</p>`);
const userNumber = parseInt(prompt('N='), 25)
let dateObj = {
	day: 29,
	month: 5,
	year: 2000,
}

function getCurrentYear(date, N) {
	date.month += N
	while(date.month >= 12) {
		date.month -= 12
		date.year++
	}
	return date.year
}

const currentYear = getCurrentYear(dateObj, userNumber)
alert(`${currentYear}`)