import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter{
  // lifePoints: number;
  // strength: number;
  defense: number;
  // attack(enemy:Fighter):void;
  levelUp():void;
  // receiveDamage(attackPoints:number):number;
  energy?: Energy;
  special?(enemy: Fighter): void;
}

// pesquisa interface e propriedades opcionais
// https://bognarjunior.wordpress.com/tag/typescript/
// https://www.youtube.com/watch?v=TYLvtyKNMao

// refatoração do código conf req 8; 
// interface SimpleFighter possiu atributos: 
// lifePoints, strength, attack e receveiDamage;
// portanto foi extendida em Fighter e retirado do Fighter