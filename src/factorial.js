//Implement a function to calculate the factoria of a number using recursion
// ensure it habdles edge cases: negative numbers or non-integer inputs

function factorial(n) {
    if (n < 0) {
        throw new Error('Cannot calculate factorial of a negative number');
    }

    var total = 1;
    for (let i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
}

module.exports = factorial;