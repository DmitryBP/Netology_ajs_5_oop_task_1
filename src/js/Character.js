/* eslint-disable import/prefer-default-export */
export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Undead',
      'Zombie',
      'Daemon',
    ];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Не подходящий формат имени');
    }

    if (!types.includes(type)) {
      throw new Error('Не подходящий тип игрока');
    }
  }
}
