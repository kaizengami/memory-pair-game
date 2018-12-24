import { cards_data } from './Cards';

let pair = [];

const addClickEventToCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach( card => {
        card.addEventListener('click', () => { cardClick(card) });
    });
}

const cardClick = (card) => {
    card.children[0].classList.add('card-content-show');
    pair.push({
        id : card.attributes.id.value, 
        img : cards_data[card.attributes.id.value - 1].image
    });
    checkPair();
}

const checkPair = () => {
    if (pair[1] == null) return
    else if (pair[0].img !== pair[1].img) hidePair();
    else if (pair[0].img === pair[1].img) correctPair();
}

const hidePair = () => {
    const card_1 = document.getElementById(pair[0].id);
    const card_2 = document.getElementById(pair[1].id);
    pair = [];
    setTimeout(() => {
        card_1.children[0].classList.remove('card-content-show');
        card_2.children[0].classList.remove('card-content-show');
    }, 500);    
}

const correctPair = () => {
    const card_1 = document.getElementById(pair[0].id);
    const card_2 = document.getElementById(pair[1].id);
    pair = [];
    setTimeout(() => {
        card_1.children[0].classList.add('card-content-correct');
        card_2.children[0].classList.add('card-content-correct');
    }, 500);    
}

export default addClickEventToCards;
