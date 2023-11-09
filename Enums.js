System.register([], function (exports_1, context_1) {
    "use strict";
    var GreyBreeds, ChestnutBreeds, WhiteBreeds, BlackBreeds;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (GreyBreeds) {
                GreyBreeds[GreyBreeds["NotGrey"] = 0] = "NotGrey";
                GreyBreeds[GreyBreeds["LessGrey"] = 1] = "LessGrey";
                GreyBreeds[GreyBreeds["NormalGrey"] = 2] = "NormalGrey";
                GreyBreeds[GreyBreeds["MoreGrey"] = 3] = "MoreGrey";
                GreyBreeds[GreyBreeds["SuperGrey"] = 4] = "SuperGrey";
            })(GreyBreeds || (exports_1("GreyBreeds", GreyBreeds = {})));
            (function (ChestnutBreeds) {
                ChestnutBreeds[ChestnutBreeds["NotChestnut"] = 0] = "NotChestnut";
                ChestnutBreeds[ChestnutBreeds["LessChestnut"] = 1] = "LessChestnut";
                ChestnutBreeds[ChestnutBreeds["NormalChestnut"] = 2] = "NormalChestnut";
                ChestnutBreeds[ChestnutBreeds["MoreChestnut"] = 3] = "MoreChestnut";
                ChestnutBreeds[ChestnutBreeds["SuperChestnut"] = 4] = "SuperChestnut";
            })(ChestnutBreeds || (exports_1("ChestnutBreeds", ChestnutBreeds = {})));
            (function (WhiteBreeds) {
                WhiteBreeds[WhiteBreeds["NotWhite"] = 0] = "NotWhite";
                WhiteBreeds[WhiteBreeds["LessWhite"] = 1] = "LessWhite";
                WhiteBreeds[WhiteBreeds["NormalWhite"] = 2] = "NormalWhite";
                WhiteBreeds[WhiteBreeds["MoreWhite"] = 3] = "MoreWhite";
                WhiteBreeds[WhiteBreeds["SuperWhite"] = 4] = "SuperWhite";
            })(WhiteBreeds || (exports_1("WhiteBreeds", WhiteBreeds = {})));
            (function (BlackBreeds) {
                BlackBreeds[BlackBreeds["NotBlack"] = 0] = "NotBlack";
                BlackBreeds[BlackBreeds["LessBlack"] = 1] = "LessBlack";
                BlackBreeds[BlackBreeds["NormalBlack"] = 2] = "NormalBlack";
                BlackBreeds[BlackBreeds["MoreBlack"] = 3] = "MoreBlack";
                BlackBreeds[BlackBreeds["SuperBlack"] = 4] = "SuperBlack";
            })(BlackBreeds || (exports_1("BlackBreeds", BlackBreeds = {})));
        }
    };
});
