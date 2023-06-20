class CustomerPrototype {
  constructor (proto) {
    this.proto = proto
  }
  clone () {
    const {first, last, status} = this.proto
    return new Customer(first, last, status)
  }
}

class Customer {
  constructor (first, last, status) {
    Object.assign(this, {first, last, status})
  }
  say () {
    const {first, last, status} = this
    console.log(`name: ${first} ${last}, status: ${status}`)
  }
}

const customer = new Customer('n/a', 'n/a', 'pending')
const prototype = new CustomerPrototype(customer)

const clonedCustomer = prototype.clone()
clonedCustomer.first = 'Peter'
clonedCustomer.last = 'Cho'
clonedCustomer.status = 'closed'

customer.say()
clonedCustomer.say()
