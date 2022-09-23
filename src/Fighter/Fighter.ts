import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  attack(enemy:Fighter):void;
  levelUp():void;
  receiveDamage(attackPoints:number):number;
  energy?: Energy;
  special?(enemy: Fighter): void;
}

export default Fighter;

// pesquisa interface e propriedades opcionais
// https://bognarjunior.wordpress.com/tag/typescript/
// https://www.youtube.com/watch?v=TYLvtyKNMao