// # Carousel

const carouselBigs = [...document.querySelectorAll('.carousel-big')];
let selectedBig = 0;

// ## Desktop

const carouselThumbs = [...document.querySelectorAll('.carousel-thumb')];

carouselThumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', e => {
    carouselThumbs.forEach(thumb => thumb.classList.remove('active'));
    e.target.parentElement.classList.toggle('active');
    carouselBigs.forEach(big => big.classList.remove('show'));
    selectedBig = i;
    document.getElementById('cb' + selectedBig).classList.toggle('show');
  })
})

// ## Mobile

const carouselButtons = [...document.querySelectorAll('.carousel-container__button')];

carouselButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.target.classList.contains('next') ? selectedBig ++ : selectedBig--;
    if (selectedBig >= carouselBigs.length) selectedBig = 0;
    if (selectedBig < 0) selectedBig = carouselBigs.length - 1;
    carouselBigs.forEach(big => big.classList.remove('show'));
    document.getElementById('cb' + selectedBig).classList.toggle('show');
  })
})
