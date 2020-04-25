export class Money implements Expression {
  public readonly amount: number;
  protected _currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  static dollar(amount: number) {
    return new Money(amount, "USD");
  }

  static franc(amount: number) {
    return new Money(amount, "CHF");
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency());
  }

  public equals(money: Money): boolean {
    return this.amount == money.amount && money.currency() == this.currency();
  }
  currency(): string {
    return this._currency;
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(to: string): Money {
    return this;
  }
}

interface Expression {
  reduce(to: string): Money;
}

export class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}

export class Sum implements Expression {
  augend: Money;
  addend: Money;
  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(to: string) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
