System.register(["../Pig"], function (exports_1, context_1) {
    "use strict";
    var Pig_1, GreyPig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Pig_1_1) {
                Pig_1 = Pig_1_1;
            }
        ],
        execute: function () {
            GreyPig = class GreyPig extends Pig_1.Pig {
                constructor(swimming, breed, name, height, weight, personality) {
                    super(name, height, weight, personality);
                    this.category = "Grey";
                    this.swimming = swimming;
                    this.breed = breed;
                }
                equals(other) {
                    if (this.category != other.category) {
                        return false;
                    }
                    if (this.name != other.name) {
                        return false;
                    }
                    if (this.height != other.height) {
                        return false;
                    }
                    if (this.weight != other.weight) {
                        return false;
                    }
                    if (this.personality != other.personality) {
                        return false;
                    }
                    // they must be the same category if this function hasn't return false in the first if statement
                    switch (this.category) {
                        case "Grey": {
                            if (this.breed != other.breed) {
                                return false;
                            }
                            if (this.swimming != other.swimming) {
                                return false;
                            }
                            break;
                        }
                        case "Chestnut": {
                            if (this.breed != other.breed) {
                                return false;
                            }
                            if (this.language != other.language) {
                                return false;
                            }
                            break;
                        }
                        case "White": {
                            if (this.breed != other.breed) {
                                return false;
                            }
                            if (this.running != other.running) {
                                return false;
                            }
                            break;
                        }
                        case "Black": {
                            if (this.breed != other.breed) {
                                return false;
                            }
                            if (this.strength != other.strength) {
                                return false;
                            }
                            break;
                        }
                    }
                    return true;
                }
            };
            exports_1("GreyPig", GreyPig);
        }
    };
});
