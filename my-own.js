// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let playerTurn = 'X';

// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const horizontalWin = () => {
  for (let i=0;i<3;i++) {
    // console.log(board[i])
    if (board[i][0] == [playerTurn] && board[i][1] == [playerTurn] && board[i][2] == [playerTurn]) {
      return true
    } 
  }
  return false
}
const verticalWin = () => {
  for (let i=0;i<3;i++) {
    // console.log(board[i])
    if (board[0][i] == [playerTurn] && board[1][i] == [playerTurn] && board[2][i] == [playerTurn]) {
      return true
    } 
  }
  return false
}
const diagonalWin = () => {
  if (board[0][0] == [playerTurn] && board[1][1] == [playerTurn] && board[2][2] == [playerTurn]) {
    return true
  } else if (board[0][2] == [playerTurn] && board[1][1] == [playerTurn] && board[2][0] == [playerTurn]) {
    return true
  } 
  return false
}
const checkForWin = () => {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    return true
  }
  return false
}

const ticTacToe = (row, column) => {
  board[row][column] = playerTurn

  
  // Your code here to place a marker on the board
  // then check for a win
}

const swapTurn = () => {
  if (playerTurn == "X") {
    playerTurn = "O"
  } else {
    playerTurn = "X"
  }
}

const handleClick = (selected) => {
  document.getElementById(selected).innerHTML = playerTurn
  selected = selected.split("-")
  ticTacToe(selected[0],selected[1])
  if (checkForWin()) {
    window.alert("Winner is: " + playerTurn)
  } 
  swapTurn()
}

const resetBoard = () => {
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  playerTurn = 'X'
  squares = document.getElementsByTagName("td")
  for (square of squares) {
    square.innerHTML = ""
  }
}