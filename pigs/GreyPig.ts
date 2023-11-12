import {Pig} from '../Pig';
import {GreyBreeds} from "../Enums";
import { ChestnutPig } from './ChestnutPig';
import { WhitePig } from './WhitePig';
import { BlackPig } from './BlackPig';

export class GreyPig extends Pig {
    swimming: number;
    breed: GreyBreeds;
    category: string = "Grey";

    constructor(swimming: number, breed: GreyBreeds, name: string, height: number, weight: number, personality: string) {
        super(name, height, weight, personality);
        this.swimming = swimming;
        this.breed = breed;
    }

    equals(other: Pig): boolean {
        if (this.category != other.category) {
            return false;
        }
        if (this.name != other.name) {
            return false;
        }
        if (this.height != other.height) {
            return false;
        }
        if (this.weight != other.weight) {
            return false;
        }
        if (this.personality != other.personality) {
            return false;
        }

        // they must be the same category if this function hasn't return false in the first if statement
        switch (this.category) {
            case "Grey": {
                if ((<GreyPig><unknown>this).breed != (<GreyPig><unknown>other).breed) {
                    return false;
                }
                if ((<GreyPig><unknown>this).swimming != (<GreyPig><unknown>other).swimming) {
                    return false;
                }
                break;
            }
            case "Chestnut": {
                if ((<ChestnutPig><unknown>this).breed != (<ChestnutPig><unknown>other).breed) {
                    return false;
                }
                if ((<ChestnutPig><unknown>this).language != (<ChestnutPig><unknown>other).language) {
                    return false;
                }
                break;
            }
            case "White": {
                if ((<WhitePig><unknown>this).breed != (<WhitePig><unknown>other).breed) {
                    return false;
                }
                if ((<WhitePig><unknown>this).running != (<WhitePig><unknown>other).running) {
                    return false;
                }
                break;
            }
            case "Black": {
                if ((<BlackPig><unknown>this).breed != (<BlackPig><unknown>other).breed) {
                    return false;
                }
                if ((<BlackPig><unknown>this).strength != (<BlackPig><unknown>other).strength) {
                    return false;
                }
                break;
            }
        }

        return true;
    }
}