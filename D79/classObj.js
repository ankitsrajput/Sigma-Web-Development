// Class & Object...

class animals {
    constructor(name) {
        this.name = name;
        console.log("Object Created...");
    }

    isEat() {
        console.log(`${this.name} is Eating...`);
    }

    isWalk() {
        console.log(`${this.name} is Walking...`);
    }

    isJump() {
        console.log(`${this.name} is Jumping also...`);
    }

    isFly() {
        console.log(`${this.name} is Flying...`);
    }
}

class lion extends animals {

    constructor(name) {
        super(name);
    }

    isEat() {
        console.log(`${this.name} is Eating Meat...`);
    }
}

// Creating Object For Dog...
let dog = new animals("Dogesh");
console.log(dog);
dog.isEat();
dog.isWalk();
dog.isJump();


// Creating Object For lion...
let lio = new lion("Simba");
console.log(lio);