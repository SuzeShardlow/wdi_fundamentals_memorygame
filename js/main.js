console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function() {

	/* Assignment 8.12
	You can achieve the same thing in two different ways
	Option One:
		// if (cardsInPlay.length === 2) {
		//	if (cardOne === cardTwo) {
		//		alert('You found a match!')
		//	} else {
		//		alert('Sorry, try again.');
		//	}
		//  }

	Option Two: */

	if (cardsInPlay.length === 2) {

		alert(cardsInPlay[0] === cardsInPlay[1] ? "You found a match!" : "Sorry, try again.");

		/* In Assignment 8 you asked for alerts but in Assignment 9.7 you refer to the console log.
		I have stuck with the alerts.
		*/ 

	}

}

var flipCard = function(cardId) {

	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	checkForMatch();

}

flipCard(0);

flipCard(2);
