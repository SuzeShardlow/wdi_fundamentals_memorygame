console.log("Up and running!");

var score = 0;

console.log("Current score is " + score);

var cards = [

	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var flipCard = function() {

	var cardId = this.getAttribute('data-id')

	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', (cards[cardId].cardImage));

	checkForMatch();

};

var checkForMatch = function() {

		if (cardsInPlay.length === 2) {
			if (cardsInPlay[0] === cardsInPlay[1]) {
				score++
				alert('You found a match!  Your total score is ' + score + '.')
			} else {
				alert('Sorry, try again.  Your total score is ' + score + '.')
		}
			console.log("Current total score is " + score)
	}
}

var resetCards = function() {

	cardsInPlay = [];

	var newCards = document.getElementById('game-board').children;

	for (var i = 0; i < newCards.length; i++) {

		if (newCards[i].tagName === 'IMG') {

			newCards[i].setAttribute('src', 'images/back.png');
		}
	}
}

var createBoard = function() {

	for (var i = 0; i < cards.length; i++) {

	var cardElement = document.createElement('img');

	cardElement.setAttribute('src', 'images/back.png');

	cardElement.setAttribute('data-id', i);

	cardElement.addEventListener('click', flipCard);

	document.getElementById('game-board').appendChild(cardElement);

	}

	document.getElementById('button').addEventListener('click', resetCards);	

}

createBoard();
