const latar = document.querySelector('.bigMouse');

function tampiL(shown,hidden) {
    document.getElementById(shown).style.display="block";
    document.getElementById(hidden).style.display="none";
}

function gantiBG(){
    latar.style.background = "red";

}