// Business name generator
/* Create Business name generator by combinning list of adjectives, shop name and other words */
/* Adjective => Crazy, Amazing, Fire || Shop Name => Engine, Foods, Garments || Other Words => Bros, Limited, Hub */
/* Note : Don't Use Array to creating this app */ 

let rand = Math.random();
let fName, secName, thrdName;

// 0, 0.33, 0.66, 1 (These ranges will be between when we divide 1 into 3 parts)
// Generating first word
if(rand < 0.33){
    fName = "Crazy";
}
else if(rand < 0.66){
    fName = "Amazing";
}
else{
    fName = "Fire";
}

// Generating second word
rand = Math.random();
if(rand < 0.33){
    secName = "Engine";
}
else if(rand < 0.66){
    secName = "Foods";
}
else{
    secName = "Garments";
}

// Generating third word
rand = Math.random();
if(rand < 0.33){
    thrdName = "Bros";
}
else if(rand < 0.66){
    thrdName = "Limited";
}
else{
    thrdName = "Hub";
}

console.log("Your Business Name =>", `${fName} ${secName} ${thrdName}`);