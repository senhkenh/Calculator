let num1 = "" //sirve para dejar los números, operador y resultado vacíos, para no mostrar nada
let num2 = ""
let operator = ""
let result = ""

const calcBtn = document.querySelectorAll(".btn")   //Selecciona todos los botones
const display = document.querySelector(".display")
const resultado = document.querySelector(".btn result") //Selecciona el display


//Muestra "0" para el valor inicial del visor
const displayValue = function displayVisor() {
    display.value = "0"    
}
displayValue();

function suma (num1, num2) {
    return num1 + num2
}

function resta (num1, num2) {
    return num1 - num2
}

function multiplicacion () {
    return num1 * num2
}

function division () {
    return num1/num2

    if (num2 == 0) {
        display.value = "Error"
    }
}

function operations(operator, num1, num2) {
    switch(operator) {
        case "+":
            return suma(num1, num2)
        case "-":
            return resta(num1, num2)
        case "*":
            return multiplicacion(num1, num2)
        case "/":
            return division(num1, num2)
    }
}

calcBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let input = e.target.textContent

        if(display.value === "0") {
            display.value = ""
        }

        if(input === "+" || input === "-" || input === "*" || input === "/") {
            operator = input
            num1 = display.value
            display.value = ""
        } else if(input === "=") {
            num2 = display.value
            result = operations(operator, parseFloat(num1), parseFloat(num2))
            display.value = result
            num1 = result.toString()
            operator = ""
        } else {
            display.value += input
        }
    })
})
