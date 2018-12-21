import './cards.sass';

let cards = [];

class Card {
  constructor(id, x = Card.x()) {
    this.id = id;
  }

  static x() {
    return 1;
  }

  show(card) {
    let id = card.target.parentNode.parentNode.id;
    card.target.parentNode.classList.add('card-visible');
    cards[id].visible = true;
  }
}

const card = (id = 1) => {
    return `<div class="card" id="${id}"></div>`;
}

export default card;
