function getRandomNum(minIncome, maxIncome) {
	return Math.floor(Math.random() * (maxIncome - minIncome + 1)) + minIncome;
}
function getRowForArray(daysQuantity, minIncome, maxIncome) {
  let row = []
  for (let i = 0; i < daysQuantity; i++) {
	  row.push(getRandomNum(minIncome, maxIncome))
  }
  return row
}
function arrayGeneration(shopsQuantity, daysQuantity, minIncome, maxIncome) {
  let table = []
  for (let i = 0; i < shopsQuantity; i++) {
	  table.push(getRowForArray(daysQuantity, minIncome, maxIncome))
  }
  return table
}
let table = arrayGeneration(3, 7, 1000, 5000)
//========================================================================================================================================================
// 2.1 Знайти загальний прибуток кожного масиву за тиждень
document.write(`<p class="description">2.1)Знайти загальний прибуток кожного масиву за тиждень</p>`)

function getShopIncome(shopNumber, table) {
	let sum = 0
	for (let i = 0; i < table[shopNumber - 1].length; i++) {
		sum += table[shopNumber - 1][i]
	}
	return sum
	//по поводу [shopNumber - 1] уже чувствую что мне прилетит за это но я не знаю где лучше всего 
	//отнимать эту 1-цу что бы всем вокруг было понятно шо как и зачем.Поэтому хотел бы услышать как лучше это делать
	//в последующих задачах также проскакивает подобная запись (table[переменная - 1]) прошу понять и простить 
}

const firstShopIncome = getShopIncome(1, table)
const secondShopIncome = getShopIncome(2, table)
const thirdShopIncome = getShopIncome(3, table)

document.write(`
	<ul>
		<li style="margin-bottom: 15px;">${firstShopIncome}</li>
		<li style="margin-bottom: 15px;">${secondShopIncome}</li>
		<li style="margin-bottom: 15px;">${thirdShopIncome}</li>
	</ul>
	<hr style="background-color: #fff; height: 2px;">
`)
//========================================================================================================================================================
// 2.2 Знайти загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
document.write(`<p class="description">2.2)Знайти загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);</p>`)

function getStoreProfitForDay(daysNumber, table) {
	let sum = 0
	for (let i = 0; i < table.length; i++) {
		sum += table[i][daysNumber-1]
	}
	return sum
}

const storeProfitFInMonday = getStoreProfitForDay(1, table)
const storeProfitInTuesday = getStoreProfitForDay(2, table)
const storeProfitInWednesday = getStoreProfitForDay(3, table)
const storeProfitInThursday = getStoreProfitForDay(4, table)
const storeProfitInFriday = getStoreProfitForDay(5, table)
const storeProfitInSaturday = getStoreProfitForDay(6, table)
const storeProfitInSunday = getStoreProfitForDay(7, table)

document.write(`
	<ul>
		<li style="margin-bottom: 15px;">${storeProfitFInMonday}</li>
		<li style="margin-bottom: 15px;">${storeProfitInTuesday}</li>
		<li style="margin-bottom: 15px;">${storeProfitInWednesday}</li>
		<li style="margin-bottom: 15px;">${storeProfitInThursday}</li>
		<li style="margin-bottom: 15px;">${storeProfitInFriday}</li>
		<li style="margin-bottom: 15px;">${storeProfitInSaturday}</li>
		<li style="margin-bottom: 15px;">${storeProfitInSunday}</li>
	</ul>
	<hr style="background-color: #fff; height: 2px;">
`)
//========================================================================================================================================================
// 2.3 Знайти загальний прибуток за робочі дні
document.write(`<p class="description">2.3)Знайти загальний прибуток за робочі дні</p>`)

let storeProfitForWorkingDays = 0
for (let i = 0; i < table.length; i++) {
	for (let j = 0; j < 5; j++) {
		storeProfitForWorkingDays += table[i][j]
	}
}

