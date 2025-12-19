// Factorial of a number using reduce method & for loop
let a = 6;
function factorial(num){
    let arr = Array.from(Array(num + 1).keys());
    console.log(arr.slice(1,));
    let fact = arr.slice(1,).reduce((acc, val) =>{
        return acc * val;
    })
    return fact;
    // console.log(fact);
}
factorial(a);

// Factorial using for loop
let n = 5;
function factFor(num){
    let fact = 1;
    for(let i=1; i<=num; i++)
    {
        fact = fact * i;
    }
    return fact;
    // console.log(fact);
}
factFor(n)