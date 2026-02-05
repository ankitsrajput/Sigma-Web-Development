// Class & Object in Javascript...
let obj = {
    nam: "Ankit Singh",
    age: 21,
    course: "MERN FullStack",
    fee: "Free",
    dur: "6 Months"
};

console.log(obj);

let animal = {
    isEat: true,
    isWalk: true,
    isSleep: true,
    isFly: false
};
console.log(animal);

let rabbit = {
    isJump: true,
    __proto__: animal // Setting prototype...
};
console.log(rabbit);

// Another way to set prototype

rabbit.__proto__ = animal;
console.log(rabbit.isEat);
console.log(rabbit.isFly);