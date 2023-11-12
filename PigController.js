System.register(["./pigs/GreyPig", "./pigs/ChestnutPig", "./pigs/WhitePig", "./pigs/BlackPig", "./Enums"], function (exports_1, context_1) {
    "use strict";
    var GreyPig_1, ChestnutPig_1, WhitePig_1, BlackPig_1, Enums_1, PigController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (GreyPig_1_1) {
                GreyPig_1 = GreyPig_1_1;
            },
            function (ChestnutPig_1_1) {
                ChestnutPig_1 = ChestnutPig_1_1;
            },
            function (WhitePig_1_1) {
                WhitePig_1 = WhitePig_1_1;
            },
            function (BlackPig_1_1) {
                BlackPig_1 = BlackPig_1_1;
            },
            function (Enums_1_1) {
                Enums_1 = Enums_1_1;
            }
        ],
        execute: function () {
            PigController = class PigController {
                constructor() {
                    this.greys = [];
                    this.chestnuts = [];
                    this.whites = [];
                    this.blacks = [];
                    this.load();
                }
                getAll() {
                    return [...this.greys, ...this.chestnuts, ...this.whites, ...this.blacks];
                }
                add(category, name, height, weight, personality, breedIndex, ability) {
                    var breed;
                    switch (category) {
                        case 0: {
                            ability = Number(ability);
                            breed = (Enums_1.GreyBreeds[breedIndex]);
                            this.insertGrey(new GreyPig_1.GreyPig(ability, breed, name, height, weight, personality));
                            break;
                        }
                        case 1: {
                            ability = ability.toString();
                            breed = Enums_1.ChestnutBreeds[breedIndex];
                            this.insertChestnut(new ChestnutPig_1.ChestnutPig(ability, breed, name, height, weight, personality));
                            break;
                        }
                        case 2: {
                            ability = Number(ability);
                            breed = Enums_1.WhiteBreeds[breedIndex];
                            this.insertWhite(new WhitePig_1.WhitePig(ability, breed, name, height, weight, personality));
                            break;
                        }
                        case 3: {
                            ability = Number(ability);
                            breed = Enums_1.BlackBreeds[breedIndex];
                            this.insertBlack(new BlackPig_1.BlackPig(ability, breed, name, height, weight, personality));
                            break;
                        }
                    }
                    this.save();
                }
                delete(index) {
                    switch (this.getAll()[index].category) {
                        case "Grey": {
                            for (var i = 0; i < this.greys.length; i++) {
                                if (this.greys[i] == this.getAll()[index]) {
                                    this.greys.splice(i, 1);
                                }
                            }
                            break;
                        }
                        case "Chestnut": {
                            for (var i = 0; i < this.chestnuts.length; i++) {
                                if (this.chestnuts[i] == this.getAll()[index]) {
                                    this.chestnuts.splice(i, 1);
                                }
                            }
                            break;
                        }
                        case "White": {
                            for (var i = 0; i < this.whites.length; i++) {
                                if (this.whites[i] == this.getAll()[index]) {
                                    this.whites.splice(i, 1);
                                }
                            }
                            break;
                        }
                        case "Black": {
                            for (var i = 0; i < this.blacks.length; i++) {
                                if (this.blacks[i] == this.getAll()[index]) {
                                    this.blacks.splice(i, 1);
                                }
                            }
                            break;
                        }
                    }
                    this.save();
                }
                insertGrey(obj) {
                    if (this.greys.length == 0) {
                        this.greys.push(obj);
                    }
                    else {
                        if (obj.name < this.greys[0].name) {
                            this.greys.splice(0, 0, obj);
                        }
                        else if (obj.name > this.greys[this.greys.length - 1].name) {
                            this.greys.push(obj);
                        }
                        else {
                            for (var i = 0; i < this.greys.length; i++) {
                                if (obj.name < this.greys[i].name) {
                                    this.greys.splice(i, 0, obj);
                                    break;
                                }
                            }
                        }
                    }
                }
                insertChestnut(obj) {
                    if (this.chestnuts.length == 0) {
                        this.chestnuts.push(obj);
                    }
                    else {
                        if (obj.name < this.chestnuts[0].name) {
                            this.chestnuts.splice(0, 0, obj);
                        }
                        else if (obj.name > this.chestnuts[this.chestnuts.length - 1].name) {
                            this.chestnuts.push(obj);
                        }
                        else {
                            for (var i = 0; i < this.chestnuts.length; i++) {
                                if (obj.name < this.chestnuts[i].name) {
                                    this.chestnuts.splice(i, 0, obj);
                                    break;
                                }
                            }
                        }
                    }
                }
                insertWhite(obj) {
                    if (this.whites.length == 0) {
                        this.whites.push(obj);
                    }
                    else {
                        if (obj.name < this.whites[0].name) {
                            this.whites.splice(0, 0, obj);
                        }
                        else if (obj.name > this.whites[this.whites.length - 1].name) {
                            this.whites.push(obj);
                        }
                        else {
                            for (var i = 0; i < this.whites.length; i++) {
                                if (obj.name < this.whites[i].name) {
                                    this.whites.splice(i, 0, obj);
                                    break;
                                }
                            }
                        }
                    }
                }
                insertBlack(obj) {
                    if (this.blacks.length == 0) {
                        this.blacks.push(obj);
                    }
                    else {
                        if (obj.name < this.blacks[0].name) {
                            this.blacks.splice(0, 0, obj);
                        }
                        else if (obj.name > this.blacks[this.blacks.length - 1].name) {
                            this.blacks.push(obj);
                        }
                        else {
                            for (var i = 0; i < this.blacks.length; i++) {
                                if (obj.name < this.blacks[i].name) {
                                    this.blacks.splice(i, 0, obj);
                                    break;
                                }
                            }
                        }
                    }
                }
                save() {
                    localStorage.setItem("greys", JSON.stringify(this.greys));
                    localStorage.setItem("chestnuts", JSON.stringify(this.chestnuts));
                    localStorage.setItem("whites", JSON.stringify(this.whites));
                    localStorage.setItem("blacks", JSON.stringify(this.blacks));
                }
                load() {
                    if (localStorage.getItem("greys") != null)
                        this.greys = JSON.parse(localStorage.getItem("greys") || "");
                    if (localStorage.getItem("chestnuts") != null)
                        this.chestnuts = JSON.parse(localStorage.getItem("chestnuts") || "");
                    if (localStorage.getItem("whites") != null)
                        this.whites = JSON.parse(localStorage.getItem("whites") || "");
                    if (localStorage.getItem("blacks") != null)
                        this.blacks = JSON.parse(localStorage.getItem("blacks") || "");
                }
            };
            exports_1("PigController", PigController);
        }
    };
});
