import { Checkout } from '@/checkout'

describe('checkout test suite', () => {
  let checkout: any = null

  beforeEach(() => {
    checkout = new Checkout()
    checkout.addItemPrice('item1', 10)
    checkout.addItemPrice('item2', 20)
  })

  it('can calculate current total', () => {
    checkout.addItem('item1')
    expect(checkout.calculateTotal()).toBe(10)
  })

  it('can add multiple itens and get the correct total', () => {
    checkout.addItem('item1')
    checkout.addItem('item2')
    expect(checkout.calculateTotal()).toBe(30)
  })

  it('can apply discount', () => {
    checkout.addDiscount('item1', 3, 2)
    checkout.addItem('item1')
    checkout.addItem('item1')
    checkout.addItem('item1')
    expect(checkout.calculateTotal()).toBe(2)
  })
})
