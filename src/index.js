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