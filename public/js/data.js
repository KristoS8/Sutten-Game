let btnStartGame = document.getElementById('btnStartGame');
let matchGame = document.getElementById('matchGame');

let options = document.querySelectorAll('.option_img');

const userCoice = document.querySelector('.userCoice img');
const botCoice = document.getElementById('botCoice');
const divBotCoice = document.getElementById('divBotCoice');

let randomNumber = Math.floor(Math.random() * 3)

options.forEach((image,index) => {
  image.addEventListener("click", (e) => {
    let imgSrc = e.target.src;
    userCoice.src = imgSrc;
  })
})

matchGame.style.visibility = 'hidden';

btnStartGame.hidden = false;
btnStartGame.addEventListener('click', function startGame() {
  btnStartGame.hidden = true;
  matchGame.style.visibility = 'visible';
});
