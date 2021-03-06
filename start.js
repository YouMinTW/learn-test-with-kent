const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;
let result, expected;

function sumTest() {
  result = sum(3, 7);
  expected = 10;
  expect(result).toBe(expected);
}
test("sum add numbers", sumTest);

function subtractTest() {
  result = subtract(7, 3);
  expected = 4;
  expect(result).toBe(expected);
}
test("subtract subtracts numbers", subtractTest);

// it is imperative, let's make some abstraction

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {}, // check deep copy
    toBeGreaterThan(expected) {},
  };
}

// But if there's any assertion test encounter error, other test won't run QwQ
// We hope it can run all test
// And the error message didn't help properly to see/identify where the error happened
// coz we throw Error without more specific message

// Here's what we do ...

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✘ ${title}`);
    console.error(error);
  }
}
