
const getal1 = prompt ("Voer een getal in");
const getal2 = prompt ("Voer een getal in");
const invoer = "De getallen die u invoerde waren: " + parseInt(getal1) + " en " + parseInt(getal2);


const vergelijken = (getal1 > getal2)
? " | Het eerste getal is groter"
:  (getal1 === getal2) ? " deze zijn gelijk "
: " | Het eerste getal is kleiner";

console.log(invoer);
console.log(vergelijken);


document.getElementById("uitvoer").innerHTML = invoer + vergelijken;
