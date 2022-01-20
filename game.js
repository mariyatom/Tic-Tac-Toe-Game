// // -- START GAME -- //

// // run the startGame function once our html is fully loaded
// window.addEventListener('DOMContentLoaded', startGame)

// // define an array to contain all our cells
// let cells = []

// // define a variable to keep track of the players turn
// let noughtsTurn

// function startGame() {
//   // populate the cells array with all the TD cells
//   cells = document.getElementsByTagName("TD")

//   // bind the cellClicked function to all the cells onclick
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].onclick = cellClicked
//   }

//   // pick a random starting player (50/50 chance)
//   noughtsTurn = Math.random() > 0.5

//   // update the UI to display which player starts
//   let headerStr = getCurrentPlayerSymbol() + "'S TURN"
//   updateheaderText(headerStr)
// }

// // -- TAKING TURNS -- // 

// // function for handling clicks on cells
// function cellClicked(e) {
//   // create a variable for the clicked cell
//   let cell = e.target

//   // only put something in the cell if it's empty and the game is still going 
//   if (cell.innerHTML == "" && !gameIsOver)
//   {
//     // put the symbol inside the cell
//     let symb = noughtsTurn ? "O" : "X"
//     cell.innerHTML = symb

//     // check to see if the player won with the move
//     checkForWin(symb)

//     // if the game is still going
//     if (!gameIsOver)
//     {
//       // switch which players turn it is
//       noughtsTurn = !noughtsTurn

//       // and update the header text
//       let headerStr = getCurrentPlayerSymbol() + "'S TURN"
//       updateheaderText(headerStr)
//     }
//   }
// }

// // -- HEADER TEXT -- //

// // get a reference to the header html element
// let headerText = document.getElementById("header-text")

// // function for getting the player turn string
// function getCurrentPlayerSymbol () {
//   return noughtsTurn ? "O" : "X"
// }

// // function to call when updating the header text
// function updateheaderText(str) {
//   headerText.innerHTML = str
// }

// // -- WINNING / STALEMATES -- //

// // variable for tracking if the game is over
// let gameIsOver = false

// // function for checking all the possible win conditions
// function checkForWin(symb) {

//   // HORIZONTAL LINES //
//   if (cells[0].innerHTML == symb && cells[1].innerHTML == symb && cells[2].innerHTML == symb)
//     gameIsOver = true

//   else if (cells[3].innerHTML == symb && cells[4].innerHTML == symb && cells[5].innerHTML == symb)
//     gameIsOver = true

//   else if (cells[6].innerHTML == symb && cells[7].innerHTML == symb && cells[8].innerHTML == symb)
//     gameIsOver = true

//   // VERTICAL LINES //
//   else if (cells[0].innerHTML == symb && cells[3].innerHTML == symb && cells[6].innerHTML == symb)
//     gameIsOver = true
    
//   else if (cells[1].innerHTML == symb && cells[4].innerHTML == symb && cells[7].innerHTML == symb)
//     gameIsOver = true

//   else if (cells[2].innerHTML == symb && cells[5].innerHTML == symb && cells[8].innerHTML == symb)
//     gameIsOver = true

//   // DIAGONAL LINES //
//   else if (cells[0].innerHTML == symb && cells[4].innerHTML == symb && cells[8].innerHTML == symb)
//     gameIsOver = true
    
//   else if (cells[2].innerHTML == symb && cells[4].innerHTML == symb && cells[6].innerHTML == symb)
//     gameIsOver = true

//   // if we found three of the same symbol in a row, the game is over
//   if (gameIsOver)
//   {
//     // update the header text with the winner
//     let winnerStr = getCurrentPlayerSymbol() + " WON THE GAME!"
//     updateheaderText(winnerStr)
  
//   // if nobody won, check to see if it is a stalemate
//   } else {
//     checkForStalemate()
//   }

//     // -- STALEMATE -- //

//     function checkForStalemate() {
//       // assume it's going to be a stalemate until proven otherwise
//       let isStalemate = true;

//       for (let i = 0; i < cells.length; i++) {
//         // define a variable for the current cell in the loop
//         let cell = cells[i]

//         // if we find an empty cell, it is not a stalemate
//         if (cell.innerHTML == "") {
//           isStalemate = false
//         }
//       }

//       // if it is a stalemate, update the header text
//       if (isStalemate)
//       {
//         gameIsOver = true
//         updateheaderText("UH OH! STALEMATE!")
//       }
//     }

//     function sayHello () {
//         console.log("hello")
//     }
// }

// LANI'S BARE MINIMUM MVP HACKED TOGETHER SPECIAL TIC-TAC-TOE

// PASTED FROM INSTRUCTIONS
let cells = document.getElementsByTagName("TD")

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

// HINT IS IN SPRINT 3, SHOULD WE LINK TO SPRINT 3 IN README?
let headerText = document.getElementById("header-text")

function updateheaderText(str) {
  headerText.innerHTML = str
  console.log(str)
}

let noughtsTurn = false

// // TERNARY IS BESY
// function getCurrentPlayerSymbol () {
//   return noughtsTurn ? "O" : "X"
// }

// IF, TRYING AS STUDENTS LIKELY TO DO THIS
function getCurrentPlayerSymbol () {
  if (noughtsTurn) {
    return "O" }
  else return "X"
}

// SMALL AMOUNT PASTED IN, NOT TOO HARD, JUST LOOKS A MESS, TRYING TO KEEP OT STUDENTY
let gameIsOver = false

function cellClicked(e) {
  let cell = e.target

  if (cell.innerHTML == "" && !gameIsOver) {
    let symb = getCurrentPlayerSymbol()
    cell.innerHTML = symb
    checkForWin(symb)
    if (!gameIsOver) {
      noughtsTurn = !noughtsTurn
      let headerStr = getCurrentPlayerSymbol() + "'S TURN"
      updateheaderText(headerStr)
    }
  }
}

// PASTED, OUTLINED IN INSTRUCTIONS WELL, THE DIAGRAM HELPS IMMENSELY
function checkForWin(symb) {

  if (cells[0].innerHTML == symb && cells[1].innerHTML == symb && cells[2].innerHTML == symb)
      gameIsOver = true

  else if (cells[3].innerHTML == symb && cells[4].innerHTML == symb && cells[5].innerHTML == symb)
      gameIsOver = true

  else if (cells[6].innerHTML == symb && cells[7].innerHTML == symb && cells[8].innerHTML == symb)
      gameIsOver = true

  else if (cells[0].innerHTML == symb && cells[3].innerHTML == symb && cells[6].innerHTML == symb)
  gameIsOver = true

  else if (cells[1].innerHTML == symb && cells[4].innerHTML == symb && cells[7].innerHTML == symb)
  gameIsOver = true

  else if (cells[2].innerHTML == symb && cells[5].innerHTML == symb && cells[8].innerHTML == symb)
  gameIsOver = true

  else if (cells[0].innerHTML == symb && cells[4].innerHTML == symb && cells[8].innerHTML == symb)
  gameIsOver = true

  else if (cells[2].innerHTML == symb && cells[4].innerHTML == symb && cells[6].innerHTML == symb)
  gameIsOver = true

  if (gameIsOver) {
    let winnerStr = getCurrentPlayerSymbol() + " WON THE GAME!"
    updateheaderText(winnerStr)
  }
}

