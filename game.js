// class Building {
//   constructor(address) {
//     this.address = address
//     this.tenants = []
//   }
//
//   addTenant(name) {
//     this.tenants.push(name)
//   }
// }
//

// better way to write above
// let building = new Building('123 Main st')
//
//
// let tenants = []
// let address = '123 street st'
//
// let t1 = 'bleep'
// let t2 = 'bloop'
//
//
// let building {
//   tenants: [t1, t2],
//   adress: address
// }


// game

class Unit {
  constructor(name) {
    this.name = name
    this.hp = 100
    this.atk = 10
    this.mag = 5
    this.job = 'Squire'
    this.alive = true
  }
  attack(target) {
    if (!target.alive) return `${target.name} has fallen`
    target.hp -= this.atk
    if (target.hp <= 0) {
      target.alive = false
      return  `${target.name} has fallen`
    }
    return `${this.name} ooo u just got hit`
  }
}

class Squire extends Unit {
  constructor(name) {
    super(name)

  }

}

class Knight extends Unit{
  constructor(name) {
    super(name)
    this.job = 'knight'
  }
}

class Mage extends Unit {
  constructor(name) {
    super(name)
    this.hp -= 25
    this.mag += 25
    this.job = 'Mage'
  }
  castSpell(target) {
    if (!target.alive) return `${target.name} has fallen`
    target.hp -= this.mag
    if (target.hp <= 0) {
      target.alive = false
      return  `${target.name} has fallen`
    }
    return `${this.name} casted fireball
  }
}

let knight = new Knight('bleeep')
let squire = new Squire('bloop')
let mage = new Mage('Bob')
