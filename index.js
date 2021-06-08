const age = 25;
const isFemale = true;
const driverStatus = 'bob';
const nameBram = false;
const nameSarah = true;
const totalAmount = x=5;


if (x >=100) {
    console.log ("Gratis flesje champagne");

} else if (x >= 50){
    console.log   ("Gratis portie nachos"); 

} else if (x >= 25){
    console.log  ( "Gratis (vega) bitterballen"); 

} else {
    console.log ("Bestel meer en krijg vele extra's")
}
    




if(nameBram || nameSarah){
    console.log ("Het is feest, je krijgt een gratis biertje");

} else {
    console.log ("De hele avond bier")
}


if(age >= 18) {
    console.log ("Je mag naar binnen");
} else {
    console.log ("helaas pindakaas");
}

if(age >=18 && age <=25) {
    console.log("Je krijgt 50% korting")
} else {
    console.log("Helaas je betaalt de hele prijs.")
}


if(isFemale) {
    console.log ("Je bent een vrouw");
} else {
    console.log ("Je bent geen vrouw, geen feest.");
}



if(driverStatus === 'bob') {
    console.log ("jij bent de bob, je rijdt en drinkt niet")
} else {
    console.log ("jij drinkt en rijdt dus niet!")
}

