console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);


/* Assignment 8.12

You can achieve the same thing in two different ways

Option One:

// if (cardsInPlay.length === 2) {

//	if (cardOne === cardTwo) {

//		alert('You found a match!')

//	} else {

//			alert('Sorry, try again.');

//	}

//  }

Option Two: */

if (cardsInPlay.length === 2) {

	var matchAlert = cardsInPlay[0] === cardsInPlay[1] ? "You found a match!" : "Sorry, try again.";

	alert(matchAlert);

}

