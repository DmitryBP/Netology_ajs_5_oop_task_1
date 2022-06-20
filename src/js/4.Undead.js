/* eslint-disable import/prefer-default-export */
import { Character } from './Character.js';

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defense = 25;
  }
}
