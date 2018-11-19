const CARDS = document.getElementById('cards');
const GAME_COVER = document.getElementById('game_cover');
const GAME_OVER = document.getElementById('game_over');
const RESULT = document.getElementById('result');

let cards = {
	images : ['./img/1.gif','./img/2.gif','./img/3.gif','./img/4.gif','./img/5.gif','./img/6.gif','./img/7.gif','./img/8.gif','./img/9.gif','./img/10.gif','./img/11.gif','./img/12.gif','./img/13.gif','./img/14.gif','./img/15.gif','./img/16.gif','./img/17.gif','./img/18.gif','./img/19.gif','./img/20.gif'], 
	cards : [],
	pair : [],
	game_over : 0,
	steps : 0,
	userDifficulty : '',
	render : function(){
		this.renderCards();
		this.showCards();
	},
	difficulty : function(){
		switch (this.userDifficulty){
			case 'ease' :
				this.cards = this.images;
				this.easeLevel();
				break;
			case 'medium' :
				this.cards = this.images;/*level is under construction*/
				this.mediumLevel();
				break;
			case 'hard' :
				this.cards = this.images;/*level is under construction*/
				this.hardLevel();
				break;
		}
	},
	easeLevel : function(){
		this.shuffle();
		this.cards = this.cards.splice(0, 6);
		this.creatCardCopy();
		this.shuffle();
	},
	mediumLevel : function(){
		/*level is under construction*/
		this.easeLevel();
	},
	hardLevel : function(){
		/*level is under construction*/
		this.easeLevel();
	},
	creatCardCopy : function(){
		for (let i = this.cards.length - 1; i >= 0; i--){
			this.cards.push(this.cards[i]);
		}
	},
	shuffle : function(){
		this.cards.sort(function() { return 0.5 - Math.random() });
	},
	renderCards : function(){
		for (i = 0; i < this.cards.length; i++){
			CARDS.insertAdjacentHTML('beforeend', '<div class="card" id="' + i + '" onclick="cards.userClickOnCard(this.id)">' /*+ this.cards[i] */+ '<div class="card-image" style="background-image: url(' + this.cards[i] + ')"></div></div>');
		}
	},
	userClickOnCard : function(id){
		this.flipCard(id);
		this.checkPair();
		this.steps += 1;
	},
	flipCard : function(id){
		const CARD = document.getElementById(id);	
		CARD.classList.toggle('card-flipped'); 
		CARD.firstChild.classList.toggle('card-image-flipped'); 
  		this.pair.push(this.cards[id]);
	},
	checkPair : function(){
		if (this.pair[1] == null) return;
		else if(this.pair[0] === this.pair[1]) this.hidePair();
		else {this.disablePointerEvents(); setTimeout(() => this.cleanPair(), 500);}
	},
	hidePair : function(){
		this.pair = [];
		this.game_over += 1;
		const card_flipped = document.querySelectorAll('.card-flipped');
		for (i = 0; i < card_flipped.length; i++) {
	   		card_flipped[i].style.visibility = 'hidden';
		}
		setTimeout(() => this.checkGammeOver(), 500);	
	},
	cleanPair : function(){
		this.pair = [];
		let card_flipped = document.querySelectorAll('.card-flipped');
		let card_image_flipped = document.querySelectorAll('.card-image-flipped');
		for (i = 0; i < card_flipped.length; i++) {
			card_flipped[i].classList.toggle('card-flipped');
			card_image_flipped[i].classList.toggle('card-image-flipped'); 
		}
		this.enablePointerEvents();
	},
	disablePointerEvents : function(){
		const CARD = document.querySelectorAll('.card');
		for (i = 0; i < CARD.length; i++) {
			CARD[i].style.pointerEvents = 'none'; 
		}
	},
	enablePointerEvents : function(){
		const CARD = document.querySelectorAll('.card');
		for (i = 0; i < CARD.length; i++) {
			CARD[i].style.pointerEvents = 'all'; 
		}
	},
	checkGammeOver : function(){
		if(this.game_over === 6) GameOver.gameOver();
	},
	showCards : function(){
		const SHOW_CARDS = document.getElementById('cards');
		SHOW_CARDS.style.opacity = 1;
		SHOW_CARDS.style.transition = 'all .3s ease-out';
	},
	showHideCards : function(pointerEventsOn){
		const CARD = document.querySelectorAll('.card');
		const CARD_IMAGE = document.querySelectorAll('.card-image');
		for (i = 0; i < CARD.length; i++) {
			CARD[i].classList.toggle('card-flipped');
			CARD_IMAGE[i].classList.toggle('card-image-flipped');
		}
		if(pointerEventsOn){
			for (i = 0; i < CARD.length; i++) {
	   		CARD[i].style.pointerEvents = 'all';
			}
			GameOver.stopwatch();
		}
	},

}

