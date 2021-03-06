// for use it everywhere
// $ node --require ./setup-global.js start.js
// $ node --require ./setup-global.js async-await-test.js
async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✘ ${title}`);
    console.error(error);
  }
}

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

global.test = test;
global.expect = expect;
