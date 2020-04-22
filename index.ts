export class Dollar {
  amount = 0;

  constructor(amount: number) {
    this.amount = amount;
  }
  public times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  public equals(dollar: Dollar) {
    return this.amount == dollar.amount;
  }
}