let StartMenu = {
	start : function(difficulty){
		cards.userDifficulty = difficulty;
		this.render();
		cards.difficulty();
		setTimeout(() => cards.render(), 300);
	},
	render : function(){
		this.hideCover();
		setTimeout(() => this.startCountdown(), 400);
		setTimeout(() => cards.showHideCards(false), 5000);
		setTimeout(() => cards.showHideCards(true), 8000);
	},
	hideCover : function(){
		GAME_COVER.style.opacity = 0;
		GAME_COVER.style.transition = 'all .3s ease-out';
	},
	showCover : function(){
		GAME_COVER.style.opacity = 1;
		GAME_COVER.style.transition = 'all .3s ease-out';
	},
	createCountdown : function(){
		const countdown = document.createElement('div');
    	document.body.appendChild(countdown);
		countdown.id = 'countdown';
	},
	startCountdown : function(){
		this.createCountdown();
		countdown.innerHTML = 4;
		countdown.style.opacity = 0;
		let countdownIntervalUp = setInterval(() => {
			if (countdown.innerHTML == 1) {
				clearInterval(countdownIntervalUp);
				countdown.remove();
				CARDS.style.filter = 'blur(0px)'; 
				CARDS.style.transition = 'all .3s ease-in';
			} 
			else {
				countdown.innerHTML -= 1;
				countdown.style.fontSize = '600px';
				countdown.style.opacity = 1;
				countdown.style.transition = 'none';
				setTimeout(() => { 
					countdown.style.fontSize = '50px';
					countdown.style.opacity = 0;
					countdown.style.transition = 'all 1s ease-in';
				}, 20);
			}
		}, 1020); 
	},
}

let GameOver = {
	watch : null,
	score : 0,
	gamesPlayed : 0,
	gameOver : function(){
		clearInterval(GameOver.watch);
		this.gamesPlayed += 1;
		this.addScore();
		this.showGameOver();
	},
	newGame : function(){
		this.hideGameOver();
		setTimeout(() => StartMenu.showCover(), 300);
		this.cleanOldGame();
	},
	hideGameOver : function(){
		GAME_OVER.classList.remove('game_over-visible');
	},
	showGameOver : function(){
		GAME_OVER.classList.add('game_over-visible');
	},
	cleanOldGame : function(){
		cards.game_over = 0;
		this.score = 0;
		cards.steps = 0;
		CARDS.innerHTML = '';
		CARDS.style.filter = 'blur(10px)'; 
	},
	addScore : function(){
		cards.steps = cards.steps / 2;
		if(cards.steps === 6) RESULT.insertAdjacentHTML('afterbegin', '<div class="score">' + this.gamesPlayed + '. Time: ' + GameOver.score + ' sec. <span class="best-score">Awesome Steps: ' + cards.steps + '!</span><span class="'+ cards.userDifficulty +'"> ' + cards.userDifficulty + '</span></div>');
		else RESULT.insertAdjacentHTML('afterbegin', '<div class="score">' + this.gamesPlayed + '. Time: ' + GameOver.score + ' sec. Steps: ' + cards.steps + '<span class="'+ cards.userDifficulty +'"> ' + cards.userDifficulty + '</span></div>');
	},
	stopwatch : function(){
		GameOver.watch = setInterval(() => { GameOver.score += 1; }, 1000);	
	},
}