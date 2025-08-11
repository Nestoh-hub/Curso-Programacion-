const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let base = null; 

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
       
        if (base !== null && btn.id === "=") {
            display.value = Math.pow(base, Number(display.value));
            base = null; 
        } else if (btn.id === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else if (btn.id === "ac") {
            display.value = "";
            base = null; 
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } else if (btn.id === "sqrt") {
            if (display.value) {
                display.value = Math.sqrt(Number(display.value));
            }
        } else if (btn.id === "cubo") {
            if (display.value) {
                display.value = Math.pow(Number(display.value), 3);
            }
        } else if (btn.id === "tan") {
            if (display.value) {
                display.value = Math.tan(Number(display.value) * Math.PI / 180);
            }
        } else if (btn.id === "potencia") {
            if (display.value) {
                base = Number(display.value);
                display.value = "";
            }
        } else {
            
            display.value += btn.id;
        }
    });
});