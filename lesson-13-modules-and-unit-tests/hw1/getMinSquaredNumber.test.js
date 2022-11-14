import { getMinSquaredNumber } from "./getMinSquaredNumber.js";

it("should get null if array is empty", () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it("should get null if we have string", () => {
  const result = getMinSquaredNumber("-7, 3, -2, 6, 45, -20");

  expect(result).toEqual(null);
});

it("should get square of minimum number", () => {
  const result = getMinSquaredNumber([-7, 5, -3, 6, 45, -20]);

  expect(result).toEqual(9);
});

it("should get square of minimum number", () => {
  const result = getMinSquaredNumber([-7, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
