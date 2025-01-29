console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let noughtsTurn
let gameIsOver
let xWins = 0
let oWins = 0
let tieStalemate = 0
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

/** create a variable for the clicked cell so I can do stuff with it
 * if the cell is empty (check it's .innerHTML property)
 * figure out which symbol to put inside the cell ("O" or "X" based on the naughtsTurn boolean)
 * put the symbol inside the cell (by using .innerHTML again)
 * check to see if the player won with that move (probably using a new function, like checkForWin() which I'll need to write later)
 * if the game isn't over
 * switch to the other player (using the naughtsTurn boolean again)
 * update the subtitle saying whose turn it is now */
function cellClicked(e) {
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
// if a symbol appears three times in a row in the board cells i.e. a winning line
// either horizontally, vertically, OR diagonally
// the game is over
// if the game is over
// update the subtitle with the winner
function checkForWin(symbol) {
  let wonCombination = null

  const gameWinPatterns = [
    [0, 1, 2], // Horizontal
    [3, 4, 5], // Horizontal
    [6, 7, 8], // Horizontal
    [0, 3, 6], // Vertical
    [1, 4, 7], // Vertical
    [2, 5, 8], // Vertical
    [0, 4, 8], // Diagonal
    [2, 4, 6], // Diagonal
  ]
  for (let pattern of gameWinPatterns) {
    let [a, b, c] = pattern

    if (
      cells[a].textContent === symbol &&
      cells[b].textContent === symbol &&
      cells[c].textContent === symbol
    ) {
      gameIsOver = true
      wonCombination = [cells[a], cells[b], cells[c]]
    }
  }

  if (gameIsOver && wonCombination) {
    wonCombination.forEach((cell) => cell.classList.add('winning-cell'))
    // update the subtitle with the winner
    document.getElementById(
      'subtitle'
    ).textContent = `The game is over, ${symbol} WON!`
    winSound.play()

    if (symbol === 'X') {
      xWins++
    } else {
      oWins++
    }
    // Display the win tally
    document.getElementById('xWins').textContent = `${xWins}`
    document.getElementById('oWins').textContent = `${oWins}`
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
    tieStalemate++
    document.getElementById('tie-stalemate').textContent = `${tieStalemate}`
    return
  }
}

//Restart functionality
function restartGame() {
  Array.from(cells).forEach((cell) => {
    cell.innerHTML = ''
    cell.classList.remove('winning-cell')
  })

  startGame()
}
