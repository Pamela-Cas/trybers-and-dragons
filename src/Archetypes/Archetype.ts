abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string, special: number, cost: number) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }
}

export default Archetype; 