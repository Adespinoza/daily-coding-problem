/**
 * Start with live cells. At each step, go through one iteration of life and prints the board
 * @param {number[][]} liveCells
 * @param {number} iterations
 */
function simulateGameOfLife(liveCells, iterations) {
	// Print current board configuration
	printBoard(liveCells);

	for (var i = 0; i < iterations; i++) {
		// Move live cells
		liveCells = moveCells(liveCells);
		// Print new iteration
		printBoard(liveCells);
	}
}

/**
 * Prints the board at this state
 * @param {number[][]} liveCells
 */
function printBoard(liveCells) {
	// Base case array
	if (liveCells.length === 0) {
    	console.log('.');
    	return;
  	}

  	// Configure board length and width
  	const board = configureBoard(liveCells);

  	// Iterate and print cells
  	let newBoard = '';
  	for (let r = 0; r < board.length; r++) {
  		const row = board[r];
  		newBoard += `${row.join(' ')}\n`;
  	}

  	console.log(newBoard);
}

/**
 * Returns a board with liveCells
 * @param {number[][]} liveCells
 * @return {string[][]}
 */
function configureBoard(liveCells) {
	let xMax = Number.MIN_SAFE_INTEGER;
	let yMax = Number.MIN_SAFE_INTEGER;

	// Find maximum x and y board values
	for (let i = 0; i < liveCells.length; i++) {
		const [x, y] = liveCells[i];
		xMax = Math.max(xMax, x);
		yMax = Math.max(yMax, y);
	}

	// Create board with text values
	const board = [...Array(xMax + 1)].map(() => Array(yMax + 1).fill('.'));
	for (let i = 0; i < liveCells.length; i++) {
		const [x, y] = liveCells[i];
		board[x][y] = '*';
	}

	return board;
}

/**
 * Go through one cycle of life
 * @param {number[][]} liveCells
 * @return {number[][]}
 */
function moveCells(liveCells) {
	// Configure current board length and width
	const board = configureBoard(liveCells);
	const newLiveCells = [];
	const dir = [
		[-1, -1],
	    [-1, 0],
	    [-1, 1],
	    [0, -1],
	    [0, 1],
	    [1, -1],
	    [1, 0],
	    [1, 1]
    ];

    // Iterate through rows and cols
    for (let r = 0; r < board.length; r++) {
    	for (let c = 0; c < board[r].length; c++) {
    		let aliveNeighbors = 0;
    		// Check all possible directions 
    		for (let i = 0; i < dir.length; i++) {
    			const cellR = r + dir[i][0];
    			const cellC = c + dir[i][1];
    			if (
    				cellR >= 0 &&
    				cellC >= 0 &&
    				cellR < board.length &&
    				cellC < board[0].length &&
    				board[cellR][cellC] === '*'
    				) {
    				aliveNeighbors++;
    		}
    	}

    	if (aliveNeighbors === 3) newLiveCells.push([r, c]);

    	const alive = board[r][c] === '*';
    	if (alive && aliveNeighbors === 2) newLiveCells.push([r, c]);
    	}
	}

	return newLiveCells;
}