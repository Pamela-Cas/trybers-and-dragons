import Archetype from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter/Fighter';
import Race from './Races';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: MaxLifePoints;
  private _lifePoints: LifePoints;
  private _strength: Strength;
  private _defense: Defense;
  private _dexterity: Dexterity;
  private _energy: Energy;

  constructor(name:string) {
  };
}

export default Character;