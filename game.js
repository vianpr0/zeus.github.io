const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.puapan-skor');
const hiScore = document.querySelector('.hi-score');
const pop = document.querySelector('#pop');
const hmundur = document.querySelector('#countdown');

let mundur = 10;
let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}


function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}



function mulai() {
  selesai = false;
  skor = 0;
  hmundur.textContent=10;
  papanSkor.textContent = 0;
  munculkanTikus();
  let timeleft = 10;
  let downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "0"
  }
}, 1000);
  setTimeout(() => {
    selesai = true;
    if (selesai){
      swal({
        title: "Bagus ",
        title: "Skor Kamu "+ skor,
        icon: "success",
        button: "Lagi",
      });
    }
  }, 10000);
}

function pukul() {
  skor++;
  papanSkor.textContent = skor;
  this.parentNode.classList.remove('muncul');
  pop.play();

}


tikus.forEach(t => {
  t.addEventListener('click', pukul);
});
