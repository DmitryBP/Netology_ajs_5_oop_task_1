/* eslint-disable import/prefer-default-export */
import { Character } from './Character.js';

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defense = 25;
  }
}
