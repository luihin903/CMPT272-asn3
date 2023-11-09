System.register([], function (exports_1, context_1) {
    "use strict";
    var PigController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PigController = class PigController {
                constructor() {
                    this.greys = [];
                    this.chestnuts = [];
                    this.whites = [];
                    this.blacks = [];
                }
            };
            exports_1("PigController", PigController);
        }
    };
});
