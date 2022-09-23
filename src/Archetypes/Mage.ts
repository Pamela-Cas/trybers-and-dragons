import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  static _instance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instance += 1; 
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  static createdArchetypeInstances(): number {
    return Mage._instance;
  }
}

export default Mage;