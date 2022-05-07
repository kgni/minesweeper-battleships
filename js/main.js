// Input for size of board, that takes a number and creates a nested array with that size, and also inserts grid elements into the DOM.

// Difficulty drop down list which gives option on how difficult game is (amount of bombs)

//Timer starts on first click

//Bombflags amount of (flags === bombs) rightclick

class Game {
	constructor(board) {
		this.board = board;
		this.isGameOver = false;
	}
}
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
