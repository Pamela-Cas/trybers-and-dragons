import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instances += 1; 
  }
}

export default Mage;