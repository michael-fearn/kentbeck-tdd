import { Dollar } from "./index";

describe("Dollar", () => {
  test("Multiply", () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });
});
