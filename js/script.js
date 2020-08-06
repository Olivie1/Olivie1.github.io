let text = document.querySelector('.color');
let r = 0;
let g = 0;
let b = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

setInterval(function() {
  r = getRandomInt(0,256);
  g = getRandomInt(0,256);
  b = getRandomInt(0,256);
  text.style.color = 'rgb('+r+', ' +g+', '+b+')';
}, 140);




  