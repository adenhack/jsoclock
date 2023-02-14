const saat = document.querySelector(".saat");
const isim = document.querySelector(".isim");
const cont = document.querySelector(".container");

let günler = ["PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ", "PAZAR"];

let sor = prompt("İsminizi giriniz");

isim.innerHTML = `${sor[0].toUpperCase()}${sor.slice(1)}!`;
isim.style.color = `grey`;
isim.style.fontSize = `35px`;
isim.style.fontFamily = "Arial-Black";

function whatTime() {
    let saatKac = new Date();
    let st = saatKac.getHours()
    let dakika = saatKac.getMinutes();
    let saniye = saatKac.getSeconds();
    let gün = saatKac.getDay() - 1;
    saat.innerHTML = `${st}:${dakika < 10 ? "0" + dakika : dakika}:${saniye < 10 ? "0" + saniye : saniye} ${günler[gün]}`;
}

setInterval(whatTime, 1000);


