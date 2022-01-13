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

So how do we get the array of all the cells? Luckily, this a pretty common desire. You've probably seen `document.getElementById()` before, which we can use to get back a single HTML element using its ID. There is another handy method, called [document.getElementsByTagName()](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp), which will give us back _an array of every element of a certain type_. IE, give me all the `<p>` tags, or all the `<h1>` tags. 

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

Isn't it beautiful? Yes; that was not a trick question. But we're meant to be playing _Tic Tac Toe_ here, not saying hello. Next we're going to look at keeping track of whose turn it is and actually putting the Xs or Os into the cells. 


## Stretch ideas

* Create a function that checks for a 'Stalemate'. IE, all the squares are full and nobody won. Display "STALEMATE" at the top of the page. 
* A restart button, that resets the game. 
* Wacky cartoon sound effects.
* A tally that keeps track of how many times X or O has won.
* A new mechanic that makes tic tac toe more interesting to play. (It's a pretty boring game).
* Turn it into an NFT for some reason! Don't worry- they're _totally_ not a predatory Ponzi scheme. 

## Resources

* [Play Tic Tac Toe](https://playtictactoe.org/)

