// from $ node --require ./setup-global.js async-await-test.js
// to npx jest
// and it will pick up the test file and show more useful msg
const { sumAsync, subtractAsync } = require("./math");

test("sumAsync add numbers", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

test("sum add numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
