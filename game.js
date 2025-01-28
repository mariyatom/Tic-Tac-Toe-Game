console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let noughtsTurn
let gameIsOver
startGame()
let cells = document.getElementsByTagName('TD')

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

document.getElementById('restartButton').onclick = restartGame

// Define sound effects
const clickSound = new Audio('/assets/click.mp3')
const winSound = new Audio('/assets/win.mp3')
const stalemateSound = new Audio('/assets/stalemate.mp3')

function startGame() {
  // Randomly set the first player to either X or O
  noughtsTurn = Math.random() < 0.5

  gameIsOver = false

  // Set the initial subtitle with the randomly chosen first player
  document.getElementById('subtitle').textContent = `Turn: ${
    noughtsTurn ? 'O' : 'X'
  }`
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
  if (gameIsOver) return
  let cell = e.target
  if (cell.innerHTML != '') {
    return // cell is already filled, do nothing more with this click event.
  }
  let symbol = noughtsTurn ? 'O' : 'X'
  cell.innerHTML = symbol
  clickSound.play()
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
    winSound.play()
    return
  }

  checkForStaleMate()
}

function checkForStaleMate() {
  let filledCells = 0
  Array.from(cells).forEach((cell) => {
    if (cell.innerHTML !== '') {
      filledCells++
    }
  })

  if (filledCells === cells.length && !gameIsOver) {
    gameIsOver = true
    document.getElementById('subtitle').textContent = 'STALEMATE! '
    stalemateSound.play()
    return
  }
}

//Restart functionality
function restartGame() {
  Array.from(cells).forEach((cell) => {
    cell.innerHTML = ''
  })

  startGame()
}
