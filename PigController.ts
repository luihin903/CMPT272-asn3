import { GreyPig } from "./pigs/GreyPig";
import { ChestnutPig } from "./pigs/ChestnutPig";
import { WhitePig } from "./pigs/WhitePig";
import { BlackPig } from "./pigs/BlackPig";
import { BlackBreeds, ChestnutBreeds, GreyBreeds, WhiteBreeds } from "./Enums";

export class PigController {
    greys: GreyPig[];
    chestnuts: ChestnutPig[];
    whites: WhitePig[];
    blacks: BlackPig[];

    constructor() {
        this.greys = [];
        this.chestnuts = [];
        this.whites = [];
        this.blacks = [];
    }

    add(category: number, name: string, height: number, weight: number, personality: string, breedIndex: number, ability: string|number) {
        console.log("adding");
        switch (category) {
            case 0: {
                ability = Number(ability);
                var breedstr: string = GreyBreeds[breedIndex];
                console.log(breedstr);
                console.log(breedstr == "NotGrey");
                var breed: GreyBreeds = GreyBreeds["NotGrey"];
                this.greys.push(new GreyPig(ability, breed, name, height, weight, personality));
                break;
            }
        }
        console.log(this.greys);
    }
}