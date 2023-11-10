import {Pig} from "../Pig";
import {ChestnutBreeds} from "../Enums";

export class ChestnutPig extends Pig {
    language: string;
    breed: ChestnutBreeds;
    category: string = "Chestnut";

    constructor(language: string, breed: ChestnutBreeds, name: string, height: number, weight: number, personality: string) {
        super(name, height, weight, personality);
        this.language = language;
        this.breed = breed;
    }
}