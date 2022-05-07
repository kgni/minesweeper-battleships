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
	constructor(board, bombs) {
		this.board = board;
		this.bombs = bombs;
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
		// get input value for boardsize
		//  - generate array of arrays, and fill with empty string
		//  - randomize bombplacements and insert into array positions
		//  - generate numbers for if you are close to a bomb or not
		//  - insert board into DOM.
		// Generate
	}
	reset() {}
}

const test = new MineSweeper(2);

const btnGenerateBoard = document.querySelector('.btnGenerateBoard');
btnGenerateBoard.addEventListener('click', (e) => {
	console.log(e);
});
// function factorialize(num) {
//     if (num <= 1)
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
//   factorialize(5);

// 0! = 1
// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1
