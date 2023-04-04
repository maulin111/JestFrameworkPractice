// importing the javascript function
const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
   
      expect(mathOperations.sum(1, 2)).toBe(3);
   
    });

    test('subtract 3 - 2 should return 1', () => {
   
      expect(mathOperations.diff(3, 2)).toBe(1);
   
    });

    test('Multiply 3 and 2 should return 6', () => {
   
      expect(mathOperations.product(3, 2)).toBe(6);
   
    });

    test('Multiply 4 and 2 should return 8', () => {
   
      expect(mathOperations.product(4, 2)).toBe(8);
   
    });

    test('regEX', () => {
   
      expect(mathOperations.lowercase('abc')).toBe('^/a.c$/');

    });

    test('regEX1', () => {
   
      expect(mathOperations.Number(10)).toBe('/[0-9]/');

    });
   
   })