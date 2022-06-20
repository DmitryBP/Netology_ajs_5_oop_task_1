/* eslint-disable import/prefer-default-export */
import { Character } from './Character.js';

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defense = 40;
  }
}
