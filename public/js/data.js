let btnStartGame = document.getElementById('btnStartGame');
let matchGame = document.getElementById('matchGame');

let options = document.querySelectorAll('.option_img');

const userCoice = document.querySelector('.userCoice img');
const botCoice = document.querySelector('.botCoice img');
let hasil = document.getElementById('hasil');

options.forEach((image,index) => {
  image.addEventListener("click", (e) => {
    let imgSrc = e.target.src;
    userCoice.src = imgSrc;

    randomImg()

  });
});

matchGame.style.visibility = 'hidden';
hasil.style.visibility = 'hidden';

btnStartGame.hidden = false;
btnStartGame.addEventListener('click', function startGame() {
  btnStartGame.hidden = true;
  matchGame.style.visibility = 'visible';
  hasil.style.visibility = 'visible';

});

function randomImg() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    botCoice.src = "img/littleFinger.png";
  }else if (randomNumber == 1) {
    botCoice.src = "img/indexFinger.png";
  }else if (randomNumber == 2) {
    botCoice.src = "img/thumbsUp.png";
  }

}
