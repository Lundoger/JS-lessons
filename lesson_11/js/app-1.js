function getRandomNum(minValue, maxValue) {
	return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
function getRowForArray(elemQuantity, minValue, maxValue) {
  let row = []
  for (let i = 0; i < elemQuantity; i++) {
	  row.push(getRandomNum(minValue, maxValue))
  }
  return row
}
function arrayGeneration(rowQuantity, elemQuantity, minValue, maxValue) {
  let table = []
  for (let i = 0; i < rowQuantity; i++) {
	  table.push(getRowForArray(elemQuantity, minValue, maxValue))
  }
  return table
}
let table = arrayGeneration(4,4,1,20)
//========================================================================================================================================================
// 1.1 Знайти суми елементів у вказаній області

document.write(`<p class="description">1.1)Знайти суми елементів у вказаній області:<div style="max-width: 300px;" class="image"><img src="../img/Screenshot_1.png" alt=""></div></p>`)

let firstQuarterSum = 0
for (let rowI = 0; rowI < Math.floor(table.length/2); rowI++) {
	for (let colI = 0; colI < Math.floor(table[rowI].length/2); colI++) {
		firstQuarterSum += table[rowI][colI]
	}	
}
document.write(`<p style="margin-bottom: 15px;">${firstQuarterSum}</p><hr style="background-color: #fff; height: 2px;">`)

//========================================================================================================================================================
// 1.2 Знайти суми елементів у вказаній області

document.write(`<p class="description">1.2)Знайти суми елементів у вказаній області:<div style="max-width: 300px;" class="image"><img src="../img/Screenshot_2.png" alt=""></div></p>`)

let secondQuarterSum = 0
for (let rowI = 0; rowI < Math.floor(table.length/2); rowI++) {
	for (let colI = Math.floor(table[rowI].length/2); colI <  table[rowI].length; colI++) {
		secondQuarterSum += table[rowI][colI]
	}	
}
document.write(`<p style="margin-bottom: 15px;">${secondQuarterSum}</p><hr style="background-color: #fff; height: 2px;">`)

//========================================================================================================================================================
// 1.3 Знайти суми елементів у вказаній області

document.write(`<p class="description">1.3)Знайти суми елементів у вказаній області:<div style="max-width: 300px;" class="image"><img src="../img/Screenshot_3.png" alt=""></div></p>`)

let thirdQuarterSum = 0
for (let rowI = Math.floor(table.length/2); rowI < table.length; rowI++) {
	for (let colI = 0; colI <  Math.floor(table[rowI].length/2); colI++) {
		thirdQuarterSum += table[rowI][colI]
	}	
}
document.write(`<p style="margin-bottom: 15px;">${thirdQuarterSum}</p><hr style="background-color: #fff; height: 2px;">`)

//========================================================================================================================================================
// 1.4 Знайти суми елементів у вказаній області

document.write(`<p class="description">1.4)Знайти суми елементів у вказаній області:<div style="max-width: 300px;" class="image"><img src="../img/Screenshot_4.png" alt=""></div></p>`)

let fourthQuarterSum = 0
for (let rowI = Math.floor(table.length/2); rowI < table.length; rowI++) {
	for (let colI = Math.floor(table[rowI].length/2); colI <  table[rowI].length; colI++) {
		fourthQuarterSum += table[rowI][colI]
	}	
}
document.write(`<p style="margin-bottom: 15px;">${fourthQuarterSum}</p><hr style="background-color: #fff; height: 2px;">`)

//========================================================================================================================================================
//1.5 Знайти cуму парних рядків
document.write(`<p class="description">1.5)Знайти cуму парних рядків</p>`)

let evenRowsSum = 0
for (let rowI = 2; rowI < table.length; rowI+=2) {
	for (let colI = 0; colI < table[rowI].length; colI++) {
		evenRowsSum += table[rowI][colI]
	}
}
document.write(`<p style="margin-bottom: 15px;">${evenRowsSum}</p><hr style="background-color: #fff; height: 2px;">`)
//========================================================================================================================================================
//1.6 Знайти Суму непарних стовпців
document.write(`<p class="description">1.6)Знайти cуму непарних стовпців</p>`)

let oddRowsSum = 0
for (let rowI = 1; rowI < table.length; rowI+=2) {
	for (let colI = 0; colI < table[rowI].length; colI++) {
		oddRowsSum += table[rowI][colI]
	}
}
document.write(`<p style="margin-bottom: 15px;">${oddRowsSum}</p><hr style="background-color: #fff; height: 2px;">`)
//========================================================================================================================================================
//1.7 Знайти У парних рядках – непарні стовпці, у непарних – парні.
document.write(`<p class="description">1.7)Знайти y парних рядках – непарні стовпці, у непарних – парні</p>`)

let sumEvenRowsAndOddCol = 0
for (let rowI = 2; rowI < table.length; rowI+=2) {
	for (let colI = 1; colI < table[rowI].length; colI+=2) {
		sumEvenRowsAndOddCol += table[rowI][colI]
	}
}
document.write(`<p style="margin-bottom: 15px;">${sumEvenRowsAndOddCol}</p><hr style="background-color: #fff; height: 2px;">`)