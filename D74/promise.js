// Promises...
console.log("This is Promise Program..!!");
let prom = new Promise((resolve, reject) => {

    let num = Math.random();
    if (num < 0.5) {
        console.log(`Random Num is: ${num}`);
        reject("Promise is Rejected..!!");
    }
    else {
        setTimeout(() => {
            console.log("Yes i'm Done..!!");
        }, 1000);
        resolve("Promise is Resolved..!!");
    }
});

prom.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});


let prom_1 = new Promise((resolve, reject) => {

    let num = Math.random();
    if (num < 0.5) {
        console.log(`Random Num is: ${num}`);
        reject("Promise is Rejected..!!");
    }
    else {
        setTimeout(() => {
            console.log("Yes! i'm Done..!!");
        }, 1000);
        resolve("Promise is Resolved..!!");
    }
});

// let prom_2 = Promise.all([prom, prom_1]);
// let prom_2 = Promise.allSettled([prom, prom_1]);
let prom_2 = Promise.race([prom, prom_1]);

prom_2.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});