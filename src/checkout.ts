export class Checkout {
  public prices: any
  public items: any
  public discounts: any

  constructor() {
    this.prices = new Object()
    this.items = new Object()
    this.discounts = new Object()
  }

  public addItemPrice(item: any, price: number): void {
    this.prices[item] = price
  }

  public addItem(item: any): void {
    if (!this.prices[item]) {
      throw 'No price defined for item: ' + item
    }
    if (!this.items[item]) {
      this.items[item] = 1
    } else {
      this.items[item]++
    }
  }

  public calculateTotal(): number {
    let total = 0
    for (let item in this.items) {
      total += this.calculateItemTotal(item)
    }
    return total
  }

  private calculateItemTotal(item: any): number {
    let total = 0
    let discount = this.discounts[item]
    if (discount) {
      total += this.calculateDiscount(item, this.items[item], discount)
    } else {
      total += this.prices[item] * this.items[item]
    }
    return total
  }

  private calculateDiscount(item: any, itemQuantity: number, discount: any) {
    let total = 0
    let discountQuantity = this.items[item] / discount.quantity
    total += discountQuantity * discount.discountPrice
    let remainder = this.items[item] % discount.quantity

    total += remainder * this.prices[item]
    return total
  }

  public addDiscount(item: any, quantity: number, discountPrice: number): void {
    this.discounts[item] = { quantity, discountPrice }
  }
}
