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
	checkClickedValue();

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
		gridItem.classList.add(`${i}`);
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
function checkClickedValue() {
	const squares = document.querySelectorAll('.square');
	for (square of squares) {
		square.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			if (
				e.target.classList.contains('flag') ||
				e.target.classList.contains('checked')
			) {
				e.target.classList.remove('flag');
				newGame.bombFlags--;
			} else {
				e.target.classList.add('flag');
				newGame.bombFlags++;
			}
		});
	}
	for (square of squares) {
		square.addEventListener('click', (e) => {
			const indexClicked = Number(e.target.classList[1]);
			openRecursion(indexClicked);
		});
	}
}

function openRecursion(index) {
	const width = Math.sqrt(newGame.board.length);
	// const square = document.querySelector(`.${index}`);
	const squares = document.querySelectorAll('.square');
	if (
		squares[index].classList.contains('checked') ||
		squares[index].classList.contains('flag')
	) {
		return;
	}
	squares[index].classList.add('checked');
	if (newGame.board[index] === 'x') {
		const bombImg = document.createElement('img');
		bombImg.src = 'img/explosion.png';
		squares[index].appendChild(bombImg);
		// squares[index].style.backgroundColor = 'red';

		newGame.isGameOver = true;
		const checkedTotal = Array.from(squares).filter((square) =>
			square.className.includes('checked')
		).length;
		checkGameOver('lose', checkedTotal);
		return;
		//call function "lost"
	} else if (typeof newGame.board[index] === 'number') {
		squares[index].style.backgroundColor = '#ebebeb';
		squares[index].innerText = `${newGame.board[index]}`;
		//add checked to classlist
		if (squares[index].innerText === '1') {
			squares[index].style.color = 'green';
		}
		if (squares[index].innerText === '2') {
			squares[index].style.color = 'blue';
		}
		if (squares[index].innerText === '3') {
			squares[index].style.color = 'orange';
		}
	} else {
		setTimeout(() => {
			squares[index].style.backgroundColor = '#ebebeb';
			//DOM opening
			//edge conditions
			const rightEdge = index % width === width - 1;
			const leftEdge = index % width === 0;
			const topEdge = index - width < 0;
			const bottomEdge = index + width > width ** 2;
			//up left
			if (!topEdge && !leftEdge) {
				// open in DOM
				//call recursion surrounding
				openRecursion(index - width - 1);
			}
			// up
			if (!topEdge) {
				openRecursion(index - width);
			}
			//upper right
			if (!topEdge && !rightEdge) {
				openRecursion(index - width + 1);
			}
			//left
			if (!leftEdge) {
				openRecursion(index - 1);
			}
			// right
			if (!rightEdge) {
				openRecursion(index + 1);
			}
			//down left
			if (!bottomEdge && !leftEdge) {
				openRecursion(index + width - 1);
			}
			//down
			if (!bottomEdge) {
				openRecursion(index + width);
			}
			//down right
			if (!bottomEdge && !rightEdge) {
				openRecursion(index + width + 1);
			}
		}, 10);
	}
	//if unchecked boxes == bombs newGame.gameIsOver = true
	//squares
	console.log(
		Array.from(squares).filter((square) => square.className.includes('checked'))
			.length
	);
	if (
		newGame.board.length -
			Array.from(squares).filter((square) =>
				square.className.includes('checked')
			).length ===
		newGame.bombs
	) {
		const checkedTotal = Array.from(squares).filter((square) =>
			square.className.includes('checked')
		).length;
		checkGameOver('win', checkedTotal);
	}
}

function checkGameOver(condition, amount) {
	if (condition === 'win') {
		const gameOverModal = document.querySelector('.gameOverModal');
		gameOverModal.classList.remove('hidden');

		const amountEl = document.createElement('h3');
		amountEl.innerText = `You dodged ${newGame.bombs} bombs!`;
		gameOverModal.prepend(amountEl);

		const loserText = document.createElement('h2');
		loserText.innerText = 'YOU WIN!';
		gameOverModal.prepend(loserText);
		return;
	} else if (condition === 'lose') {
		const gameOverModal = document.querySelector('.gameOverModal');
		gameOverModal.classList.remove('hidden');

		const amountEl = document.createElement('h3');
		amountEl.innerText = `You cleared ${amount - 1}/${
			newGame.board.length - newGame.bombs
		} possible areas!`;
		gameOverModal.prepend(amountEl);

		const loserText = document.createElement('h2');
		loserText.innerText = 'YOU LOST!';
		gameOverModal.prepend(loserText);
		return;
	}
}

window.onload = createMineSweeper();
btnGenerateBoard.addEventListener('click', createMineSweeper);

const restartBtn = document.querySelector('.restartBtn');

restartBtn.addEventListener('click', () => {
	const gameOverModal = document.querySelector('.gameOverModal');
	gameOverModal.classList.add('hidden');
	location.reload();
});

// Create board on page load (board is by default going to be 9x9)

// window.addEventListener('load', createMineSweeper);

//Button for testing purposes
// document.querySelector('.test').addEventListener('click', tester);
// function tester() {
// 	const bombs = document.getElementById('selectLevel').value;
// 	console.log(bombs);
// }
