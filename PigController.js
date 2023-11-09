System.register(["./pigs/GreyPig", "./Enums"], function (exports_1, context_1) {
    "use strict";
    var GreyPig_1, Enums_1, PigController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (GreyPig_1_1) {
                GreyPig_1 = GreyPig_1_1;
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
                }
                add(category, name, height, weight, personality, breedIndex, ability) {
                    console.log("adding");
                    switch (category) {
                        case 0: {
                            ability = Number(ability);
                            var breedstr = Enums_1.GreyBreeds[breedIndex];
                            console.log(breedstr);
                            console.log(breedstr == "NotGrey");
                            var breed = Enums_1.GreyBreeds["NotGrey"];
                            this.greys.push(new GreyPig_1.GreyPig(ability, breed, name, height, weight, personality));
                            break;
                        }
                    }
                    console.log(this.greys);
                }
            };
            exports_1("PigController", PigController);
        }
    };
});
