// Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 
// 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не 
// потоплено усі кораблі або у користувача не закінчаться снаряди.
//========================================================================================================================================================
//1)генерация поля(6х6) заполненого нулями

function getRowForArray(elemQuantity) {
  let row = []
  for (let i = 0; i < elemQuantity; i++) {
	  row.push(0)
  }
  return row
}
function arrayGeneration(rowQuantity, elemQuantity) {
  let table = []
  for (let i = 0; i < rowQuantity; i++) {
	  table.push(getRowForArray(elemQuantity))
  }
  return table
}
//========================================================================================================================================================
//2)создание нужных переменных и функций

function getRandomNum(minValue, maxValue) {
	return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

let table = arrayGeneration(6,6)
let shipQuantity = parseInt(prompt('Введите к-тво кораблей', 2))
let shellsQuantity = parseInt(prompt('Введите к-тво снарядов', 2))
//========================================================================================================================================================
//3)генерация поля с кораблями

function generationShip(table, shipQuantity) {
	let shipCount = 0
	while(shipCount < shipQuantity) {
		let shipPositionX = getRandomNum(0,5)
		let shipPositionY = getRandomNum(0,5)
		if(table[shipPositionY][shipPositionX] === 0) {
			table[shipPositionY][shipPositionX] = 1
			shipCount++
		}
	}

	return table
}

let playingField = generationShip(table, shipQuantity)
//========================================================================================================================================================
//4)функционал игры

while(shellsQuantity > 0 && shipQuantity > 0) {
	const allegedShipPositionX = parseInt(prompt('Введите координату корабля по оси Х', 1))
	const allegedShipPositionY = parseInt(prompt('Введите координату корабля по оси Y', 1))

	if(playingField[allegedShipPositionY][allegedShipPositionX] === 1) {
		shipQuantity--
		playingField[allegedShipPositionY][allegedShipPositionX] = 0
		alert(`Вы потопили корабль, кораблей осталось: ${shipQuantity}`)
	}else if(playingField[allegedShipPositionY][allegedShipPositionX] === 0) {
		alert(`Промах, кораблей осталось: ${shipQuantity}`)
	}
	shellsQuantity--
}
//========================================================================================================================================================
//5)вывод результата

if(shipQuantity === 0) alert('Игра окончена, вы победили!!!')
else if(shipQuantity > 0) alert('Игра окончена, вы проиграли(')