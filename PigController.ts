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

        this.load();
    }

    add(category: number, name: string, height: number, weight: number, personality: string, breedIndex: number, ability: string|number) {
        var breed: GreyBreeds|ChestnutBreeds|WhiteBreeds|BlackBreeds;
        switch (category) {
            case 0: {
                ability = Number(ability);
                breed = <GreyBreeds><unknown>(GreyBreeds[breedIndex]);
                this.insertGrey(new GreyPig(ability, breed, name, height, weight, personality));
                break;
            }
            case 1: {
                ability = ability.toString();
                breed = <ChestnutBreeds><unknown>ChestnutBreeds[breedIndex];
                this.insertChestnut(new ChestnutPig(ability, breed, name, height, weight, personality));
                break;
            }
            case 2: {
                ability = Number(ability);
                breed = <WhiteBreeds><unknown>WhiteBreeds[breedIndex];
                this.insertWhite(new WhitePig(ability, breed, name, height, weight, personality));
                break;
            }
            case 3: {
                ability = Number(ability);
                breed = <BlackBreeds><unknown>BlackBreeds[breedIndex];
                this.insertBlack(new BlackPig(ability, breed, name, height, weight, personality));
                break;
            }
        }

        this.save();
    }

    insertGrey(obj: GreyPig) {
        if (this.greys.length == 0) {
            this.greys.push(obj);
        }
        else {
            if (obj.name < this.greys[0].name) {
                this.greys.splice(0, 0, obj);
            }
            else if (obj.name > this.greys[this.greys.length-1].name) {
                this.greys.push(obj);
            }
            else {
                for (var i: number = 0; i < this.greys.length; i ++) {
                    if (obj.name < this.greys[i].name) {
                        this.greys.splice(i, 0, obj);
                        break;
                    }
                }
            }
        }
    }

    insertChestnut(obj: ChestnutPig) {
        if (this.chestnuts.length == 0) {
            this.chestnuts.push(obj);
        }
        else {
            if (obj.name < this.chestnuts[0].name) {
                this.chestnuts.splice(0, 0, obj);
            }
            else if (obj.name > this.chestnuts[this.chestnuts.length-1].name) {
                this.chestnuts.push(obj);
            }
            else {
                for (var i: number = 0; i < this.chestnuts.length; i ++) {
                    if (obj.name < this.chestnuts[i].name) {
                        this.chestnuts.splice(i, 0, obj);
                        break;
                    }
                }
            }
        }
    }

    insertWhite(obj: WhitePig) {
        if (this.whites.length == 0) {
            this.whites.push(obj);
        }
        else {
            if (obj.name < this.whites[0].name) {
                this.whites.splice(0, 0, obj);
            }
            else if (obj.name > this.whites[this.whites.length-1].name) {
                this.whites.push(obj);
            }
            else {
                for (var i: number = 0; i < this.whites.length; i ++) {
                    if (obj.name < this.whites[i].name) {
                        this.whites.splice(i, 0, obj);
                        break;
                    }
                }
            }
        }
    }

    insertBlack(obj: BlackPig) {
        if (this.blacks.length == 0) {
            this.blacks.push(obj);
        }
        else {
            if (obj.name < this.blacks[0].name) {
                this.blacks.splice(0, 0, obj);
            }
            else if (obj.name > this.blacks[this.blacks.length-1].name) {
                this.blacks.push(obj);
            }
            else {
                for (var i: number = 0; i < this.blacks.length; i ++) {
                    if (obj.name < this.blacks[i].name) {
                        this.blacks.splice(i, 0, obj);
                        break;
                    }
                }
            }
        }
    }

    getAll() {
        return [...this.greys, ...this.chestnuts, ...this.whites, ...this.blacks];
    }

    save() {
        localStorage.setItem("greys", JSON.stringify(this.greys));
        localStorage.setItem("chestnuts", JSON.stringify(this.chestnuts));
        localStorage.setItem("whites", JSON.stringify(this.whites));
        localStorage.setItem("blacks", JSON.stringify(this.blacks));
    }

    load() {        
        if (localStorage.getItem("greys") != null) this.greys = JSON.parse(localStorage.getItem("greys") || "") as GreyPig[];
        if (localStorage.getItem("chestnuts") != null) this.chestnuts = JSON.parse(localStorage.getItem("chestnuts") || "") as ChestnutPig[];
        if (localStorage.getItem("whites") != null) this.whites = JSON.parse(localStorage.getItem("whites") || "") as WhitePig[];
        if (localStorage.getItem("blacks") != null) this.blacks = JSON.parse(localStorage.getItem("blacks") || "") as BlackPig[];
    }
}