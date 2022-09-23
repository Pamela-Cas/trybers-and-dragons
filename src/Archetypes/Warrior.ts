import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  static _instance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._instance += 1; 
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  static createdArchetypeInstances(): number {
    return Warrior._instance;
  }
}

export default Warrior;