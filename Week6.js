//Set Variables to player scores to reference later in the game development

let playerOneScore = 0;
let playerTwoScore = 0;

//create the smallest piece of our game which is a card by creating a card class
class Card {
    constructor(suit,value) {
        this.suit = suit;
        this.value = value;
    }
//needed to get play value to compare value of played cards each round 
   getPlayValue() {
        switch (this.value){
            case 'A': 
            return 1;
            case Number.value: 
            return Number; 
            case 'J': 
            return 11;
            case 'Q': 
            return 12;
            case 'K': 
            return 13;
        }
        return (this.value);
   }
}

//Deck is the next piece of our game - created a class which was going to be constructed of cards (held in an array)
class Deck {
    constructor() {
        this.cards = [];    
    }
    //created createDeck method by using for loops to iterate and combine suit and value arrays                   
       createDeck() {
            let suit = ['clubs', 'diamonds', 'hearts', 'spades'];
            let value = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
           
            for (let i = 0; i < suit.length; i++) {
                for (let j = 0; j < value.length; j++) {
                    this.cards.push(new Card(suit[i], value[j]));
                }
             }
            }
        //created shuffleDeck method 
         shuffleDeck() {
            for(let i = this.cards.length - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1));
                let x = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards [j] = x;
                }
        
    }
}

//Create Player class: player needs to have name and their own array to hold their own deck of cards
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}



//Game class is the overarching piece of our game that holds all of the functionality
class Game {
    constructor() {
        this.players = [];
    }
   
    //Basic Game Set Up: players added, create deck, shuffle, deal
    setUpPlay(playerOneName, playerTwoName){
            //Put players in the game
            this.players.push(new Player(playerOneName));
            this.players.push(new Player(playerTwoName));

            //Game Set Up : Create new instances of our Deck class and called our create deck and shuffle deck method
            let deck1 = new Deck();
            deck1.createDeck();
            deck1.shuffleDeck();
            //Dealt cards to each player by splitting the shuffled deck in half
            this.players[0].playerCards = deck1.cards.slice(0, 26);
            this.players[1].playerCards = deck1.cards.slice(26, 52);
    }
    //Used the playRound method to create action of player each round 
    playRounds(){
        //Iterated through rounds with a for loop for each player to play their card
            for (let i = 0; i < 26; i++){
                this.players[0].playerCards[i];
                this.players[1].playerCards[i];
                console.log(`Player one's card is: ${this.players[0].playerCards[i].value} of ${this.players[0].playerCards[i].suit} `);
                console.log(`Player two's card is: ${this.players[1].playerCards[i].value} of ${this.players[1].playerCards[i].suit}`);
                //Had to account for getting actual playValue before comparing their values to award points for each round
                this.players[0].playerCards[i].getPlayValue();
                this.players[1].playerCards[i].getPlayValue();
                //Nested if/if else statements were used to compare played card values and award points to players
                if(this.players[0].playerCards[i].getPlayValue() > this.players[1].playerCards[i].getPlayValue()){
                    console.log(`Player One wins this round!`);
                    playerOneScore += 1;

                 }else if(this.players[0].playerCards[i].getPlayValue() < this.players[1].playerCards[i].getPlayValue()){
                    console.log(`Player Two wins this round!`);
                    playerTwoScore += 1;

                }else{
                 console.log(`It's a tie this round.`);
                }
             }   
        }    
    
    }
    //stated final function to compare final scores, declare a winner, and give the final score
    function determineWinner(playerOneScore,playerTwoScore){
        if(playerOneScore > playerTwoScore){    
            console.log(`Player One wins the game!`);
        }else if(playerTwoScore > playerOneScore){
            console.log(`Player Two wins the game!`);
        }else {
            console.log(`It was a tie game!`)
        }
        
       }
            
 //Called game class and instance of each method   
let game1 = new Game();
game1.setUpPlay('Player 1', 'Player 2');
game1.playRounds();
determineWinner(playerOneScore,playerTwoScore);

console.log(`The final score is 
        Player One: ${playerOneScore} 
        Player Two: ${playerTwoScore}`);

