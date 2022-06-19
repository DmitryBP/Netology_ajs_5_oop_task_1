/* eslint-disable import/prefer-default-export */
/* eslint-disable import/named */
import { Character } from './Character.js';
import { Bowman } from './1.Bowman.js';
import { Swordsman } from './2.Swordsman.js';
import { Magician } from './3.Magician.js';
import { Undead } from './4.Undead.js';
import { Zombie } from './5.Zombie.js';
import { Daemon } from './6.Daemon.js';

const character = new Character('Dima', 'Bowman');
export const bowman = new Bowman('Vasia', 'Bowman');
const swordsman = new Swordsman('Vasia1', 'Swordsman');
const magician = new Magician('Vasia2', 'Magician');
const undead = new Undead('Vasia3', 'Undead');
const zombie = new Zombie('Vasia3', 'Zombie');
const daemon = new Daemon('Vasia3', 'Daemon');

console.log(character);
console.log(bowman.attack);
console.log(swordsman);
console.log(magician);
console.log(undead);
console.log(zombie);
console.log(daemon);
