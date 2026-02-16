// Advance Javascript....
async function sleep() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => {
            res(4274);
        }, 1000);
    })
    return promise;
}
// IIFE (Imediate Invoke Function Expression)
(async function main() {
    let s = await sleep();
    console.log(s);
    let t = await sleep();
    console.log(t);
})();

// Array Destructuring...

let [x, y, ...rest] = [1, 5, 7, 11, 13, 17, 19];
console.log(x, y, rest);

// Object Destructuring...

let obj = {
    nam : "Aksha",
    prof : "Writer",
    age : 24,
    mob : 9369726022
};
// console.log(obj.nam);
let {nam, prof, age, mob} = obj;
console.log(nam, prof, age, mob);

function Sum(a, b, c){
    let res = a + b + c;
    return res;
}

(async function Add() {
   let arr = [3, 4, 13];
//    console.log(arr[0] + arr[1] + arr[2]);
//    console.log(Sum(arr[0], arr[1], arr[2]));
   console.log(Sum(...arr));
})();