let cardSuits = ["Spades","Clubs","Hearts","Diamonds"];
let cardValues = ["02","03","04","05","06","07","08","09","10","Jack","Queen","King","Ace"];
let cardDeck = [];
let playerOneDeck = [];
let playerTwoDeck = [];
let playerOneActive = [];
let playerTwoActive = [];



//Deck-Creation
let createDeck = () => {
	for (let i=0; i<cardValues.length; i++) {
	for (let j=0; j<cardSuits.length; j++) {
		let cards = {value:cardValues[i], suit:cardSuits[j], rank:i+2}
		cardDeck.push(cards);
		}
	}
}
//Create-Deck-End


//Shuffle (cardDeck) [Fisher-Yates Shuffle ES6]
let shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
//End-Shuffle


//Assign-Player-Decks
let assignDecks = () => {
	playerOneDeck = cardDeck.slice(0,26);
	playerTwoDeck = cardDeck.slice(26);
}
//End-Assign-Decks

//Card-Flips
let flipPlayerCards = () => {
	playerOneActive.unshift(playerOneDeck[0])
	playerOneDeck.shift();
	playerTwoActive.unshift(playerTwoDeck[0])
	playerTwoDeck.shift();
	console.log(`Player One flipped a ${playerOneActive[0].value} of ${playerOneActive[0].suit} and Player Two flipped a ${playerTwoActive[0].value} of ${playerTwoActive[0].suit}`)
}
//End-Card-Flips



createDeck();
shuffle(cardDeck);
assignDecks();
flipPlayerCards();



















