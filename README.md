---
title: Tic Tac Toe
---
 
## Learning Competencies
- Further your understanding of how and when to use:
    - Variables
    - Arrays
    - Functions
    - Loops
    - Conditional Statements
    - Event Listeners
- Create multiple small functions
- Debug code you have written
- Practice working with more complex algorithms
- Know when to ask for help, and don't stay stuck for too long
 
## Summary
 
Today we're going to build an all time classic game! All the coding practice you have done so far in sprints 3 and 4 has been fairly on the rails, so in this challenge we're going to give you a blank page and more freedom to tackle the problem in your own way. This is an exercise in problem solving and algorithmic thinking. The README will provide step by step instructions for _a_ possible solution.. but! As always with programming, there are a million different ways you could build Tic Tac Toe. If you have a little programming experience already and want to go off the beaten path to solve this challenge- go for it.
 
## See it in action
 
If somehow you have made it this far in life without encountering Tic Tac Toe (AKA Noughts and Crosses), you can check it out [here](https://playtictactoe.org/).
 
## Timebox
 
Challenge | Time|
------------|----------|
Tic Tac Toe | 10-15 hours
Reflect | 20 minutes
 
## Set up
 
1. Create a fork of the [tic-tac-toe repo.](https://github.com/dev-academy-challenges/tic-tac-toe)
 
2. Clone your copy of the forked repository down using `git clone https://github.com/your-name/tic-tac-toe` (replacing your-name with your GitHub account name).
 
3. Navigate into the tic-tac-toe directory and open it in your code editor. You'll see a CSS file, a JavaScript file, and an HTML file. The only thing we've done is create the board using an HTML table, give it a header, and add a little bit of styling to get it looking pretty. The Javascript is all you!
 
## Let's do it!
 
Here is an overview of things that the finished Tic Tac Toe game will need. We'll tackle them one by one.
 
- An array containing all the squares on the board. We'll need this to get the Xs and Os displaying on the page, and also to check and see if anyone has won.
- The ability to click the squares (which are HTML `TD` elements) and put either an X or an O into them.
- A boolean to keep track of whose turn it is, X or O, and logic to switch turns once a player makes a move.  
- A way to display whose turn it is at the top of the page.
- A function for checking to see if anyone has won. IE, the same symbol 3 times horizontally, vertically or diagonally. (This is the hard bit).
- Logic to display "___ WON!" at the top of the page when someone wins.
 
## An array of TDs (AKA the squares / cells in the board)
An [HTML Table](https://www.w3schools.com/html/html_tables.asp) is a fairly common way of displaying spread-sheety data on the web. It has `TR` children elements, which is short for 'Table Row'. Those `TR` elements in turn have `TD` children elements. TD is short for `Table Data` and it's the part we're really interested in here. Our board for Tic Tac Toe is nine `TD` elements. As with all HTML elements, we can access and edit their properties using Javascript.
 
For example, if I had a variable representing a particular cell (`TD`) in an HTML table, I could edit what is inside the cell by accessing it's `.innerHTML` property like this:
 
`myCell.innerHTML = "X"` or `myCell.innerHTML = "O"`
 
Which is the equivalent of `<td>X</td>` or `<td>O</td>` if we were writing it straight into the HTML file.
`.innerHTML` literally just means "what is inside the html tag".
 
So that's great. Now we know how to put Xs or Os into any particular cell, but how do we know _which_ cell to put them into, and when it should happen?
This is where the _array of cells_ we mentioned earlier comes in. If we had an array of all the TD elements, we could "bind a function to their onclick method"- which is just a complicated way of saying "when I click on something, something happens".
 
So how do we get the array of all the cells? Luckily, this is a pretty common desire. You've probably seen `document.getElementById()` before, which we can use to get back a single HTML element using its ID. There is another handy method, called [document.getElementsByTagName()](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp), which will give us back _an array of every element of a certain type_. IE, give me all the `<p>` tags, or all the `<h1>` tags.
 
Using this method, we can create a new array of all the `<td>` tags like so:
`let cells = document.getElementsByTagName("TD")`
 
And boom, we've got our cells.
 
## Binding the onclick methods (AKA 'when I click on something, something happens')
 
Every HTML element has a secret `.onclick` method. They all start empty, but you can tell them to do anything you fancy. For example, put the following code into your `game.js` file:
 
```game.js
let cells = document.getElementsByTagName("TD")
 
function sayHello () {
    console.log("hello")
}
 
cells[0].onclick = sayHello
 
```
 
Open up the `index.html` file in your browser and click on the top left square of the board.
If you open your browser developer tools, in the Console tab you should see the "hello" message printing.
 
"Woohoo!". Now, if you really wanted to, you could put this into your `game.js` file:
 
```game.js
cells[0].onclick = sayHello
cells[1].onclick = sayHello
cells[2].onclick = sayHello
cells[3].onclick = sayHello
cells[4].onclick = sayHello
cells[5].onclick = sayHello
cells[6].onclick = sayHello
cells[7].onclick = sayHello
cells[8].onclick = sayHello
```
 
Isn't it beautiful? No; that was a trick question. It is not beautiful. [Don't repeat yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).
Whenever you find yourself doing something over and over again, what you _really_ want is a Loop. The computer does the loops- you do not do the loops.
Something we know about loops is that they have an "Iterator" (`let i = 0`) which represents how many times we have been through the loop. The iterator increases each time we finish a cycle of the loop (`i++`) until it surpasses some kind of limit (`i < cells.length`) and then the loop stops.
 
So because we know the iterator starts at 0, and then becomes 1, 2, 3, 4, 5, etc. We can use it to bind the onclick method to all of our cells in a single line of looped code:
 
```game.js
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = sayHello
}
```
 
Isn't it beautiful? Yes; that was not a trick question. But we're meant to be playing _Tic Tac Toe_ here, not saying hello. Next we're going to look at keeping track of whose turn it is, and actually putting the Xs or Os into the cells.
 
## keeping track of the turns
 
This step isn't going to be too tricky. It's either going to be O's turn, or it's not. True or false! Sounds like a boolean. It might look something like:
 
`let noughtsTurn = true`  
 
Now every time someone makes a move, all we need to do is toggle that variable state to keep track of the next player's turn. *Tip! You can toggle a boolean "on and off" with this nifty hack:
 
`noughtsTurn = !noughtsTurn`
 
If it's true, that line will set it false, if it's false, it will set it true!
But where is that going to happen? It needs to happen every time a player clicks on a cell, but _only_ if it's a valid move. IE, a cell that doesn't already have an X or an O in it. Let's dive into that now.
 
## The cellClicked() function
 
Now we're going to write the _real_ function that will execute when you click on a cell. No more of this sayHello business. In programming there is a concept called a ["stub"](https://en.wikipedia.org/wiki/Method_stub). As with so many things in the coding world, "stub" can mean a few different (but similar) things. In this context, "stub" refers to a function that will _eventially_ do what you want it to do, but in the meantime acts as a placeholder of sorts. It might look like:
 
```game.js
function cellClicked(e) {
 
    let cell = e.target
    console.log("i clicked on: " + cell)
 
}
```
 
Then, back inside your loop from earlier, you would replace `onclick = sayHello` with `onclick = cellClicked`. This is another reason why [DRY code](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) is best. Instead of having to remember and find every time you bound the onclick method, changing that single line in the loop changes it for every cell on the board.
 
Now you might be wondering, what is going on with that `(e)` argument, and what is `e.target`? The `e` stands for event, it is a secret argument that Javascript _automatically_ slips into every function executed by an `.onclick` method. It's a little sneaky, because it happens magically behind the scenes. You can read more about [DOM events here](https://www.w3schools.com/jsref/dom_obj_event.asp). But the TL;DR of the situation is that they are **huge** objects that contain heaps of information about everything that happened the moment you clicked on that HTML element- including, most importantly for us, _which_ HTML element you clicked on. This is important for what we're trying to do, because we need to know _which_ cell to put an X or an O inside.
 
The specific HTML element you clicked on is called the `target` of the click event, so by saying `let cell = e.target`, we can create a new variable representing the cell we clicked on. If you open `index.html` in your browser now and look in the developer tools Console, you should be able to click on cells and see that `"i clicked on: " + cell` message popping up.
 
## The cellClicked() function PART II
 
Now we're going to practice another crucial skill when it comes to writing more complicated algorithms. [PSEUDO CODE](https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/). It often takes new programmers a long time to embrace pseudocode. They just dive right into writing the function with a very blurry understanding of what they actually want to happen. Bashing at the keys in what you might call the "Infinite Monkeys, Infinite Typewriters" technique. It's like driving in roughly the right direction with a vague idea of where you want to end up. You'll probably get there eventually, but it will take a _lot_ longer, and realizing that you have been driving down the wrong street for 20 minutes is extremely frustrating. So... don't do that! Make a plan, even just a few bullet points, before you start driving.
 
Here is some pseudocode for the `cellClicked(e)` function:
 
```game.js
 
// function for handling clicks on cells
function cellClicked(e) {
 
    // create a variable for the clicked cell so i can do stuff with it
 
    // only put something in the cell if it's empty (by checking it's .innerHTML property)
 
    // figure out which symbol to put inside the cell (X or O based on the naughtsTurn Boolean)
 
    // put the symbol inside the cell (by using .innerHTML again)
 
    // check to see if the player won with that move (probably using a new function, like checkForWin() which i'll need to write later)
 
    // switch which players turn it is (using the naughtsTurn boolean again)
 
    // update the text at the top of the page saying whos turn it is now
}
```
 
Writing that pseudocode took maybe a minute. It will probably take you a little longer when you're new to programming, but still. Taking a little time to plan your journey before you start actually writing code saves you an _immense_ amount of time and frustration in the long run. **So remember to do it!**
 
## Turning the pseudocode into CODE
 
We're going to let you tackle writing the real contents of `cellClicked(e)` yourself, but here are a few tips based on the pseudocode:
 
- create a variable for the clicked cell so i can do stuff with it
    We covered this one already with the `e.target`!
 
- only put something in the cell if it's empty (by checking it's .innerHTML property)
    You can check to see if an HTML element is empty like `myVariableName.innerHTML == ""`
 
- figure out which symbol to put inside the cell (X or O based on the naughtsTurn Boolean)
    This could be a great time to practice using the [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).
 
- put the symbol inside the cell (by using .innerHTML again)
    Once you've figured out which symbol (X or O) to put inside the cell (and which cell to put it into), putting it in there is straightforward using .innerHTML.
 
- check to see if the player won with that move (probably using a new function, like checkForWin() which i'll need to write later)
    You could create a stub `checkForWin()` function with nothing inside it for the time being, making the real function is the next step.
 
- switch which players turn it is (using the naughtsTurn boolean again)
    Refer back to the `!=` boolean trick from earlier.
 
- update the text at the top of the page saying whos turn it is now
    Refer back to how we updated HTML text in the Javascript Cafe challenge from sprint 3.
 
Once you've worked through those bullet points, you should now be able to play tic tac toe! However, there's no winning yet. You can just put the Xs and Os into the cells anywhere you want. Now it's time for the hardest part! You need to write an algorithm that looks through the array of cells and tries to find three in a row. Let's do it.
 
## The checkForWin() function
 
So what's the first step when it comes to writing this new function?
Ooooo you guessed it, Pseudocode! What might that look like?
 
```game.js
function checkForWin(symb) {
 
    // the function takes a string as an argument ("X" or "O")
 
    // it needs to check if that symbol appears three times in a row in the board cells
   
    // it will need to check for horizontal, vertical AND diagonal victories
 
    // a boolean to keep track of if we found a winning line of symbols (like let gameIsOver = false/true)
 
    // if we found three of the same symbol in a row, the game is over
 
    // update the header text with the winner
   
}
```
 
So that's all well and good, but you're probably thinking _how_?? How can we check to see if the symbol is appearing three times in a row? Well, just like earlier when we used `.innerHTML` to check if a cell was empty, we can also use it to check _what_ is inside the element. Ie, `cell.innerHTML == "X"`. We have access to all of the cells on the board inside the `cells` array that we created at the start of the challenge. Refer to this beautiful diagram for a visual representation of which array element equals which cell:
 
![Board Diagram](./images/board-diagram.png)
 
So, armed with this knowledge, we can construct `if()` statements that check to see if three cells in a row all contain the "X" or "O" symbol argument string that we're passing into this function.
We're going to show you what that could look like for a horizontal victory, and let you tackle the vertical and diagonal victories yourself:
 
```game.js
 
function checkForWin(symb) {
 
    let gameIsOver = false
 
    // HORIZONTAL LINES //
    if (cells[0].innerHTML == symb && cells[1].innerHTML == symb && cells[2].innerHTML == symb)
        gameIsOver = true
 
    else if (cells[3].innerHTML == symb && cells[4].innerHTML == symb && cells[5].innerHTML == symb)
        gameIsOver = true
 
    else if (cells[6].innerHTML == symb && cells[7].innerHTML == symb && cells[8].innerHTML == symb)
        gameIsOver = true
 
    // VERTICAL LINES //
 
    // ...
 
    // DIAGONAL LINES //
 
    // ...
 
    if (gameIsOver) {
        // update the header text
    }
 
}
 
```
 
Good luck!
 
## Bugs?
 
All going well, you might have a working version of Tic Tac Toe now! Play it! Is anything not working how you think it should? Bugs are absolutely unavoidable when you're programming. You are a bug producing machine- constantly creating little typos and logical errors into everything you do. The process of going through, testing what you made, finding the mistakes and fixing them is a crucial skill. Practice it!
 
## Wrap up
 
Read your code again from top to bottom and make sure you understand everything that is happening. If it's still feeling mysterious to you, _delete it all_ and do it again. Repetition is key when it comes to learning new and complicated things. Take some time to reflect on what you did in this challenge and what you learned.
 
Congratulations! You made a videogame. Check out some of these stretch feature suggestions if you would like to keep working on this project, and move onto the next exercise whenever you're ready.
 
## Stretch ideas
 
* Create a function that checks for a 'Stalemate'. IE, all the squares are full and nobody won. Display "STALEMATE" at the top of the page.
* A restart button, that resets the game.
* Wacky cartoon sound effects.
* A tally that keeps track of how many times X or O has won.
* A new mechanic that makes tic tac toe more interesting to play. (It's a pretty boring game).
* Turn it into an NFT for some reason! Don't worry- they're _totally_ not a predatory pyramid scheme.
 
## Resources
 
* [Play Tic Tac Toe](https://playtictactoe.org/)
* [HTML Tables](https://www.w3schools.com/html/html_tables.asp)
* [getElementsByTagName()](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp)
* [Pseudocode](https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/)
* [Ternary Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

