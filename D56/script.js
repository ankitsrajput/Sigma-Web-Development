// JavaScript Loops
let a = 1;
const n =100;

// For Loop
for(i=0; i<n; i++)
{
    let res = a + i ;
    console.log(res);
    // document.getElementById("numbers").innerText = res;
}

// For in Loop
let obj = {
    name : 'Ansh',
    studId : 'MCA2024140',
    rollNo : 24204027,
    course : 'MCA'
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, ":", element);
}

// For Of Loop
let nm = "Ankit-Singh";
for (const ch of nm) {
    console.log(ch);
}

// While Loop
let j = 1;
while (j<=10) {
    console.log(j);
    j++;
}

// Do While Loop
let p = 5;
do{
    console.log(p);
    p++;
}while(p<=10);