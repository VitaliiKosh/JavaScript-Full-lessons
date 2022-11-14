import { reverseArray, withdraw, getAdults } from "./index.js";

it("should return reversed array", () => {
  const result = reverseArray([11, 4, 8, 3]);

  expect(result).toEqual([3, 8, 4, 11]);
});

it("should return empty array", () => {
  const result = reverseArray([]);

  expect(result).toEqual([]);
});

it("should return null if there is a string", () => {
  const result = reverseArray("11, 4, 8, 3");

  expect(result).toEqual(null);
});

it("should return the difference between the account and the deductible amount of a particular person", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 60);

  expect(result).toEqual(27);
});

it("should return the difference between the account and the deductible amount of a particular person", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "Ann", 1350);

  expect(result).toEqual(50);
});

it("should return -1 if the substracted amount is greater than the amount that is in the persons account", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);

  expect(result).toEqual(-1);
});

it("should return every person whose age is equal to or greater than 18", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});

it("should return every person whose age is equal to or greater than 18", () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it("should return empty object if there is no person whose age is equal to or greater than 18", () => {
  const result = getAdults({ "Max Payne": 16, Josetta: 17, Clarence: 14 });

  expect(result).toEqual({});
});
