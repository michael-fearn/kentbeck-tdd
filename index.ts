export abstract class Money {
  protected amount: number;
  protected _currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  static dollar(amount: number) {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number) {
    return new Franc(amount, "CHF");
  }

  public equals(money: Money): boolean {
    return (
      this.amount == money.amount &&
      money.constructor.name == this.constructor.name
    );
  }
  currency(): string {
    return this._currency;
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string = "USD") {
    super(amount, currency);
  }

  public times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string = "CHF") {
    super(amount, currency);
  }
  public times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
