class Red {
  constructor () {}
  go(context) {
    console.log('Red --> for 1 minute')
    context.setState(new Green())
  }
}

class Green {
  constructor () {}
  go(context) {
    console.log('Green --> for 1 minute')
    context.setState(new Yellow())
  }
}

class Yellow {
  constructor () {}
  go(context) {
    console.log('Yellow --> for 10 seconds')
    context.setState(new Red())
  }
}

class TrafficLight {
  constructor () {
    this.currentState = new Red()
  }
  setState (state) {
    this.currentState = state
  }
  go () {
    this.currentState.go(this)
  }
}
var trafficLight = new TrafficLight()
trafficLight.go() // Red
trafficLight.go() // Green
trafficLight.go() // Yellow
