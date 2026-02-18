// Javascript Interview Question Bank.
// Question.1 :-

let nam = ["Nirbhay", "Gargi", "Jatin", "Deepti", "Archit", "Sameer", "Sewak Ram Satnami", "Anjali", "Ankit", "Rahul", "Aman", "Tez Mohd", "Tejendra", "Madhav Daas", "Mridul"];

let houses = [];

function assignHouse() {
    for (const stdName of nam) {
        if (stdName.length < 6) {
            houses.push("Gryffindor");
        }
        else if (stdName.length < 8) {
            houses.push("Hufflepuff");
        }
        else if (stdName.length < 12) {
            houses.push("Ravenclaw");
        }
        else {
            houses.push("Slytherin");
        }
    }

    for(let i=0; i<nam.length; i++){
        // console.log(nam[i] + ": " + houses[i]);
        let div = document.createElement("div");
        div.innerText = nam[i] + ": " + houses[i];
        document.querySelector(".col-12").appendChild(div);
    }
}
assignHouse();

// Question.2 :-