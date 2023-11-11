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
            rows.push("<tr>" +
                "<td>" + pig.name + "</td>" +
                "<td>" + pig.category + "</td>" +
                "<td>" + "<a class = 'more' href = '#' index = '" + i + "' category = '" + pig.category + "'>" + "More info" + "</a>" + "</td>" +
                "<td>" + "<a class = 'delete' href = '#' index = '" + i + "'>" + "Delete" + "</a" + "</td>" +
                "</tr>");
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
                document.getElementById("More").style.visibility = "hidden";
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
                        ability.getElementsByTagName("input")[0].step = "0.01";
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
                        ability.getElementsByTagName("input")[0].step = "0.01";
                        break;
                    }
                    case "BlackPig": {
                        for (var i = 0; i < 5; i++) {
                            breeds[i].value = Enums_1.BlackBreeds[i];
                            breeds[i].innerHTML = Enums_1.BlackBreeds[i];
                        }
                        ability.firstElementChild.innerHTML = "Strength";
                        ability.getElementsByTagName("input")[0].type = "number";
                        ability.getElementsByTagName("input")[0].step = "0.01";
                        break;
                    }
                }
            });
            // create new pig
            (_c = document.getElementById("submit")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function (event) {
                console.log("pressed");
                pc.add((document.getElementById("Category")).selectedIndex, (document.getElementById("Name")).value, Number((document.getElementById("Height")).value), Number((document.getElementById("Weight")).value), (document.getElementById("Personality")).value, (document.getElementById("Breed")).selectedIndex, document.getElementById("Ability").getElementsByTagName("input")[0].value);
            });
            // more info
            for (let a of document.querySelectorAll("a.more")) {
                a.addEventListener("click", function (event) {
                    event.preventDefault();
                    document.getElementById("New").style.visibility = "hidden";
                    document.getElementById("More").style.visibility = "visible";
                    var tr = document.getElementById("More").getElementsByTagName("tr");
                    let index = Number(a.getAttribute("index"));
                    let pig = pc.getAll()[index];
                    switch (a.getAttribute("category")) {
                        case "Grey": {
                            tr[1].innerHTML =
                                "<td class = 'title'>" + "Breed" + "</td>" +
                                    "<td>" + pig.breed + "</td>";
                            tr[4].innerHTML =
                                "<td class = 'title'>" + "Swimming" + "</td>" +
                                    "<td>" + pig.swimming + "</td>";
                            break;
                        }
                        case "Chestnut": {
                            tr[1].innerHTML =
                                "<td class = 'title'>" + "Breed" + "</td>" +
                                    "<td>" + pig.breed + "</td>";
                            tr[4].innerHTML =
                                "<td class = 'title'>" + "Language" + "</td>" +
                                    "<td>" + pig.language + "</td>";
                            break;
                        }
                        case "White": {
                            tr[1].innerHTML =
                                "<td class = 'title'>" + "Breed" + "</td>" +
                                    "<td>" + pig.breed + "</td>";
                            tr[4].innerHTML =
                                "<td class = 'title'>" + "Running" + "</td>" +
                                    "<td>" + pig.running + "</td>";
                            break;
                        }
                        case "Black": {
                            tr[1].innerHTML =
                                "<td class = 'title'>" + "Breed" + "</td>" +
                                    "<td>" + pig.breed + "</td>";
                            tr[4].innerHTML =
                                "<td class = 'title'>" + "Strength" + "</td>" +
                                    "<td>" + pig.strength + "</td>";
                            break;
                        }
                    }
                    tr[0].innerHTML =
                        "<td class = 'title' style = 'width: 100px;'>" + "Name" + "</td>" +
                            "<td>" + pig.name + "</td>";
                    tr[2].innerHTML =
                        "<td class = 'title'>" + "Height (cm)" + "</td>" +
                            "<td>" + pig.height + "</td>";
                    tr[3].innerHTML =
                        "<td class = 'title'>" + "Weight (kg)" + "</td>" +
                            "<td>" + pig.weight + "</td>";
                    tr[5].innerHTML =
                        "<td class = 'title'>" + "Personality" + "</td>" +
                            "<td>" + pig.personality + "</td>";
                });
            }
            // delete
            for (let a of document.querySelectorAll("a.delete")) {
                a.addEventListener("click", function (event) {
                    event.preventDefault();
                });
            }
            setInterval(function () {
                var vertical = document.querySelectorAll(".center.vertical");
                var horizontal = document.querySelectorAll(".center.horizontal");
                var width = Number(document.getElementsByTagName("html")[0].offsetWidth);
                var height = window.innerHeight;
                for (let ver of vertical) {
                    ver.style.top = height / 2 - Number(ver.offsetHeight) / 2 + "px";
                }
                for (let hor of horizontal) {
                    hor.style.left = width / 2 - Number(hor.offsetWidth) / 2 + "px";
                }
            }, 100);
        }
    };
});
