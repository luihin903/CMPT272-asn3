System.register(["../Pig"], function (exports_1, context_1) {
    "use strict";
    var Pig_1, WhitePig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Pig_1_1) {
                Pig_1 = Pig_1_1;
            }
        ],
        execute: function () {
            WhitePig = class WhitePig extends Pig_1.Pig {
                constructor(running, breed, name, height, weight, personality) {
                    super(name, height, weight, personality);
                    this.running = running;
                    this.breed = breed;
                }
            };
            exports_1("WhitePig", WhitePig);
        }
    };
});
