// Array in Loops...
let ar = [11, 45, 23, 34, 89, 76, 90];
console.log("<=::Print Array using loops::=>");

// Classic for loop...
for(i=0; i<ar.length ;i++)
{
    console.log(ar[i]);
}

// for each loops...
ar.forEach((value, index, ar)=>{
    console.log("Value =>",value, ", Index =>", index, ar);
})

// For IN loops...
let obj = {
    nam : "Ankit",
    stdId : "MCA2024041",
    mobNo : 9360872134
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, "=>" ,element);
    }
}

// For Of loops...
for (const value of ar) {
    console.log("Array Elements =>", value);
}
