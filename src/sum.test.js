const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds -10 + -2 to equal -12", () => {
  expect(sum(-10, -2)).toBe(-12);
});

test("additionne 'ban' et 'ane' to equaleee banane", () => {
  expect(sum("ban", "ane")).toBe("banane");
});
