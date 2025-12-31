// JavaScript DOM
// Get body of html document in browsers console
let body = document.body;
console.log(body);

// get child node/elements into console
let cNode_1 = document.body.childNodes;
let cNode_2 = document.body.childNodes[0]; //this index we use to get index^th number childNode
let cNode_3 = document.body.childNodes[1]; //this index we use to get index^th number childNode
let cNode_4 = document.body.childNodes[2]; //this index we use to get index^th number childNode
let cNode_5 = document.body.childNodes[3].childNodes; //this index we use to get child of index^th number childNode
console.log(cNode_1);
console.log(cNode_2);
console.log(cNode_3);
console.log(cNode_4);
console.log(cNode_5);

// 1st Child Node Element of Body
let cNode = document.body.firstElementChild;
console.log("1st Child Element Of Body =>", cNode);

// Last Child Node Element of Body
let cNodeLast = document.body.lastElementChild;
console.log("Last Child Element Of Body =>", cNodeLast);

// Child Of Container Or 1st Child Node, Of 1st child Node of Body
let cont = cNode.firstElementChild;
console.log("First Child Element Of 1st Child Of Body =>", cont);

// Child Of Container Or Last Child Node, Of 1st child Node of Body
let cont_1 = cNode.lastElementChild;
console.log("Last Child Element Of 1st Child Of Body =>", cont_1);

// Parent Of Child Node...
let par = cNode.firstElementChild.parentElement;
console.log("Parent of Element =>", par);


/* 
Nodes : Nodes contains text, comments & elements.
Elements : Elements stands for only html elements.
*/

// Only Child Elements of any node/Element ...
let chld = cNode.firstElementChild.parentElement.children;
console.log("Childs of Element =>", chld);

// Sibling Means that nodes who have same parent elements...
// Only Next Sibling Elements of any node/Element ...
let nxtSib = cNode.firstElementChild.parentElement.children[0].nextElementSibling;
console.log("Next Sibling of Element Of any Node =>", nxtSib);
/* Next Sibling Means next sibling of present elements */

// Only Next Sibling Elements of any node/Element ...
let PreSib = cNode.firstElementChild.parentElement.children[1].previousElementSibling;
console.log("Sibling of Element Of any Node =>", PreSib);
/* Previous Sibling Means 1 Index back or previous sibling of present elements */

// let PreSibb = cNode.firstElementChild.parentElement.children[1].previousSibling; //This line contain all Nodes like comment, text-Node, elements.

// Html Table

let getTbl = document.body.children[1];
let getTblRow = document.body.children[1].rows;
console.log("2nd Child Element of Body =>", getTbl);
console.log("Rows of 2nd Child Element of Body =>", getTblRow);
