let button = document.querySelector("#btn");

button.addEventListener("click", buttonclicked);

function buttonclicked(){

let navn = document.querySelector("#navn").value;

let efternavn = document.querySelector("#efternavn").value;

let lon = document.querySelector("#lon").value;

let region = document.querySelector("#region").value;


switch(region) {
case "Hovedstadsområdet": 
totalToPay = lon * 0.25; 
tilbage = lon - totalToPay;
break;
case "Storkøbenhavn":
 totalToPay = lon * 0.35; 
tilbage = lon - totalToPay;
break;
case "Nordsjælland":
 totalToPay = lon * 0.45; 
tilbage = lon - totalToPay;
break;
case "Sydsjælland":
 totalToPay = lon * 0.55; 
tilbage = lon - totalToPay;
break;
case "Fyn":
 totalToPay = lon * 0.15; 
tilbage = lon - totalToPay;
break;
case "Jylland":
 totalToPay = lon * 0.75; 
tilbage = lon - totalToPay;
break;
}

document.querySelector('.besked').innerHTML = navn + " " + efternavn + " " + "du bor i region" + " " + region + " " + "og du betaler" + " " + totalToPay + " " + "kr i skat, og har" + " " + tilbage + " " + "kr efter skat";
}
