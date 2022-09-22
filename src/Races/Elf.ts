import Race from './Race';

class Elf extends Race {
    private _maxLifePoints: number;
    private static _instances = 0; 

    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        this._maxLifePoints = 99;
        Elf._instances += 1;
    }


}

export default Elf;