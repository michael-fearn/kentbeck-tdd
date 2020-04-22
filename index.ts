export class Dollar {
  private amount = 0;

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

export class Franc {
  private amount = 0;

  constructor(amount: number) {
    this.amount = amount;
  }
  public times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }

  public equals(franc: Franc) {
    return this.amount == franc.amount;
  }
}
