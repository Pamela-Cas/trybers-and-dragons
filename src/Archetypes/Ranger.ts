import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  static _instance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._instance += 1; 
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }

  static createdArchetypeInstances(): number {
    return Ranger._instance;
  }
}

export default Ranger;