import { Animal } from "./Interfaces";

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
}