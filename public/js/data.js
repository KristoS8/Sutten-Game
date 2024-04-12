let btnStartGame = document.getElementById('btnStartGame');
let matchGame = document.getElementById('matchGame');

let options = document.querySelectorAll('.option_img');
let timeToStart = document.getElementById('timeToStart');
let matchTime = document.getElementById('matchTime');
let divOptionUser = document.getElementById('divOptionUser');

const userCoice = document.querySelector('.userCoice img');
const botCoice = document.querySelector('.botCoice img');
let result = document.getElementById('hasil');
let skor = document.getElementById('skor');
let skorMatch = 0;
let detik = 3;
let detikPertandingan = 29;

options.forEach((image,index) => {

    image.addEventListener("click", (e) => {
      let imgSrc = e.target.src;
      userCoice.src = imgSrc;

      let randomNumber = Math.floor(Math.random() * 3);

      let imgAsset = ["img/littleFinger.png", "img/indexFinger.png" ,"img/thumbsUp.png"]
    
      botCoice.src = imgAsset[randomNumber];
    
      let userValue = ["LF", "IF", "T"][index];
      let botValue = ["LF", "IF", "T"][randomNumber];

      let hasil = {
        LFLF : "Seri",
        LFIF : "Bot Menang, Kamu Kalah Point-1",
        LFT : "Kamu Menang, Bot Kalah Point+3",
        IFLF : "Kamu Menang, Bot Kalah Point+3",
        IFIF : "Seri",
        IFT : "Bot Menang, Kamu Kalah Point-1",
        TLF : "Bot Menang, Kamu Kalah Point-1",
        TIF : "Kamu Menang, Bot Kalah Point+3",
        TT : "Seri",
      };

      let hasilMatch = hasil[userValue + botValue];
 
      if (userValue == botValue) {
        result.innerHTML = "Seri , 0 Point"
        skorMatch = skorMatch + 0;
      }else{
        result.innerHTML = hasilMatch
        if (hasilMatch == "Kamu Menang, Bot Kalah Point+3") {
          skorMatch = skorMatch + 3
        }else if (hasilMatch == "Bot Menang, Kamu Kalah Point-1") {
          skorMatch = skorMatch - 1
        }
      }

      skor.textContent = "Skor Kamu : " + skorMatch

    });

});

matchGame.style.visibility = 'hidden';
hasil.style.visibility = 'hidden';
timeToStart.style.visibility = 'hidden';

btnStartGame.hidden = false;
btnStartGame.addEventListener('click', function startGame() {

  timeToStart.style.visibility = 'visible'
  let Interval = setInterval(() => {
    timeToStart.innerHTML = detik;
    detik--;

    if (detik === -1) {
      timeToStart.innerHTML = "Let's Play!";
    }

    if (detik < -1) {
      clearInterval(Interval);
      timeToStart.style.visibility = 'hidden';
      matchGame.style.visibility = 'visible';
      hasil.style.visibility = 'visible';

      let waktuPertandingan = setInterval(() => {
        matchTime.innerHTML = detikPertandingan + "s"
        detikPertandingan--;
      
        if (detikPertandingan < -1) {
          matchTime.innerHTML = "waktu habis!"
          divOptionUser.style.pointerEvents = 'none';
          result.style.visibility = 'hidden';
        }
      
      }, 1000);

    }
  }, 1000);

  btnStartGame.hidden = true;

  

});
