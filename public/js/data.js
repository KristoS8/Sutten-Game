let btnStartGame = document.getElementById('btnStartGame');
let matchGame = document.getElementById('matchGame');

matchGame.style.visibility = "hidden";

btnStartGame.hidden = false;
btnStartGame.addEventListener('click', function startGame() {

  btnStartGame.hidden = true;
  matchGame.style.visibility = "visible";
});
