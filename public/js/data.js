let btnStartGame = document.getElementById('btnStartGame');
let matchGame = document.getElementById('matchGame');

let options = document.querySelectorAll('.option_img');
let timeToStart = document.getElementById('timeToStart');
let matchTime = document.getElementById('matchTime');
let divOptionUser = document.getElementById('divOptionUser');
let gameRules = document.getElementById('aturanGame');
let selectTime = document.getElementById('selectTime');
let groupTime = document.getElementById('groupTime');
let time10s = document.getElementById('time10s');
let time30s = document.getElementById('time30s');
let time1m = document.getElementById('time1m');
let retry = document.getElementById('retry');
let highestSkor = document.getElementById('highestSkor');

const userCoice = document.querySelector('.userCoice img');
const botCoice = document.querySelector('.botCoice img');
let result = document.getElementById('hasil');
let skor = document.getElementById('skor');
let skorMatch = 0;
let detik = 3;
let detikPertandingan = 0;

groupTime.style.display = 'none';
matchTime.style.display = 'none';
retry.style.display = 'none';
highestSkor.style.display = 'block';
let LsSkor = localStorage.getItem('skorTertinggi');
highestSkor.innerHTML = "Skor Tertinggi: " + LsSkor;

if (LsSkor == null) {
  highestSkor.style.display = 'none';
}

selectTime.addEventListener('click', function () {
  selectTime.style.display = 'none';
  groupTime.style.display = 'flex';

  time10s.addEventListener('click', function () {
    time30s.style.display = 'none';
    time1m.style.display = 'none';
    detikPertandingan = 10;
  });

  time30s.addEventListener('click', function () {
    time10s.style.display = 'none';
    time1m.style.display = 'none';
    detikPertandingan = 30;
  });

  time1m.addEventListener('click', function () {
    time30s.style.display = 'none';
    time10s.style.display = 'none';
    detikPertandingan = 60;
  });
});

options.forEach((image, index) => {
  image.addEventListener('click', (e) => {
    let imgSrc = e.target.src;
    userCoice.src = imgSrc;

    let randomNumber = Math.floor(Math.random() * 3);

    let imgAsset = ['img/littleFinger.png', 'img/indexFinger.png', 'img/thumbsUp.png'];

    botCoice.src = imgAsset[randomNumber];

    let userValue = ['LF', 'IF', 'T'][index];
    let botValue = ['LF', 'IF', 'T'][randomNumber];

    let hasil = {
      LFLF: 'Seri',
      LFIF: 'Bot Menang, Kamu Kalah Point-1',
      LFT: 'Kamu Menang, Bot Kalah Point+3',
      IFLF: 'Kamu Menang, Bot Kalah Point+3',
      IFIF: 'Seri',
      IFT: 'Bot Menang, Kamu Kalah Point-1',
      TLF: 'Bot Menang, Kamu Kalah Point-1',
      TIF: 'Kamu Menang, Bot Kalah Point+3',
      TT: 'Seri',
    };

    let hasilMatch = hasil[userValue + botValue];

    if (userValue == botValue) {
      result.innerHTML = 'Seri , 0 Point';
      skorMatch = skorMatch + 0;
    } else {
      result.innerHTML = hasilMatch;
      if (hasilMatch == 'Kamu Menang, Bot Kalah Point+3') {
        skorMatch = skorMatch + 3;
      } else if (hasilMatch == 'Bot Menang, Kamu Kalah Point-1') {
        skorMatch = skorMatch - 1;
      }
    }

    skor.textContent = 'Skor Kamu : ' + skorMatch;
  });
});

matchGame.style.visibility = 'hidden';
hasil.style.visibility = 'hidden';
timeToStart.style.visibility = 'hidden';

btnStartGame.hidden = false;
btnStartGame.addEventListener('click', function startGame() {
  highestSkor.style.display = 'none';
  gameRules.parentNode.removeChild(gameRules);
  timeToStart.style.visibility = 'visible';
  let Interval = setInterval(() => {
    timeToStart.innerHTML = detik;
    detik--;
    

    if (detik === -1) {
      timeToStart.innerHTML = "Let's Play!";
      time10s.style.display = 'none';
      time30s.style.display = 'none';
      time1m.style.display = 'none';
      selectTime.style.display = 'none';
    }

    if (detik < -1) {
      clearInterval(Interval);
      timeToStart.parentNode.removeChild(timeToStart);
      matchGame.style.visibility = 'visible';
      hasil.style.visibility = 'visible';
      matchTime.style.display = 'block';

      let waktuPertandingan = setInterval(() => {
        matchTime.innerHTML = detikPertandingan + 's';
        detikPertandingan--;

        if (detikPertandingan < -1) {
          clearInterval(waktuPertandingan);
          matchTime.innerHTML = 'waktu habis!';
          divOptionUser.style.pointerEvents = 'none';
          result.style.display = 'none';
          skor.innerHTML = 'Match Selesai, Skor Kamu: ' + skorMatch;
          retry.style.display = 'block';

          localStorage.setItem('skorTertinggi', skorMatch);
        }
      }, 1000);
    }
  }, 1000);

  btnStartGame.hidden = true;
});

retry.addEventListener('click', function () {
  retry = window.location.reload();
});

