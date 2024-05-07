const factorial = require('../factorial.js');

test('Factorial of 0 must be 1', () => {
    expect(factorial(0)).toBe(1);
});

test('Factorial of 5 must be 120', () => {
    expect(factorial(5)).toBe(120);
});

test('Factorial of a negative number must expect an error', () => {
    expect (() => {
        factorial(-1);
    }).toThrow();
});