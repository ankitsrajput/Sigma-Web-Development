// Slugify to create a clean slug

var slugify = require('slugify');

let a = slugify('Some String');
let b = slugify('Some String & Special Character Like @#$%', '-')
console.log(a);
console.log(b);

console.log("Hello Server! It's Your Admin Ankit");