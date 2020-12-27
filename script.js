window.onload = function() {
    calculator.startinitscript();
}


let calculator = {

    buttons : undefined,
    input : undefined,

   startinitscript : function () {
    buttons = document.querySelectorAll("button"),
    input = document.querySelector("input")
   },
}