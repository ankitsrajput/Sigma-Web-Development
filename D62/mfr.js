// map(), filter() & Reduce()...
let arry = [23, 56, 32, 11, 40, 78];
let newArr = [];

for(i=0; i<arry.length; i++){
    const elements = arry[i];
    newArr.push(elements**2);
}
console.log("New Array =>", newArr);

// we can do this again using map
let newAr = arry.map((value)=>{
    return value**2;
})
console.log("New Array Using Map =>", newAr);

// Filter()...
let ans_arr = [23, 1, 5, 74, 90, 34, 65, 27];
const GreatThan7 = (element) =>{
    if(element>5){
        return true;
    }
    return false;
}
let newFilArr = ans_arr.filter(GreatThan7);
console.log(newFilArr);

// Reduce()...
let arr_2 = [1, 2, 3, 4, 5]; //1*2 = 2*3 = 6*4 = 24*5 = 120.....n
const redu = (p, q) => {
    return p * q;
}
let res = arr_2.reduce(redu);
console.log("Reduce Functions Result =>", res);

// Array From...
let frmArr = Array.from("Ankit"); //Convert "Ankit" into an array
console.log(frmArr);