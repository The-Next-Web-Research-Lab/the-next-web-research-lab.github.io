class Participant {
  constructor (name) {
    this.name = name
    this.chatroom = null
  }
  send (message, to) {
    this.chatroom.send(message, this, to)
  }
  receive (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`)
  }
}

class Chatroom {
  constructor () {
    this.participants = new Set()
  }
  register (participant) {
    participant.chatroom = this
    this.participants.add(participant)
  }
  send (message, from, to) {
    if (to) {                      // single message
      to.receive(message, from)
    } else {                       // broadcast message
      this.participants.forEach((participant) => {
        if (participant !== from) {
          participant.receive(message, from)
        }
      })
    }
  }
}

const yoko = new Participant('Yoko')
const john = new Participant('John')
const paul = new Participant('Paul')
const ringo = new Participant('Ringo')

const chatroom = new Chatroom()

chatroom.register(yoko)
chatroom.register(john)
chatroom.register(paul)
chatroom.register(ringo)

yoko.send('All you need is love.')
yoko.send('I love you John.')
john.send('Hey, no need to broadcast', yoko)
paul.send('Ha, I heard that!')
ringo.send('Paul, what do you think?', paul)
