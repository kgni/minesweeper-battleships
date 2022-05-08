// Input for size of board, that takes a number and creates a nested array with that size, and also inserts grid elements into the DOM.

// Difficulty drop down list which gives option on how difficult game is (amount of bombs)

//Timer starts on first click

//Bombflags amount of (flags === bombs) rightclick

// class Game {
// 	constructor() {
// 		this.board = [];
// 		this.isGameOver = false;
// 	}
// 	renderClick() {

//   }
// 	checkGameOver() {}
// 	reset() {}
// }

class MineSweeper {
	constructor(board, level) {
		this.board = board;
		this.level = level;
		this.bombs = 0;
		this.bombFlags = 0;
		this.isGameOver = false;
	}

	renderClick() {
		// eventlistener on target, validation if bomb or not
		//  - if not bomb ('empty string') - recursion -
		// - if number - display num in dom
		//  - if bomb different image - isGameOver = true
		// - rightclick place bombflag (update bombflag)
	}
	checkGameOver() {}

	createBoard() {
		this.board = Array(inputBoardSize.value ** 2).fill('');
		this.bombs;
		// get input value for boardsize
		//  - generate array of arrays, and fill with empty string
		//  - randomize bombplacements and insert into array positions
		//  - generate numbers for if you are close to a bomb or not
		//  - insert board into DOM.
		// Generate
	}
	renderBoard() {}
	reset() {}
}

const btnGenerateBoard = document.querySelector('.btnGenerateBoard');
//bombs get values
// let bombs = document.getElementById('selectLevel').value;

// console.log(bombs);

//get board size define it
// let boardSize = document.querySelector('.inputBoardSize').value;

const newGame = new MineSweeper(0, '');

function createMineSweeper() {
	const level = document.getElementById('selectLevel').value;
	const boardSize = document.querySelector('.inputBoardSize').value;
	if (boardSize == Number(boardSize)) {
		newGame.board = Array(Number(boardSize ** 2)).fill('');
	} else {
		alert('Board size has to be a number');
		throw Error('Board size has to be a number');
	}

	newGame.level = level;
	amountOfBombs(newGame.level, newGame.board);
	placeBombs(newGame.board, newGame.bombs);
	populateWithNumbers();
	renderBoard();

	console.log(newGame.board);
	console.log(newGame.level);
	console.log(newGame.bombs);
	// newGame.startGame();
}

function amountOfBombs(level, boardArr) {
	const board = boardArr.length;
	switch (level) {
		case 'easy':
			newGame.bombs = Math.ceil(board / 10);
			break;
		case 'medium':
			newGame.bombs = Math.ceil(board / 7);
			break;
		case 'hard':
			newGame.bombs = Math.ceil(board / 4);
			break;
		case 'insane':
			newGame.bombs = Math.ceil(board / 2);
			break;
		case 'nightmare':
			newGame.bombs = board - 1;
			break;
	}
}

function placeBombs(array, bombs) {
	while (bombs > 0) {
		let num = Math.floor(Math.random() * array.length);
		if (array[num] === '') {
			array[num] = 'x';
			bombs--;
		}
	}
}

function renderBoard() {
	// input value = attribute style for grid-columns & grid-rows
	const size = Math.sqrt(newGame.board.length);
	const string = '1fr '.repeat(size);
	console.log(string);
	const boardContainer = document.querySelector('.boardContainer');
	while (boardContainer.lastChild) {
		boardContainer.removeChild(boardContainer.lastChild);
	}
	boardContainer.style.gridTemplateColumns = `${string}`;
	boardContainer.style.gridTemplateRows = `${string}`;

	for (let i = 0; i < newGame.board.length; i++) {
		const gridItem = document.createElement('div');
		gridItem.classList.add('square');
		gridItem.classList.add(`${i}}`);
		boardContainer.appendChild(gridItem);
	}
	boardContainer.style.display = 'grid';
}

//populate array with numbers adjacent to bombs
//bomb in 8 squares surrounding add change array[index] = num  of bombs
function populateWithNumbers() {
	const width = Math.sqrt(newGame.board.length);
	for (let i = 0; i < newGame.board.length; i++) {
		if (newGame.board[i] !== 'x') {
			let bombs = 0;
			//upper left
			if (newGame.board[i - width - 1] === 'x' && i % width !== 0) {
				bombs++;
			}
			// left
			if (newGame.board[i - width] === 'x') {
				bombs++;
			}
			//upper right
			if (newGame.board[i - width + 1] === 'x' && i % width !== width - 1) {
				bombs++;
			}
			//left
			if (newGame.board[i - 1] === 'x' && i % width !== 0) {
				bombs++;
			}
			// right
			if (newGame.board[i + 1] === 'x' && i % width !== width - 1) {
				bombs++;
			}
			//down left
			if (newGame.board[i + width - 1] === 'x' && i % width !== 0) {
				bombs++;
			}
			//down
			if (newGame.board[i + width] === 'x') {
				bombs++;
			}
			//down right
			if (newGame.board[i + width + 1] === 'x' && i % width !== width - 1) {
				bombs++;
			}
			if (bombs > 0) {
				newGame.board[i] = bombs;
			}
		}
	}
}

//check clicked box (bomb), (empty) or (number for showing if a bomb is adjacent)
// function checkClickedValue(){
// 	if()
// }

// Create board on page load (board is by default going to be 9x9)
window.onload = createMineSweeper();
// window.addEventListener('load', createMineSweeper);
btnGenerateBoard.addEventListener('click', createMineSweeper);

//Button for testing purposes
// document.querySelector('.test').addEventListener('click', tester);
// function tester() {
// 	const bombs = document.getElementById('selectLevel').value;
// 	console.log(bombs);
// }
