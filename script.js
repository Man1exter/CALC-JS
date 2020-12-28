window.onload = function() {
    console.log("application starting good");
    calculator.startinitscript();
};


let calculator = {

    buttons : undefined,
    input : undefined,

   startinitscript : function () {
    buttons = document.querySelectorAll("button .box"),
    input = document.querySelector("input mainInput")
  
    for(let i = 0; i < this.buttons.length; i++){
        let element = this.buttons[i];
        element.addEventListener("click",clickButton);
    }
   },

   clickButton : function (event) {
    let textbutton = event.target,innerText;
    calculator.addTextFromInput(textbutton);
   },

   addTextFromInput : function (str) {

   },
}