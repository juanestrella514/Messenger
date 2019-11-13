const Conversations = []

class Conversation {
  constructor() {
    this.id = Conversations.length + 1
    this.messages = []
    this.users = []
  }
  add(user) {
    this.users.push(user)
  }
}

class User {
  constructor(name){
    this.name = name
    this.inbox = []
    this.blocedkUser = []
  }

  sendMessages(convo, content) {
    // if (convo.blocedkUsers.includes(this)) return 'Your message could not be sent'
    let msg = new Message(content)
    convo.inbox.push(msg)
  }

// needs to show message read and time seen
  readMessage(i) {
    this.inbox[i].seen = true
    this.inbox[i].seenAt = new Date()
    return this.inbox[i].content
  }

  viewUnread() {
    let unread = []
    for (let msg of this.inbox) {
      if (msg.seen === false) {
        unread.push(msg)
        console.log(msg.content)
      }
    }
    return unread
  }
  viewRead() {
    let read = []
    for (let msg of this.inbox) {
      if (msg.seen === true) {
        read.push(msg)
        console.log(msg.content)
      }
    }
    return read
}

block(user) {
  this.blockedUsers.push(user)

  }
}



class Message {
  constructor(convo, content) {
    this.convo = convo
    this.content = content
    this.seen = false
    this.seenAt = null
  }
}

let user1 = new User('Jim')
let user2 = new User('Greg')
