import {Pig} from '../Pig';
import {GreyBreeds} from "../Enums";

export class GreyPig extends Pig {
    swimming: number;
    breed: GreyBreeds;
    category: string = "Grey";

    constructor(swimming: number, breed: GreyBreeds, name: string, height: number, weight: number, personality: string) {
        super(name, height, weight, personality);
        this.swimming = swimming;
        this.breed = breed;
    }
}