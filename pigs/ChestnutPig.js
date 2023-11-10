System.register(["../Pig"], function (exports_1, context_1) {
    "use strict";
    var Pig_1, ChestnutPig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Pig_1_1) {
                Pig_1 = Pig_1_1;
            }
        ],
        execute: function () {
            ChestnutPig = class ChestnutPig extends Pig_1.Pig {
                constructor(language, breed, name, height, weight, personality) {
                    super(name, height, weight, personality);
                    this.category = "Chestnut";
                    this.language = language;
                    this.breed = breed;
                }
            };
            exports_1("ChestnutPig", ChestnutPig);
        }
    };
});
