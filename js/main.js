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
	// newGame.board = boardSize;
	newGame.level = level;
	amountOfBombs(newGame.level, newGame.board);
	// newGame.startGame();
	placeBombs(newGame.board, newGame.bombs);

	console.log(newGame.board);
	console.log(newGame.level);
	console.log(newGame.bombs);
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

btnGenerateBoard.addEventListener('click', createMineSweeper);

//Button for testing purposes
// document.querySelector('.test').addEventListener('click', tester);
// function tester() {
// 	const bombs = document.getElementById('selectLevel').value;
// 	console.log(bombs);
// }
