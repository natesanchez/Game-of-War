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
createDeck();

//Shuffle (cardDeck) [Fisher-Yates Shuffle ES6]
let shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
//End-Shuffle
shuffle(cardDeck);

//Assign-Player-Decks
let assignDecks = () => {
	playerOneDeck = cardDeck.slice(0,26);
	playerTwoDeck = cardDeck.slice(26);
}
//End-Assign-Decks
assignDecks();

//Where-Game-is-Played
let tableArena = () => {
	flipPlayerCards();
	if (playerOneActive[0].rank > playerTwoActive[0].rank) {
		playerOneDeck.push(playerOneActive[0], playerTwoActive[0]);
		playerOneActive = [];
		playerTwoActive = [];
		console.log(`**Player 1 wins this round and now has ${playerOneDeck.length} cards!** | Player 2 has ${playerTwoDeck.length} cards.`);
		checkForWinner();
	} else if (playerTwoActive[0].rank > playerOneActive[0].rank) {
		playerTwoDeck.push(playerOneActive[0],playerTwoActive[0]);
		playerOneActive = [];
		playerTwoActive = [];
		console.log(`**Player 2 wins this round and now has ${playerTwoDeck.length} cards!** | Player 1 has ${playerOneDeck.length} cards.`);
		checkForWinner();
	} else {
		war();
	}
}
//End-Where-Game-is-Played


//Card-Flips
let flipPlayerCards = () => {
	playerOneActive.push(playerOneDeck[0])
	playerOneDeck.shift();
	playerTwoActive.push(playerTwoDeck[0])
	playerTwoDeck.shift();
	console.log(`Player 1 flipped a ${playerOneActive[0].value} of ${playerOneActive[0].suit} and Player 2 flipped a ${playerTwoActive[0].value} of ${playerTwoActive[0].suit}`)
}
//End-Card-Flips


//Check-for-Winner
let checkForWinner = () => {
	if (playerOneDeck.length===52) {
		console.log("Player 1 has WON! GAME OVER!!")
	} else if (playerTwoDeck.length===52) {
		console.log("Player 2 has WON! GAME OVER!!")
	} else {
		tableArena();
	}
}
//End-Check-for-Winner


//WAR
let war = () => {
	console.log("***********IT'S WAR!!************")
	if (playerOneDeck.length < 4) {
		console.log(`********Player 1 only has ${playerOneDeck.length} cards and thus does not have enough cards to continue. Player 2 has WON! GAME OVER!!********`)
	} else if (playerTwoDeck.length < 4) {
		console.log(`********Player 2 only has ${playerTwoDeck.length} cards and thus does not have enough cards to continue. Player 1 has WON! GAME OVER!!********`)
	} else {
	playerOneActive.unshift(playerOneDeck[0])
	playerOneDeck.shift();
	playerTwoActive.unshift(playerTwoDeck[0])
	playerTwoDeck.shift();
	console.log(`Player 1 flipped a ${playerOneActive[0].value} of ${playerOneActive[0].suit} and Player 2 flipped a ${playerTwoActive[0].value} of ${playerTwoActive[0].suit} (--both faceDown--)`)
	playerOneActive.unshift(playerOneDeck[0])
	playerOneDeck.shift();
	playerTwoActive.unshift(playerTwoDeck[0])
	playerTwoDeck.shift();
	console.log(`Player 1 flipped a ${playerOneActive[0].value} of ${playerOneActive[0].suit} and Player 2 flipped a ${playerTwoActive[0].value} of ${playerTwoActive[0].suit} (--both faceDown--)`)
	playerOneActive.unshift(playerOneDeck[0])
	playerOneDeck.shift();
	playerTwoActive.unshift(playerTwoDeck[0])
	playerTwoDeck.shift();
	console.log(`Player 1 flipped a ${playerOneActive[0].value} of ${playerOneActive[0].suit} and Player 2 flipped a ${playerTwoActive[0].value} of ${playerTwoActive[0].suit} (--both faceDown--)`)
		playerOneActive.unshift(playerOneDeck[0])
	playerOneDeck.shift();
	playerTwoActive.unshift(playerTwoDeck[0])
	playerTwoDeck.shift();
	console.log(`Player 1 flipped a ${playerOneActive[0].value} of ${playerOneActive[0].suit} and Player 2 flipped a ${playerTwoActive[0].value} of ${playerTwoActive[0].suit} (--both faceUp--)`)
	if (playerOneActive[0].rank > playerTwoActive[0].rank) {
		playerOneDeck.push(...playerOneActive, ...playerTwoActive);
		playerOneActive = [];
		playerTwoActive = [];
		console.log(`**Player 1 has won the war now has ${playerOneDeck.length} cards!** | Player 2 has ${playerTwoDeck.length} cards.`);
		checkForWinner();
	} else if (playerTwoActive[0].rank > playerOneActive[0].rank) {
		playerTwoDeck.push(...playerOneActive,...playerTwoActive);
		playerOneActive = [];
		playerTwoActive = [];
		console.log(`**Player 2 has won the war and now has ${playerTwoDeck.length} cards!** | Player 1 has ${playerOneDeck.length} cards.`);
		checkForWinner();
	} else {
		war();
		}
	}
}
//End-War
tableArena();

