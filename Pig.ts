import { Animal } from "./Interfaces";
import { BlackPig } from "./pigs/BlackPig";
import { ChestnutPig } from "./pigs/ChestnutPig";
import { GreyPig } from "./pigs/GreyPig";
import { WhitePig } from "./pigs/WhitePig";

export abstract class Pig implements Animal {
    name: string;
    height: number;
    weight: number;
    personality: string;
    category: string = "Pig";

    constructor(name: string, height: number, weight: number, personality: string) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
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