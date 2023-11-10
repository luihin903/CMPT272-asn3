System.register(["../Pig"], function (exports_1, context_1) {
    "use strict";
    var Pig_1, BlackPig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Pig_1_1) {
                Pig_1 = Pig_1_1;
            }
        ],
        execute: function () {
            BlackPig = class BlackPig extends Pig_1.Pig {
                constructor(strength, breed, name, height, weight, personality) {
                    super(name, height, weight, personality);
                    this.category = "Black";
                    this.strength = strength;
                    this.breed = breed;
                }
            };
            exports_1("BlackPig", BlackPig);
        }
    };
});
