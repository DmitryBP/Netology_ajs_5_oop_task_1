export default class Character {
  constructor(name, type) {
    const typeList = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Undead",
      "Zombie",
      "Daemon",
    ];

    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error("Имя должно быть от 2 до 10 символов");
    }

    if (typeList.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Недопустимый тип персонажа");
    }

    this.health = 100;
    this.level = 1;
  }
}

