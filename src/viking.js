// Soldier
class Soldier {

  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {

  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
    const saxonHealth = randomSaxon.receiveDamage(randomViking.strength);
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);

    return saxonHealth;
  }

  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const vikingHealth = randomViking.receiveDamage(randomSaxon.strength);
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);

    return vikingHealth
  }

  showStatus() {
    if (this.vikingArmy.length === 0 && this.saxonArmy.length >= 1) {

      return "Saxons have fought for their lives and survived another day...";

    } else if (this.saxonArmy.length === 0 && this.vikingArmy.length >= 1){

      return "Vikings have won the war of the century!";

    } else {

      return "Vikings and Saxons are still in the thick of battle.";

    }


  }
}
