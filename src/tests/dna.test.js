const isValidDNA = require("../dna.js");

test('This DNA chain is valid', () => {
    expect(isValidDNA("CTAG")).toBe(true);
});

test('This is not a valid DNA chain', () => {
    expect(isValidDNA("CTXG")).toBe(false);
});