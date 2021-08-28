'use strict';

class Model {
  constructor() {
    this.score = 0;
    this.times = 0;
    this.revealedCards = [];
  }
}

class Card {
  constructor(suit, number, image) {
    this.suit = suit;
    this.number = number;
    this.image = image;

    if (this.suit === CARD_SUIT.Heart || this.suit === CARD_SUIT.Diamond) {
      this._color = CARD_COLOR.Red;
    }
    else {
      this._color = CARD_COLOR.Black;
    }
  }
}

const CARD_SUIT = {
  Spade: "Spade",
  Heart: "Heart",
  Diamond: "Diamond",
  Club: "Club",
}

const CARD_COLOR = {
  Red: "Red",
  Black: "Black",
}

const cards = [
  new Card(CARD_SUIT.Spade, 1, "images/SPADE-1.svg"),
  new Card(CARD_SUIT.Spade, 2, "images/SPADE-2.svg"),
  new Card(CARD_SUIT.Spade, 3, "images/SPADE-3.svg"),
  new Card(CARD_SUIT.Spade, 4, "images/SPADE-4.svg"),
  new Card(CARD_SUIT.Spade, 5, "images/SPADE-5.svg"),
  new Card(CARD_SUIT.Spade, 6, "images/SPADE-6.svg"),
  new Card(CARD_SUIT.Spade, 7, "images/SPADE-7.svg"),
  new Card(CARD_SUIT.Spade, 8, "images/SPADE-8.svg"),
  new Card(CARD_SUIT.Spade, 9, "images/SPADE-9.svg"),
  new Card(CARD_SUIT.Spade, 10, "images/SPADE-10.svg"),
  new Card(CARD_SUIT.Spade, 11, "images/SPADE-11-JACK.svg"),
  new Card(CARD_SUIT.Spade, 12, "images/SPADE-12-QUEEN.svg"),
  new Card(CARD_SUIT.Spade, 13, "images/SPADE-13-KING.svg"),
  new Card(CARD_SUIT.Heart, 1, "images/HEART-1.svg"),
  new Card(CARD_SUIT.Heart, 2, "images/HEART-2.svg"),
  new Card(CARD_SUIT.Heart, 3, "images/HEART-3.svg"),
  new Card(CARD_SUIT.Heart, 4, "images/HEART-4.svg"),
  new Card(CARD_SUIT.Heart, 5, "images/HEART-5.svg"),
  new Card(CARD_SUIT.Heart, 6, "images/HEART-6.svg"),
  new Card(CARD_SUIT.Heart, 7, "images/HEART-7.svg"),
  new Card(CARD_SUIT.Heart, 8, "images/HEART-8.svg"),
  new Card(CARD_SUIT.Heart, 9, "images/HEART-9.svg"),
  new Card(CARD_SUIT.Heart, 10, "images/HEART-10.svg"),
  new Card(CARD_SUIT.Heart, 11, "images/HEART-11-JACK.svg"),
  new Card(CARD_SUIT.Heart, 12, "images/HEART-12-QUEEN.svg"),
  new Card(CARD_SUIT.Heart, 13, "images/HEART-13-KING.svg"),
  new Card(CARD_SUIT.Diamond, 1, "images/DIAMOND-1.svg"),
  new Card(CARD_SUIT.Diamond, 2, "images/DIAMOND-2.svg"),
  new Card(CARD_SUIT.Diamond, 3, "images/DIAMOND-3.svg"),
  new Card(CARD_SUIT.Diamond, 4, "images/DIAMOND-4.svg"),
  new Card(CARD_SUIT.Diamond, 5, "images/DIAMOND-5.svg"),
  new Card(CARD_SUIT.Diamond, 6, "images/DIAMOND-6.svg"),
  new Card(CARD_SUIT.Diamond, 7, "images/DIAMOND-7.svg"),
  new Card(CARD_SUIT.Diamond, 8, "images/DIAMOND-8.svg"),
  new Card(CARD_SUIT.Diamond, 9, "images/DIAMOND-9.svg"),
  new Card(CARD_SUIT.Diamond, 10, "images/DIAMOND-10.svg"),
  new Card(CARD_SUIT.Diamond, 11, "images/DIAMOND-11-JACK.svg"),
  new Card(CARD_SUIT.Diamond, 12, "images/DIAMOND-12-QUEEN.svg"),
  new Card(CARD_SUIT.Diamond, 13, "images/DIAMOND-13-KING.svg"),
  new Card(CARD_SUIT.Club, 1, "images/CLUB-1.svg"),
  new Card(CARD_SUIT.Club, 2, "images/CLUB-2.svg"),
  new Card(CARD_SUIT.Club, 3, "images/CLUB-3.svg"),
  new Card(CARD_SUIT.Club, 4, "images/CLUB-4.svg"),
  new Card(CARD_SUIT.Club, 5, "images/CLUB-5.svg"),
  new Card(CARD_SUIT.Club, 6, "images/CLUB-6.svg"),
  new Card(CARD_SUIT.Club, 7, "images/CLUB-7.svg"),
  new Card(CARD_SUIT.Club, 8, "images/CLUB-8.svg"),
  new Card(CARD_SUIT.Club, 9, "images/CLUB-9.svg"),
  new Card(CARD_SUIT.Club, 10, "images/CLUB-10.svg"),
  new Card(CARD_SUIT.Club, 11, "images/CLUB-11-JACK.svg"),
  new Card(CARD_SUIT.Club, 12, "images/CLUB-12-QUEEN.svg"),
  new Card(CARD_SUIT.Club, 13, "images/CLUB-13-KING.svg"),
];
