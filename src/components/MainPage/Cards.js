import './cards.sass';
import CardImages from './CardImages';

const number_of_cards = 12;

let cards = [];
let cards_img_final = [];

class Card {
  constructor(x, y, image) {
    this.id = Card.id();
    this.x = x;
    this.y = y;
    this.image = image;
  }

  static id() {
    return cards.length + 1;
  }

  show(card) {
    let id = card.target.parentNode.parentNode.id;
    card.target.parentNode.classList.add('card-visible');
    cards[id].visible = true;
  }
}

const shuffleCardsImg = (cards) => {
    return cards.sort( () => Math.random() - 0.5) ;
}
//Сut off half of the cards to create a duplicate of each card
const cutHalfCardsImg = () => { 
    return CardImages.slice(0, number_of_cards / 2);
}

const cloneCardsImg = () => {
    let gameCards = cutHalfCardsImg();
    for (let i = gameCards.length - 1; i >= 0; i--){
      gameCards.push(gameCards[i]);
    }
    return cards_img_final = gameCards;
}

const generateCards = () => {
  let x = 75;
  let y = 90;
  for (let i = 0; i < number_of_cards; i++) {
    if (i === 6) x = 75;
    if (i >= 6) y = 210;
    x += 120;
    cards.push(new Card(x, y, cards_img_final[i]));
  }
}

const generateCardsHtml = () => {
  let html_string = '';
  for (let i = 0; i < number_of_cards; i++) {
    html_string += `<div class="card" id="${cards[i].id}">
                      <div class="card-content" style="margin-left: ${cards[i].x}px; margin-top: ${cards[i].y}px">
                        <div class="card-front"></div>
                        <div class="card-back" style="background-image: url(static/images/card-images/${cards[i].image})"></div>
                      </div>
                    </div>`;
  }
  return html_string;
}

const render = () => {
    shuffleCardsImg(CardImages);
    cutHalfCardsImg();
    cloneCardsImg();
    shuffleCardsImg(cards_img_final);
    generateCards();
    console.log(cards);
    return generateCardsHtml();
}

export { render as cards, cards as cards_data };