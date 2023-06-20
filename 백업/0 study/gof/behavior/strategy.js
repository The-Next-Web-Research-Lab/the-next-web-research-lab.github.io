class Shipping {
  constructor () {
    this.company = ''
  }
  setStrategy (company) {
    this.company = company
  }
  calculate (baggage) {
    return this.company.calculate(baggage)
  }
}

class UPS {
  constructor () {}
  calculate (baggage) {
    // calculations...
    return '$45.95'
  }
}

class USPS {
  constructor () {}
  calculate (baggage) {
    // calculations...
    return '$39.40'
  }
}

class Fedex {
  constructor () {}
  calculate (baggage) {
    // calculations...
    return '$43.20'
  }
}
const baggage = { from: '76712', to: '10012', weigth: 'lkg' }

// the 3 strategies
const ups = new UPS()
const usps = new USPS()
const fedex = new Fedex()

const shipping = new Shipping()

shipping.setStrategy(ups)
console.log(`UPS Strategy: ${shipping.calculate(baggage)}`)

shipping.setStrategy(usps)
console.log(`USPS Strategy: ${shipping.calculate(baggage)}`)

shipping.setStrategy(fedex)
console.log(`Fedex Strategy: ${shipping.calculate(baggage)}`)
