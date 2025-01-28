console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let noughtsTurn = true

let gameIsOver = false

let cells = document.getElementsByTagName('TD')
// function sayHello() {
//   console.log('hello')
// }

// cells[0].onclick = sayHello

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  // create a variable for the clicked cell so I can do stuff with it

  // if the cell is empty (check it's .innerHTML property)

  // figure out which symbol to put inside the cell ("O" or "X" based on the naughtsTurn boolean)

  // put the symbol inside the cell (by using .innerHTML again)

  // check to see if the player won with that move (probably using a new function, like checkForWin() which I'll need to write later)

  // if the game isn't over

  // switch to the other player (using the naughtsTurn boolean again)

  // update the subtitle saying whose turn it is now
  let cell = e.target
  console.log('i clicked on: ' + cell)
  if (cell.innerHTML != '') {
    return // cell is already filled, do nothing more with this click event.  This prevents the game from crashing when the same cell is clicked twice.  It also prevents the same player from making the same move twice.  You can add more checks here if you want to.  For example, you could check if the clicked cell is already the winner's cell.  But for this simple game, we'll assume that the winning condition is just when all cells are filled with either "O" or "X".  If you want to add more complex win conditions, you'd need to modify this function accordingly.  You'd also need to add more cells to the board and check for the win condition in those cells as well.  Finally, you'd also need to add the winning condition to the checkForWin() function.  But that's a lot of work for a simple game.  For a simple game like this, it's usually easier to just
  }
  let symbol = noughtsTurn ? 'O' : 'X'
  cell.innerHTML = symbol
  checkForWin(symbol)
  if (!gameIsOver) {
    noughtsTurn = !noughtsTurn
    document.getElementById('subtitle').textContent = `Turn: ${
      noughtsTurn ? 'O' : 'X'
    }`
  }
}

/// check to see if the player won with the move
function checkForWin(symbol) {
  // if a symbol appears three times in a row in the board cells i.e. a winning line
  // either horizontally, vertically, OR diagonally
  // the game is over
  // if the game is over
  // update the subtitle with the winner
  //-------------------------------
  // HORIZONTAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // VERTICAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  ) {
    gameIsOver = true
  }

  // DIAGONAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  ) {
    gameIsOver = true
  }
  // ...

  if (gameIsOver) {
    // update the subtitle with the winner
    document.getElementById(
      'subtitle'
    ).textContent = `The game is over, ${symbol} WON!`
  }
}
