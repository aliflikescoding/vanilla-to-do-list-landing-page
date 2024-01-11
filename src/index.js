import './scss/main.scss';

window.addEventListener('scroll', () => {
  let y = window.scrollY;

  let header = document.querySelector(".header");
  if (y > 240) {
    header.classList.add("header-ver2");
  }
  else {
    header.classList.add("header-ver1");
    if(header.classList.contains("header-ver2")) {
      header.classList.remove("header-ver2");
    }
  }
});

const cardList = document.querySelectorAll('.reviews-card');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');

let currentCard = 0;

let autoSwitch = setInterval(nextCard, 3000);

function nextCard() {
  currentCard++;
  
  if(currentCard >= cardList.length) {
    currentCard = 0;
  }
  
  showCard(currentCard);
}

function showCard(n) {
  cardList.forEach(card => {
    card.style.opacity = 0; 
  });
  
  cardList[n].style.opacity = 1;
}

arrowRight.addEventListener('click', () => {
  currentCard++;
  
  if(currentCard >= cardList.length) {
    currentCard = 0;
  }
  
  showCard(currentCard);

  clearInterval(autoSwitch);
  
  autoSwitch = setInterval(nextCard, 3000); 
});

arrowLeft.addEventListener('click', () => {
  currentCard--;
  
  if(currentCard < 0) {
    currentCard = cardList.length - 1;
  }
  
  showCard(currentCard);

  clearInterval(autoSwitch);
  
  autoSwitch = setInterval(nextCard, 3000); 
});

showCard(0);