let cardSuits = ["spades","clubs","hearts","diamonds"];
let cardValues = ["02","03","04","05","06","07","08","09","10","11","12","13","14"];
let cardDeck = [];
let playerOne = [];
let playerTwo = [];
let warDeclared = false;
let gameOver = false;


//Create Deck
let createDeck = () => {
	for (let i=0; i<cardValues.length; i++) {
	for (let j=0; j<cardSuits.length; j++) {
		let cards = {value:cardValues[i], suit:cardSuits[j]}
		cardDeck.push(cards);
		}
	}
}
//Create Deck End