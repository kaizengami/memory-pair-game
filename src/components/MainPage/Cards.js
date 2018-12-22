import './cards.sass';
import CardImages from './CardImages';

const number_of_cards = 12;

let cards = [];
let cards_img = [];

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

const shuffleCards = (cards) => {
    return cards.sort( () => Math.random() - 0.5) ;
}
//Сut off half of the cards to create a duplicate of each card
const cutHalfCards = () => { 
    return CardImages.slice(0, number_of_cards / 2);
}

const cloneCards = () => {
    let gameCards = cutHalfCards();
    for (let i = gameCards.length - 1; i >= 0; i--){
      gameCards.push(gameCards[i]);
    }
    return cards_img = gameCards;
}

const generateCards = () => {
  let x = 75;
  let y = 90;
  for (let i = 0; i < number_of_cards; i++) {
    if (i === 6) x = 75;
    if (i >= 6) y = 210;
    x += 120;
    cards.push(new Card(x, y, CardImages[i + 1]));
  }
}

const generateCardsHtml = () => {
  let html_string = '';
  for (let i = 0; i < number_of_cards; i++) {
    console.log(cards[i].id);
    html_string += `<div class="card">
                      <div class="card-content" id="${cards[i].id}" style="margin-left: ${cards[i].x}px; margin-top: ${cards[i].y}px">
                        <div class="card-front"></div>
                        <div class="card-back" style="background-image: url(../../../static/images/card-images/${cards[i].image})"></div>
                      </div>
                    </div>`;
  }
  return html_string;
}

const render = () => {
    console.log( 'shuffleCards(CardImages): ', shuffleCards(CardImages));
    console.log( 'cutHalfCards: ', cutHalfCards());
    console.log( 'cloneCards:', cloneCards());
    console.log('cards_img:', cards_img);
    console.log( 'shuffleCards(cards_img): ',  shuffleCards(cards_img));
    generateCards();
    console.log(cards);
    return generateCardsHtml();
}

export default render;
