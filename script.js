System.register(["./PigController", "./Enums"], function (exports_1, context_1) {
    "use strict";
    var _a, _b, _c, PigController_1, Enums_1, breeds, ability, pc;
    var __moduleName = context_1 && context_1.id;
    function display() {
        console.log(pc.getAll());
        var rows = [];
        rows.push("<tr style = 'font-weight: bold;'>" + "<td>Name</td>" + "<td>Category</td>" + "<td></td>" + "<td></td>" + "</tr>");
        for (var i = 0; i < pc.getAll().length; i++) {
            var pig = pc.getAll()[i];
            rows.push("<tr>" + "<td>" + pig.name + "</td>" + "<td>" + pig.category + "</td>" + "</tr>");
        }
        document.getElementById("Display").innerHTML = rows.join("");
    }
    return {
        setters: [
            function (PigController_1_1) {
                PigController_1 = PigController_1_1;
            },
            function (Enums_1_1) {
                Enums_1 = Enums_1_1;
            }
        ],
        execute: function () {
            breeds = document.getElementsByClassName("Breeds");
            ability = document.getElementById("Ability");
            pc = new PigController_1.PigController();
            display();
            // add pig button
            (_a = document.getElementById("Add")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
                document.getElementById("New").style.visibility = "visible";
            });
            // change inputs based on category
            (_b = document.getElementById("Category")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", function (event) {
                ability = document.getElementById("Ability");
                console.log(ability);
                console.log(event.target.value);
                switch (event.target.value) {
                    case "GreyPig": {
                        for (var i = 0; i < 5; i++) {
                            breeds[i].value = Enums_1.GreyBreeds[i];
                            breeds[i].innerHTML = Enums_1.GreyBreeds[i];
                        }
                        ability.firstElementChild.innerHTML = "Swimming";
                        ability.getElementsByTagName("input")[0].type = "number";
                        break;
                    }
                    case "ChestnutPig": {
                        for (var i = 0; i < 5; i++) {
                            breeds[i].value = Enums_1.ChestnutBreeds[i];
                            breeds[i].innerHTML = Enums_1.ChestnutBreeds[i];
                        }
                        ability.firstElementChild.innerHTML = "Language";
                        ability.getElementsByTagName("input")[0].type = "text";
                        break;
                    }
                    case "WhitePig": {
                        for (var i = 0; i < 5; i++) {
                            breeds[i].value = Enums_1.WhiteBreeds[i];
                            breeds[i].innerHTML = Enums_1.WhiteBreeds[i];
                        }
                        ability.firstElementChild.innerHTML = "Running";
                        ability.getElementsByTagName("input")[0].type = "number";
                        break;
                    }
                    case "BlackPig": {
                        for (var i = 0; i < 5; i++) {
                            breeds[i].value = Enums_1.BlackBreeds[i];
                            breeds[i].innerHTML = Enums_1.BlackBreeds[i];
                        }
                        ability.firstElementChild.innerHTML = "Strength";
                        ability.getElementsByTagName("input")[0].type = "number";
                        break;
                    }
                }
            });
            // create new pig
            (_c = document.getElementById("submit")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function (event) {
                console.log("pressed");
                pc.add((document.getElementById("Category")).selectedIndex, (document.getElementById("Name")).value, Number((document.getElementById("Height")).value), Number((document.getElementById("Weight")).value), (document.getElementById("Personality")).value, (document.getElementById("Breed")).selectedIndex, document.getElementById("Ability").getElementsByTagName("input")[0].value);
            });
        }
    };
});
