const pa = require("./padArray.js");
const arrayEqualsShallow = require("shallow-equal/arrays");

test("should pad the array if needed", () => {
  expect(arrayEqualsShallow(pa.pad([1, 2, 3], 5), [1, 2, 3, null, null])).toBe(true);
  expect(arrayEqualsShallow(pa.pad([1, 2, 3], 5, "apple"), [1, 2, 3, "apple", "apple"])).toBe(true);
});
