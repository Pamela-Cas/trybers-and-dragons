import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Ranger._instances += 1; 
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }
}

export default Ranger;