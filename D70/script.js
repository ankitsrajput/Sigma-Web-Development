// Insert/Remove Elements Using DOM

// Main Container
let cont = document.querySelector('.container');
console.log(cont);
console.log(cont.innerHTML);
console.log(cont.innerText);
console.log(cont.outerHTML);
console.log(cont.tagName);
console.log(cont.nodeName);
console.log(cont.textContent);
console.log(cont.dataset);

// cont.hidden = false; // To show the element
// cont.hidden = true; // To hide the element


// Box-1
let bx1 = document.querySelector('.box-1');

console.log(bx1);
console.log(bx1.innerHTML);
console.log(bx1.innerText);
bx1.innerHTML = "Hello Myself Aksha, and I'm a writter.";
console.log(bx1.hasAttribute('style'));
console.log(bx1.getAttribute('style'));

//  Box-2
let bx2 = document.querySelector('.box-2');

console.log(bx2);
console.log(bx2.hasAttribute('style'));
console.log(bx2.getAttribute('style'));
console.log(bx2.setAttribute('style', 'color: green'));
console.log(bx2.hasAttribute('style'));

// Create Element
let div_1 = document.createElement('div');
let div_2 = document.createElement('div');
div_1.setAttribute('class', 'box-3');
div_2.setAttribute('class', 'box-4');
div_1.innerText = "This Div-1 is Created Using JS";
div_2.innerText = "This Div-2 is Created Using JS";
cont.append(div_1); // Insert Element
cont.before(div_1); // Insert Element Before Container
cont.after(div_2); // Insert Element After Container
cont.insertAdjacentHTML('afterend', '<b>Hello Bold Uncle, How Are You Now.</b>');

// Remove Elements
// cont.remove(); // Remove The Container & Its Child Elements
// bx1.remove(); // Remove Box-1

// Class List
console.log(cont.classList); // Methode-1 To get class list
let clsList = cont.classList; // Methode-2 To get class list
let clsName = cont.className; // To get Class Name
console.log(clsList);
console.log(clsName);
cont.classList.add('bg-secondary'); // To Add New Class
cont.classList.remove('bg-dark'); // To Remove Class
console.log(clsList);