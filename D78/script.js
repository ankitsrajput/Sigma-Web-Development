// Error Handling...

function Calc() {
    let num_1 = prompt("Enter 1st Number : ");
    let num_2 = prompt("Enter 2nd Number : ");
    if (isNaN(num_1) || isNaN(num_2)) {
        throw SyntaxError("Input must be a number!!");
    }

    let sum = parseInt(num_1) + parseInt(num_2);
    let div = parseInt(num_1) / parseInt(num_2);
    try {
        alert("The Sum is : " + sum);
        alert("The Division is : " + div);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    } finally {
        console.log("Execution Bindup..!!");
    } // Finally Block will always execute when you're done with try-catch.
    // Finally block executes when you return from try or catch block because return end the execution of funtion but finally block will execute when you use return.

}

Calc();