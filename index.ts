export class Money {
  protected amount: number;
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
}
