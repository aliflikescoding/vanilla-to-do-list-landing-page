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

const form  = document.getElementsByTagName('form')[0];

const name = document.querySelector('#name');
const nameError = document.querySelector('#name + span.error');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span.error');
const bug = document.querySelector('#bug');
const bugError = document.querySelector('#bug + span.error');

name.addEventListener('input', function (event) {
  if (name.validity.valid) {
    nameError.innerHTML = '';
    nameError.className = 'error';
  } else {
    showNameError();
  }
});

function showNameError() {
  if(name.validity.valueMissing) {
    nameError.textContent = `You need to enter a name.`;
  } else if(name.validity.tooShort) {
    nameError.textContent = `Your name is too short should be at least ${ name.minLength } characters; you entered ${ name.value.length }.`;
  }
  else if(name.validity.tooLong) {
    nameError.textContent = `Your name is too long should be at least ${ name.minLength } characters; you entered ${ name.value.length }.`;
  }

  nameError.className = 'error active';
}

email.addEventListener('input', function (event) {
  if (email.validity.valid) {
    emailError.innerHTML = '';
    emailError.className = 'error';
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if(email.validity.valueMissing) {
    emailError.textContent = `You need to enter an e-mail address.`;
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  emailError.className = 'error active';
}

bug.addEventListener('input', function (event) {
  if (bug.validity.valid) {
    bugError.innerHTML = '';
    bugError.className = 'error';
  } else {
    showBugError();
  }
});

function showBugError() {
  if(bug.validity.valueMissing) {
    bugError.textContent = `Please enter the bug title.`;
  } else if(bug.validity.tooShort) {
    bugError.textContent = `The bug title is too short should be at least ${ bug.minLength } characters; you entered ${ bug.value.length }.`;
  }
  else if(bug.validity.tooLong) {
    bugError.textContent = `The bug title is too long should be at least ${ bug.minLength } characters; you entered ${ bug.value.length }.`;
  }

  bugError.className = 'error active';
}

form.addEventListener('submit', function (event) {
  if(!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }

  if(!name.validity.valid) {
    showNameError();
    event.preventDefault();
  }

  if(!bug.validity.valid) {
    showBugError();
    event.preventDefault();
  }
});
