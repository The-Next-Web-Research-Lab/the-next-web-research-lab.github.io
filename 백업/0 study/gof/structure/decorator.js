class User {
  constructor (name) {
    this.name = name
  }
  say () {
    console.log(`User: ${this.name}`)
  }
}

class DecoratedUser {
  constructor (user, street, city) {
    Object.assign(this, {user, street, city})
  }
  say () {
    const {user: {name}, street, city} = this;
    console.log(`Decorated User: ${name}, ${street}, ${city}`)
  }
}

const user = new User('Kelly');
user.say();

const decorated = new DecoratedUser(user, 'Broadway', 'New York');
decorated.say();
