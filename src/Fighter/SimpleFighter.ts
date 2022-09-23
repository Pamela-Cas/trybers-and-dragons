interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy:SimpleFighter):void;
  receiveDamage(receiveDamage:number):number;
}

export default SimpleFighter;