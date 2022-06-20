/* eslint-disable import/prefer-default-export */
import { Character } from './Character.js';

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defense = 10;
  }
}
