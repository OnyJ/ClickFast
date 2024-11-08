const { JSDOM } = require("jsdom");

const { window } = new JSDOM(
  `
  <div>
    <button id="button-clicker">Click !!!</button>
    <div id="counter">0</div>
  </div>
  `
);

global.document = window.document;

let count = 0;

document
  .getElementById("button-clicker")
  .addEventListener("click", () => {
    count++;
    document.getElementById("counter").innerHTML = count;
  });

describe("Button Clicker", () => {
  beforeEach(() => {
    count = 0;
    document.getElementById("counter").innerHTML = count;
  });

  test("devrait augmenter counter de 1 apres chaque clic", () => {
    const button = document.getElementById("button-clicker");

    button.click();
    expect(document.getElementById("counter").innerHTML).toBe("1");

    button.click();
    expect(document.getElementById("counter").innerHTML).toBe("2");

    button.click();
    button.click();
    button.click();
    button.click();
    expect(document.getElementById("counter").innerHTML).toBe("6");
  });

  test("devrait initialiser counter a 0", () => {
    expect(document.getElementById("counter").innerHTML).toBe("0");
  });
});
