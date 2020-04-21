export class Dollar {
  amount = 0;

  constructor(amount: number) {
    this.amount = amount;
  }
  public times  (multiplier: number) {
    this.amount *= multiplier;
  }
}