document.write(`<p style="margin-bottom: 15px;">${storeProfitForWorkingDays}</p><hr style="background-color: #fff; height: 2px;">`)
//========================================================================================================================================================
// 2.4 Знайти загальний прибуток за вихідні дні
document.write(`<p class="description">2.4)Знайти загальний прибуток за вихідні дні</p>`)

let storeProfitForWeekend = 0
for (let i = 0; i < table.length; i++) {
	for (let j = 5; j < 7; j++) {
		storeProfitForWeekend += table[i][j]
	}
}

document.write(`<p style="margin-bottom: 15px;">${storeProfitForWeekend}</p><hr style="background-color: #fff; height: 2px;">`)
//========================================================================================================================================================
// 2.5 Знайти максимальний прибуток за середу
document.write(`<p class="description">2.5)Знайти максимальний прибуток за середу</p>`)

function getMaxProfitForDays(daysNumber, table) {
	const dayIndex = daysNumber - 1 //не уверен на счет решения выносить ли это в переменную, буду рад совету как лучше
	let maxIncome = table[0][dayIndex]
	for (let i = 0; i < table.length; i++) {
		if(table[i][dayIndex] > maxIncome) maxIncome = table[i][dayIndex]
	}
	return maxIncome
}

const maxProfitForDay = getMaxProfitForDays(3, table)

document.write(`<p style="margin-bottom: 15px;">${maxProfitForDay}</p><hr style="background-color: #fff; height: 2px;">`)
//========================================================================================================================================================
// 2.6 сформувати загальний список (одновимірний масив) зі значенням, що більші за 2000
document.write(`<p class="description">2.6)сформувати загальний список (одновимірний масив) зі значенням, що більші за 2000</p>`)

let profitThanMore2000 = []

for (const rows of table) {
	for (const col of rows) {
		if(col > 2000)profitThanMore2000.push(col)
	}
}

document.write(`<p style="margin-bottom: 15px;">${profitThanMore2000}</p><hr style="background-color: #fff; height: 2px;">`)
//========================================================================================================================================================
// 2.7 відсортувати кожен тиждень за зростанням
document.write(`<p class="description">2.7)відсортувати кожен тиждень за зростанням</p>`)

let table2 = JSON.parse(JSON.stringify(table));

table2.sort((a,b) => {
	const sumA = a.reduce((acc,el) => acc + el ,0)
	const sumB = b.reduce((acc,el) => acc + el ,0)
	return sumA - sumB
})


document.write(`<p style="margin-bottom: 15px;">${table2}</p><hr style="background-color: #fff; height: 2px;">`)
//========================================================================================================================================================
// 2.8 відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
document.write(`<p class="description">2.8)відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків</p>`)

let table3 = JSON.parse(JSON.stringify(table));

table3.sort((a,b) => {
	const maxA = Math.max.apply(null, a);
	const maxB = Math.max.apply(null, b);
	maxB - maxA
})

document.write(`<p style="margin-bottom: 15px;">${table3}</p><hr style="background-color: #fff; height: 2px;">`)
//========================================================================================================================================================
// 2.9 упорядкувати тижні (рядки) за спаданням суми елементів у рядку 
//(тобто при порівнянні двох рядків треба знайти суму кожного з рядків і 
//порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів 
//повинен іти раніше).
document.write(`<p class="description">2.9)упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).</p>`)

//я скопировал решение с задачи 2.7 потому что я ту задачу решил так как должна решаться эта задача,
//я не совсем понял как я должен сортировать ряды в задаче 2.7 за каким критерием, поэтому решил сортировать по сумме и в итоге
//задача 2.7 и 2.9 решил одинаково
let table4 = JSON.parse(JSON.stringify(table));

table4.sort((a,b) => {
	const sumA = a.reduce((acc,el) => acc + el ,0)
	const sumB = b.reduce((acc,el) => acc + el ,0)
	return sumB - sumA
})

document.write(`<p style="margin-bottom: 15px;">${table4}</p><hr style="background-color: #fff; height: 2px;">`)