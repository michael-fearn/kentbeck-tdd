export abstract class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  static dollar(amount: number) {
    return new Dollar(amount);
  }

  static franc(amount: number) {
    return new Franc(amount);
  }

  public equals(money: Money): boolean {
    return (
      this.amount == money.amount &&
      money.constructor.name == this.constructor.name
    );
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }
  public times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
