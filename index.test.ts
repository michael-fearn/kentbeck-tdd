import { Money, Bank } from "./index";
describe("Money", () => {
  test("Currency", () => {
    expect(Money.dollar(1).currency()).toEqual("USD");
    expect(Money.franc(1).currency()).toEqual("CHF");
  });

  test("Dollar Multiply", () => {
    const five = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  test("Franc Multiply", () => {
    const five = Money.franc(5);
    expect(five.times(2)).toEqual(Money.franc(10));
    expect(five.times(3)).toEqual(Money.franc(15));
  });

  test("Equality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  test("Addition", () => {
    const sum = Money.dollar(5).plus(Money.dollar(5));
    expect(Money.dollar(10)).toEqual(sum);
    const bank = new Bank();

    const reduced = bank.reduce(sum, "USD");
    expect(Money.dollar(10)).toEqual(reduced);
  });
});
