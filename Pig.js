System.register([], function (exports_1, context_1) {
    "use strict";
    var Pig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Pig = class Pig {
                constructor(name, height, weight, personality) {
                    this.category = "Pig";
                    this.name = name;
                    this.height = height;
                    this.weight = weight;
                    this.personality = personality;
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
            exports_1("Pig", Pig);
        }
    };
});
