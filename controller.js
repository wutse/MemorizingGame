'use strict';

class Controller {
  constructor() {
    this.currentState = GAME_STATE.FirstCardAwaits;
    this.model = new Model();
    this.view = new View(this.onShuffled);
    this.gameCards = cards;
    this.cardPair = new CardPair();
  }

  init() {
    this.view.displayCards(false, this.gameCards);
    this.view.divShuffle.addEventListener("click", () => {
      this.model = new Model();
      this.gameCards = this._shuffle(cards);
      this.view.renderScore(0);
      this.view.renderTimes(0);
      this.view.displayCards(true, this.gameCards);
      this._restoreState();

      this.view.cardPanel.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
          this.dispatchCardAction(event.target);
        }
      });
    });
  };

  _shuffle(srcCards) {
    let result = srcCards.slice(0);
    for (let index = result.length - 1; index > 0; index--) {
      let randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }

    return result;
  }

  _restoreState() {
    this.cardPair = new CardPair();
    this.currentState = GAME_STATE.FirstCardAwaits;
  }

  dispatchCardAction(target) {
    switch (this.currentState) {
      case GAME_STATE.FirstCardAwaits:
        if (this.model.revealedCards.indexOf(target.dataset.index) === -1) {
          this.view.flipCard(target, this.gameCards[target.dataset.index].image);
          this.cardPair.card1 = this.gameCards[target.dataset.index];
          this.cardPair.target1 = target;
          this.currentState = GAME_STATE.SecondCardAwaits;
        }
        break;
      case GAME_STATE.SecondCardAwaits:
        if (this.cardPair.card1 !== this.gameCards[target.dataset.index] && this.model.revealedCards.indexOf(target.dataset.index) === -1) {
          this.view.flipCard(target, this.gameCards[target.dataset.index].image);
          this.cardPair.card2 = this.gameCards[target.dataset.index];
          this.cardPair.target2 = target;
          this.currentState = this.cardPair.isPair() ? GAME_STATE.CardsMatched : GAME_STATE.CardsMatchFailed;
          this.dispatchCardAction();
        }
        break;
      case GAME_STATE.CardsMatchFailed:
        this.view.appendWrongAnimation(this.cardPair.target1);
        this.view.appendWrongAnimation(this.cardPair.target2);

        setTimeout(() => {
          this.view.coverCard(this.cardPair.target1);
          this.view.coverCard(this.cardPair.target2);
          this._restoreState();
        }, 1000);

        this.model.times += 1;
        this.view.renderTimes(this.model.times);
        break;
      case GAME_STATE.CardsMatched:
        this.model.revealedCards.push(this.cardPair.target1.dataset.index);
        this.model.revealedCards.push(this.cardPair.target2.dataset.index);

        this.model.score += 10;
        this.view.renderScore(this.model.score);

        this.model.times += 1;
        this.view.renderTimes(this.model.times);

        this.view.lockCard(this.cardPair.target1);
        this.view.lockCard(this.cardPair.target2);

        if (this.model.score === 260) {
          this.currentState = GAME_STATE.GameFinished;
          this.dispatchCardAction();
        }
        this._restoreState();
        break;
      case GAME_STATE.GameFinished:
        this.view.showGameFinished(this.model.score, this.model.times);
        break;
      default:
        break;
    }
  }
}

class CardPair {
  constructor(card1, target1, card2, target2) {
    this.card1 = card1;
    this.target1 = target1;
    this.card2 = card2;
    this.target2 = target2;
  }

  isPair() {
    return this.card1._color === this.card2._color && this.card1.number === this.card2.number;
  }
}

const GAME_STATE = {
  FirstCardAwaits: "FirstCardAwaits",
  SecondCardAwaits: "SecondCardAwaits",
  CardsMatchFailed: "CardsMatchFailed",
  CardsMatched: "CardsMatched",
  GameFinished: "GameFinished",
}