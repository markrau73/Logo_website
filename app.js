// Timer

const countDownDate = new Date("Dec 31, 2018 00:00:00").getTime();

const x = setInterval(() => {

  let now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".second-container__content__timer-input__timer__day").innerHTML = days + "d";
  document.querySelector(".second-container__content__timer-input__timer__hour").innerHTML = hours + "h";
  document.querySelector(".second-container__content__timer-input__timer__minutes").innerHTML = minutes + "m";
  document.querySelector(".second-container__content__timer-input__timer__seconds").innerHTML = seconds + "s";

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".second-container__content__timer-input__timer__expired").innerHTML = "EXPIRED";
  }
}, 1000);

// Video player

const video = document.getElementsByTagName('video')[0];
const button = document.querySelector('.second-container__content__video-social__video button');

     button.addEventListener('click', () =>
     {
       video.play();
       button.style.visibility = "hidden";
     });

     video.onended = () => button.style.visibility = "visible";

// Slider

const slides = document.querySelectorAll('.third-container__content__person');
const dots = document.querySelectorAll('.third-container__content__person__slider-controls__control-dot');

for(let j=0; j<slides.length; j++){
  slides[j].classList.add('invisible');
}
slides[0].classList.remove('invisible');

for(let i = 0; i < dots.length; i++){
  dots[i].addEventListener('click', (e) => {
      let id = e.target.dataset.number;
    for(let j=0; j<slides.length; j++){
      slides[j].classList.add('invisible');
    }
    slides[id - 1].classList.remove('invisible');
  })
}

for(let i = 0; i < dots.length; i++){
  dots[i].classList.remove('active');
  dots[0].classList.add('active');
}

  dots[0].addEventListener('click', (e) =>{
    e.target.classList.add('active');
    dots[1].classList.remove('active');
    dots[2].classList.remove('active');
    dots[3].classList.remove('active');
  });

  dots[1].addEventListener('click', (e) =>{
    e.target.classList.add('active');
    dots[0].classList.remove('active');
    dots[2].classList.remove('active');
    dots[3].classList.remove('active');
  });

  dots[2].addEventListener('click', (e) =>{
    e.target.classList.add('active');
    dots[0].classList.remove('active');
    dots[1].classList.remove('active');
    dots[3].classList.remove('active');
  });

  dots[3].addEventListener('click', (e) =>{
    e.target.classList.add('active');
    dots[0].classList.remove('active');
    dots[1].classList.remove('active');
    dots[2].classList.remove('active');
  });
