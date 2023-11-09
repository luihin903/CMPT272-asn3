import { PigController } from "./PigController";

document.getElementById("Add")?.addEventListener("click", function(e) {
    document.getElementById("New")!.style.visibility = "visible";
})

var pc: PigController;