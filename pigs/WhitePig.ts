import {Pig} from '../Pig';
import {WhiteBreeds} from "../Enums";

export class WhitePig extends Pig {
    running: number;
    breed: WhiteBreeds;

    constructor(running: number, breed: WhiteBreeds, name: string, height: number, weight: number, personality: string) {
        super(name, height, weight, personality);
        this.running = running;
        this.breed = breed;
    }
}