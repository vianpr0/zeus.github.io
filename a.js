const latar = document.querySelector('.bigMouse');
const levela = document.querySelector('.sedangL')
const lagu = document.querySelector('#Lagu');

function tampiL(shown,hidden) {
    document.getElementById(shown).style.display="block";
    document.getElementById(hidden).style.display="none";
}

function laguu() {
    lagu.play();
}

