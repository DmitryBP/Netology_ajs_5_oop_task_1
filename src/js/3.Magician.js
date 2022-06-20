/* eslint-disable import/prefer-default-export */
import { Character } from './Character.js';

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defense = 40;
  }
}
