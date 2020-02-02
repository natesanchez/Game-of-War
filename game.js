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
	console.log(`--Player 1 flipped a ${playerOneActive[0].value} of ${playerOneActive[0].suit} and Player 2 flipped a ${playerTwoActive[0].value} of ${playerTwoActive[0].suit}`)
}
//End-Card-Flips

//Card-Flips-2
let flipPlayerCards2 = () => {
	playerOneActive.unshift(playerOneDeck[0])
	playerOneDeck.shift();
	playerTwoActive.unshift(playerTwoDeck[0])
	playerTwoDeck.shift();
	console.log(`--WAR--`)
}
//End-Card-Flips-2

//Check-for-Winner
let checkForWinner = () => {
	if (playerOneDeck.length === 52) {
		console.log("Player 1 has WON! GAME OVER!!")
	} else if (playerTwoDeck.length === 52) {
		console.log("Player 2 has WON! GAME OVER!!")
	} else {
		tableArena();
	}
}
//End-Check-for-Winner


//Where-Game-is-Played
let tableArena = () => {
	flipPlayerCards();
	if (playerOneActive[0].rank > playerTwoActive[0].rank) {
		playerOneDeck.push(playerOneActive[0],playerTwoActive[0]);
		playerOneActive = [];
		playerTwoActive = [];
		console.log(`  **Player 1 wins this round and now has ${playerOneDeck.length} cards!**`);
		console.log(`  |Player 2 now has ${playerTwoDeck.length} cards.|`)
		checkForWinner();
	} else if (playerOneActive[0].rank < playerTwoActive[0].rank) {
		playerTwoDeck.push(playerTwoActive[0],playerOneActive[0]);
		playerOneActive = [];
		playerTwoActive = [];
		console.log(`  **Player 2 wins this round and now has ${playerTwoDeck.length} cards!**`);
		console.log(`  |Player 1 now has ${playerOneDeck.length} cards.|`)
		checkForWinner();
	} else {
		war();
	}
}
//End-Where-Game-is-Played


//Check-War
let checkWar = () => {
	if (playerOneActive[0].rank > playerTwoActive[0].rank) {
		playerOneDeck.push( ...playerOneActive, ...playerTwoActive);
		playerOneActive = [];
		playerTwoActive = [];
		console.log(`****Player 1 won the War and now has ${playerOneDeck.length} cards!!****`)
		console.log(`   |Player 2 now has ${playerTwoDeck.length} cards.|`)
		checkForWinner();
	} else if (playerOneActive[0].rank < playerTwoActive[0].rank) {
		playerTwoDeck.push( ...playerTwoActive, ...playerOneActive);
		playerOneActive = [];
		playerTwoActive = [];
		console.log(`****Player 2 won the War and now has ${playerTwoDeck.length} cards!!****`)
		console.log(`   |Player 1 now has ${playerOneDeck.length} cards.|`)
		checkForWinner();
	} else {
		war();
	}
}	
//End-Check-War


//WAR
let war = () => {
	console.log("***********WAR!***********")
	if (playerOneDeck.length < 4) {
		console.log(`**Player 1 only has ${playerOneDeck.length} cards and does not have enough cards to continue. Player 2 has WON! GAME OVER!!**`)
	} else if (playerTwoDeck.length < 4) {
		console.log(`**Player 2 only has ${playerTwoDeck.length} cards and does not have enough cards to continue. Player 1 has WON! GAME OVER!!**`)
	} else {
		flipPlayerCards2();
		flipPlayerCards2();
		flipPlayerCards2();
		flipPlayerCards2();
		console.log(`Player 1 placed 3 cards faceDown and flipped over a ${playerOneActive[0].value} of ${playerOneActive[0].suit}`)
		console.log(`Player 2 placed 3 cards faceDown and flipped over a ${playerTwoActive[0].value} of ${playerTwoActive[0].suit}`)
		checkWar();
	}
}
//End-War


createDeck();
shuffle(cardDeck);
assignDecks();
tableArena();


