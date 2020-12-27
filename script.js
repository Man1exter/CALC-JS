window.onload = function() {
    calculator.startinitscript();
};


let calculator = {

    buttons : undefined,
    input : undefined,

   startinitscript : function () {
    buttons = document.querySelectorAll("button"),
    input = document.querySelector("input")
  
    for(let i = 0; i < this.buttons.length; i++){
        let element = this.buttons[i];
        element.addEventListener("click",clickButton);
    }
   },

   clickButton : function (event) {
    
   },
}