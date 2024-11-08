const multiply = require("./multiply");

test("Devrait multiplier 2x2 et retourner 4", () => {
  expect(multiply(2, 2)).toBe(4);
});
