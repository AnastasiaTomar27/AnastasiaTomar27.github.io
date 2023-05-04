document.addEventListener("DOMContentLoaded", onkoKirjautunut);
function onkoKirjautunut(){
    let kirjautunut = 'kylla';
    localStorage.setItem("nimi", document.getElementById("nimi").value);
if(kirjautunut === 'kylla') {
    document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
} 
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
}