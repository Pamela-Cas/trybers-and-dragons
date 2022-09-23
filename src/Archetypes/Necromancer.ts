import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  static _instance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instance += 1; 
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instance;
  }
}

export default Necromancer;