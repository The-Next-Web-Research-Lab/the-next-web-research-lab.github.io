class FlyWeight {
  constructor (make, model, processor) {
    this.make = make;
    this.model = model;
    this.processor = processor
  }
}

const FlyWeightFactory = {
  flyweights: new Map(),
  get (make, model, processor) {
    const objId = `${make} ${model} ${processor}`;
    if (!this.flyweights.has(objId)) {
      this.flyweights.set(objId, new FlyWeight(make, model, processor));
    }
    return this.flyweights.get(objId)
  },
  getCount () {
    return this.flyweights.size
  }
};

class ComputerCollection {
  constructor () {
    this.computers = new Map();
  }
  add (make, model, processor, memory, tag) {
    this.computers.set(tag, new Computer(make, model, processor, memory, tag));
  }
  get (tag) {
    return this.computers.get(tag)
  }
  getCount () {
    return this.computers.size
  }
}

class Computer {
  constructor (make, model, processor, memory, tag) {
    this.flyweight = FlyWeightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag
  }
  getMake () {
    return this.flyweight.make
  }
  // ...
}

const computers = new ComputerCollection();

computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'Y755P');
computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'X997T');
computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'U8U80');
computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'NT777');
computers.add('Dell', 'Studio XPS', 'Intel', '2G', '0J88A');
computers.add('HP', 'Envy', 'Intel', '4G', 'CNU883701');
computers.add('HP', 'Envy', 'Intel', '2G', 'TXU003283');

console.log(`Computers: ${computers.getCount()}`);
console.log(`Flyweights: ${FlyWeightFactory.getCount()}`);
