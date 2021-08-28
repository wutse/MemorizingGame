const backImg = "https://assets-lighthouse.alphacamp.co/uploads/image/file/9222/ExportedContentImage_00.png";
const gameIcon = "https://image.flaticon.com/icons/svg/107/107585.svg";

class View {
  constructor() {
    this.hScore = document.querySelector("#score");
    this.pTimes = document.querySelector("#tryTimes");
    this.divShuffle = document.querySelector("#shuffle");
    this.cardPanel = document.querySelector("#cardPanel");
  }

  displayCards(isBack, gameCards) {
    let result = "";
    let quotient = 0;
    let remainder = 0;
    for (let i = 0; i < gameCards.length; i++) {
      quotient = Math.trunc(i / 13);
      remainder = i % 13;

      if (remainder === 0) {
        result += `<div id="cardRow${quotient + 1}" class="cardrow d-flex justify-content-between">`;
      }

      result += `
          <div class="card">
            <img src="${isBack ? backImg : gameCards[i].image}" data-index="${i}">
          </div>`;

      if (remainder === 12) {
        result += `
        </div>`;
      }
    }

    cardPanel.innerHTML = result;
  }

  flipCard(target, cardImage) {
    if (!target.matches(".fliped")) {
      target.src = cardImage;
      target.classList.add("fliped");
    }
  }

  coverCard(target) {
    if (target.matches(".fliped")) {
      target.src = backImg;
      target.classList.remove("fliped");
    }
  }

  lockCard(target) {
    if (!target.matches(".paired")) {
      target.classList.add("paired");
    }
  }

  appendWrongAnimation(target) {
    target.classList.add('wrong')
    target.addEventListener('animationend', event => event.target.classList.remove('wrong'), { once: true })
  }

  renderScore(score) {
    this.hScore.innerHTML = `Score: ${score}`;
  }

  renderTimes(times) {
    this.pTimes.innerHTML = `You've tried: ${times} times`;
  }

  pairCards(target1, target2) {
    target1.classList.add(".paired");
    target2.classList.add(".paired");
  }

  showGameFinished(score, triedTimes) {
    const div = document.createElement('div')
    div.classList.add('completed')
    div.innerHTML = `
      <p>Complete!</p>
      <p>Score: ${score}</p>
      <p>You've tried: ${triedTimes} times</p>
    `
    const header = document.querySelector('#header')
    header.before(div)
  }
}