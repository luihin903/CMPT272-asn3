import { PigController } from "./PigController";
import { GreyBreeds, ChestnutBreeds, WhiteBreeds, BlackBreeds } from "./Enums";
import { ChestnutPig } from "./pigs/ChestnutPig";
import { GreyPig } from "./pigs/GreyPig";
import { Pig } from "./Pig";
import { WhitePig } from "./pigs/WhitePig";
import { BlackPig } from "./pigs/BlackPig";

var breeds = document.getElementsByClassName("Breeds");
var ability = document.getElementById("Ability");
var pc: PigController = new PigController();

display();

// add pig button
document.getElementById("Add")?.addEventListener("click", function(event): void {
    document.getElementById("More")!.style.visibility = "hidden";

    if (document.getElementById("New")!.style.visibility == "hidden")
        document.getElementById("New")!.style.visibility = "visible";
    else {
        document.getElementById("New")!.style.visibility = "hidden";
    }
})

// change inputs based on category
document.getElementById("Category")?.addEventListener("change", function(event): void {

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
            ability!.getElementsByTagName("input")[0].step = "0.01";
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
            ability!.getElementsByTagName("input")[0].step = "0.01";
            break;
        }
        case "BlackPig": {
            for (var i = 0; i < 5; i ++) {
                (<HTMLOptionElement>breeds[i]).value = BlackBreeds[i];
                breeds[i].innerHTML = BlackBreeds[i];
            }
            ability!.firstElementChild!.innerHTML = "Strength";
            ability!.getElementsByTagName("input")[0].type = "number";
            ability!.getElementsByTagName("input")[0].step = "0.01";
            break;
        }
    }
})

// create new pig
document.getElementById("submit")?.addEventListener("click", function(event): void {
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

function display(): void {
    var rows: string[] = [];
    rows.push("<tr style = 'font-weight: bold;'>" + "<td>Name</td>" + "<td>Category</td>" + "<td></td>" + "<td></td>" + "</tr>");
    for (var i: number = 0; i < pc.getAll().length; i ++) {
        var pig: Pig = pc.getAll()[i];
        rows.push(
            "<tr>" + 
                "<td>" + pig.name + "</td>" +
                "<td>" + pig.category + "</td>" +
                "<td>" + "<a class = 'more' href = '#' index = '" + i + "' category = '" + pig.category + "'>" + "More info" + "</a>" + "</td>" +
                "<td>" + "<a class = 'delete' href = '#' index = '" + i + "'>" + "Delete" + "</a" + "</td>" +
            "</tr>");
    }
    document.getElementById("Display")!.innerHTML = rows.join("");

    // more info
    for (let a of document.querySelectorAll("a.more")) {
        a.addEventListener("click", function(event): void {
            event.preventDefault();
            document.getElementById("New")!.style.visibility = "hidden";

            if (document.getElementById("More")!.style.visibility == "hidden")
                document.getElementById("More")!.style.visibility = "visible";
            else {
                document.getElementById("More")!.style.visibility = "hidden";
            }

            var tr = document.getElementById("More")!.getElementsByTagName("tr");
            let index: number = Number(a.getAttribute("index"));
            let pig: Pig = pc.getAll()[index];
            
            switch (a.getAttribute("category")) {
                case "Grey": {
                    tr[1].innerHTML = 
                        "<td class = 'title'>" + "Breed" + "</td>" +
                        "<td>" + (<GreyPig>pig).breed + "</td>";
                    tr[4].innerHTML = 
                        "<td class = 'title'>" + "Swimming" + "</td>" +
                        "<td>" + (<GreyPig>pig).swimming + "</td>";
                    break;
                }
                case "Chestnut": {
                    tr[1].innerHTML = 
                        "<td class = 'title'>" + "Breed" + "</td>" +
                        "<td>" + (<ChestnutPig>pig).breed + "</td>";
                    tr[4].innerHTML = 
                        "<td class = 'title'>" + "Language" + "</td>" +
                        "<td>" + (<ChestnutPig>pig).language + "</td>";
                    break;
                }
                case "White": {
                    tr[1].innerHTML = 
                        "<td class = 'title'>" + "Breed" + "</td>" +
                        "<td>" + (<WhitePig>pig).breed + "</td>";
                    tr[4].innerHTML = 
                        "<td class = 'title'>" + "Running" + "</td>" +
                        "<td>" + (<WhitePig>pig).running + "</td>";
                    break;
                }
                case "Black": {
                    tr[1].innerHTML = 
                        "<td class = 'title'>" + "Breed" + "</td>" +
                        "<td>" + (<BlackPig>pig).breed + "</td>";
                    tr[4].innerHTML = 
                        "<td class = 'title'>" + "Strength" + "</td>" +
                        "<td>" + (<BlackPig>pig).strength + "</td>";
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
        })
    }

    // delete
    for (let a of document.querySelectorAll("a.delete")) {
        a.addEventListener("click", function(event): void {
            event.preventDefault();
            let index: number = Number(a.getAttribute("index"));
    
            if (window.confirm("Do you want to delete " + pc.getAll()[index].name + "?")) {
                pc.delete(index);
                display();
            }
        })
    }
}

setInterval(function(): void {
    var vertical = document.querySelectorAll(".center.vertical");
    var horizontal = document.querySelectorAll(".center.horizontal");
    var width: number = Number(document.getElementsByTagName("html")[0].offsetWidth);
    var height: number = window.innerHeight;
    for (let ver of vertical) {
        (<HTMLElement>ver).style.top = height/2 - Number((<HTMLElement>ver).offsetHeight)/2 + "px";
    }
    for (let hor of horizontal) {
        (<HTMLElement>hor).style.left = width/2 - Number((<HTMLElement>hor).offsetWidth)/2 + "px";
    }

}, 100)