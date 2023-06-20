class AbstractDataStore {
  process () {
    this.connect()
    this.select()
    this.disconnect()
  }
}

class MySQL extends AbstractDataStore {
  connect () {
    console.log('MySQL: connect step')
  }
  select () {
    console.log('MySQL: select step')
  }
  disconnect () {
    console.log('MySQL: disconnect step')
  }
  process () {
    super.process()
  }
}

const mySql = new MySQL()

mySql.process()
