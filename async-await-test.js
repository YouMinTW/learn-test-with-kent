const { sumAsync, subtractAsync } = require("./math");
// refactor
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

// test function make way easier to identify the error

// now it work both in sync and async test
async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✘ ${title}`);
    console.error(error);
  }
}
