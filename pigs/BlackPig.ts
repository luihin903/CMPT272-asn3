import {Pig} from '../Pig';
import {BlackBreeds} from "../Enums";

export class BlackPig extends Pig {
    strength: number;
    breed: BlackBreeds;

    constructor(strength: number, breed: BlackBreeds, name: string, height: number, weight: number, personality: string) {
        super(name, height, weight, personality);
        this.strength = strength;
        this.breed = breed;
    }
}