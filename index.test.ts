import { Money, Bank, Sum } from "./index";
describe("Money", () => {
  test("Currency", () => {
    expect(Money.dollar(1).currency()).toEqual("USD");
    expect(Money.franc(1).currency()).toEqual("CHF");
  });

  test("Multiply Dollar", () => {
    const five = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  test("Multiply Dollar", () => {
    const five = Money.franc(5);
    expect(five.times(2)).toEqual(Money.franc(10));
    expect(five.times(3)).toEqual(Money.franc(15));
  });

  test("Equality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  test("Plus Returns Sum", () => {
    const five = Money.dollar(5);
    const result = five.plus(five);
    const sum = result as Sum;

    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });
});

describe("Bank", () => {
  test("Addition", () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();

    const reduced = bank.reduce(sum, "USD");
    expect(Money.dollar(10)).toEqual(reduced);
  });

  test("Reduce Sum", () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(7));
  });

  test("Reduce Money", () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");

    expect(result).toEqual(Money.dollar(1));
  });
});
