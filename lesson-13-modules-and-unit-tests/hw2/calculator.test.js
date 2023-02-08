import { calc } from './calculator.js';

it('should get sum of numbers', () => {
  const result = calc('4 + 3');

  expect(result).toEqual('4 + 3 = 7');
});

it('should keep difference of numbers', () => {
  const result = calc('11 - 2');

  expect(result).toEqual('11 - 2 = 9');
});

it('should get multiplication of numbers', () => {
  const result = calc('5 * 5');

  expect(result).toEqual('5 * 5 = 25');
});

it('should get division of numbers', () => {
  const result = calc('49 / 7');

  expect(result).toEqual('49 / 7 = 7');
});

it('should get null if typeof expression is not string', () => {
  const result = calc(4 + 3);

  expect(result).toEqual(null);
});
