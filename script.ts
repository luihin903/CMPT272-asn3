import { PigController } from "./PigController";
import { GreyBreeds, ChestnutBreeds, WhiteBreeds, BlackBreeds } from "./Enums";
import { ChestnutPig } from "./pigs/ChestnutPig";
import { GreyPig } from "./pigs/GreyPig";
import { Pig } from "./Pig";

var breeds = document.getElementsByClassName("Breeds");
var ability =document.getElementById("Ability");
var pc = new PigController();

display();

// add pig button
document.getElementById("Add")?.addEventListener("click", function(event) {
    document.getElementById("New")!.style.visibility = "visible";
})

// change inputs based on category
document.getElementById("Category")?.addEventListener("change", function(event) {

    ability =document.getElementById("Ability");
    console.log(ability);
    console.log((event.target as HTMLSelectElement).value);
    switch ((event.target as HTMLSelectElement).value) {
        case "GreyPig": {
            for (var i = 0; i < 5; i ++) {
                (<HTMLOptionElement>breeds[i]).value = GreyBreeds[i];
                breeds[i].innerHTML = GreyBreeds[i];
            }
            ability!.firstElementChild!.innerHTML = "Swimming";
            ability!.getElementsByTagName("input")[0].type = "number";
            break;
        }
        case "ChestnutPig": {
            for (var i = 0; i < 5; i ++) {
                (<HTMLOptionElement>breeds[i]).value = ChestnutBreeds[i];
                breeds[i].innerHTML = ChestnutBreeds[i];
            }
            ability!.firstElementChild!.innerHTML = "Language";
            ability!.getElementsByTagName("input")[0].type = "text";
            break;
        }
        case "WhitePig": {
            for (var i = 0; i < 5; i ++) {
                (<HTMLOptionElement>breeds[i]).value = WhiteBreeds[i];
                breeds[i].innerHTML = WhiteBreeds[i];
            }
            ability!.firstElementChild!.innerHTML = "Running";
            ability!.getElementsByTagName("input")[0].type = "number";
            break;
        }
        case "BlackPig": {
            for (var i = 0; i < 5; i ++) {
                (<HTMLOptionElement>breeds[i]).value = BlackBreeds[i];
                breeds[i].innerHTML = BlackBreeds[i];
            }
            ability!.firstElementChild!.innerHTML = "Strength";
            ability!.getElementsByTagName("input")[0].type = "number";
            break;
        }
    }
})

// create new pig
document.getElementById("submit")?.addEventListener("click", function(event) {
	console.log("pressed")
    pc.add(
        (<HTMLSelectElement>(document.getElementById("Category")!)).selectedIndex,
        (<HTMLInputElement>(document.getElementById("Name")!)).value,
        Number((<HTMLInputElement>(document.getElementById("Height"))).value),
        Number((<HTMLInputElement>(document.getElementById("Weight")!)).value),
        (<HTMLInputElement>(document.getElementById("Personality")!)).value,
        (<HTMLSelectElement>(document.getElementById("Breed")!)).selectedIndex,
        document.getElementById("Ability")!.getElementsByTagName("input")[0].value
    )
})

function display() {
    console.log(pc.getAll());
    var rows: string[] = [];
    rows.push("<tr style = 'font-weight: bold;'>" + "<td>Name</td>" + "<td>Category</td>" + "<td></td>" + "<td></td>" + "</tr>");
    for (var i: number = 0; i < pc.getAll().length; i ++) {
        var pig: Pig = pc.getAll()[i];
        rows.push("<tr>" + "<td>" + pig.name + "</td>" + "<td>" + pig.category + "</td>" + "</tr>");
    }
    document.getElementById("Display")!.innerHTML = rows.join("");
}