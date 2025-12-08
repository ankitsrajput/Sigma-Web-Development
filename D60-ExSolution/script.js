// Faulty Exercise Solution....

let rand = Math.random();
console.log(rand);
let num_1 = prompt("Enter a Number :");
let op = prompt("Enter a Operator :");
let num_2 = prompt("Enter a Number :");

let obj = {
    '+' : '-',
    '*' : '+',
    '-' : '/',
    '/' : '**'
};


if(rand > 0.1){
    // Perform correct calculation
    alert(`Result : ${eval(`${num_1} ${op} ${num_2}`)}`);
}
else{
    // Perform Faulty Calculation
    op = obj[op];
    alert(`Result : ${eval(`${num_1} ${op} ${num_2}`)}`);
}