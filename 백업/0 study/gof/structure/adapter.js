// old interface
class Shipping {
  request (zipStart, zipEnd, weight) {
    // ...
    return '$49.75'
  }
}

// new interface
class AdvancedShipping {
  login (credentials) { /* ... */ }
  setStart (start) { /* ... */ }
  setDestination (destination) { /* ... */ }
  calculate (weight) { return '$39.50' }
}

// adapter interface
class ShippingAdapter {
  constructor (credentials) {
    this.shipping = new AdvancedShipping()
    this.shipping.login(credentials)
  }
  request (zipStart, zipEnd, weight) {
    this.shipping.setStart(zipStart)
    this.shipping.setDestination(zipEnd)
    return this.shipping.calculate(weight)
  }
}

const shipping = new Shipping()
const credentials = {token: '30a8-6ee1'}
const adapter = new ShippingAdapter(credentials)

// original shipping object and interface

const oldCost = shipping.request('78701', '10010', '2 lbs')
console.log(`Old cost: ${oldCost}`)

// new shipping object with adapted interface

const newCost = adapter.request('78701', '10010', '2 lbs')
console.log(`New cost: ${newCost}`)
