class User {
  constructor(name){
    this.name = name
    this.inbox = []
  }

  sendMessages(receiver, content) {
    let msg = new Message(receiver, content)
    receiver.inbox.push(msg)
    return `Your message to ${receiver.name} message has been sent`
  }

// needs to show message read
  readMessage(i) {
    return this.inbox[i].content
  }

  timeSeen(seen) {
    return this.inbox(seen).content
  }

}

class Message {
  constructor(receiver, content) {
    this.receiver = receiver
    this.content = content
  }
}

let user1 = new User('Jim')
let user2 = new User('Greg')
