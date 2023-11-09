import { Animal } from "./Interfaces";

export class Pig implements Animal {
    name: string;
    height: number;
    weight: number;
    personality: string;

    constructor(name: string, height: number, weight: number, personality: string) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
    }
}