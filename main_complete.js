// Source - https://stackoverflow.com/a
// Posted by Wongjn
// Retrieved 2025-12-01, License - CC BY-SA 4.0

let num1 = null;
let num2 = null;
let operator = null;
let result = null;
const calcBtn = document.querySelectorAll(".btn");
const outputNum = document.getElementById("outputNum");

//display the number clicked
const displayValue = () => {
  if (num1 !== null && operator !== null) {
    outputNum.innerHTML = `<p id="outputNum">${num1} ${operator} ${num2 !== null}</p>`;
  }
};

//dertermine how calculator will work
const calcul = (num1, num2, operator) => {
  let result;

  switch ((num1, num2, operator)) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
  }
  return result;
};

//detect which button is clicked and assign it to a variable
const calculBtn = (e) => {
  const btn = e.target.textContent;
  const maybeInt = parseInt(btn, 10);
  if (Number.isInteger(maybeInt)) {
    if (num1 === null) {
      num1 = parseInt(btn);
    } else if (operator === null) {
      num1 * 10 + parseInt(btn);
    }
    if (num2 === null) {
      num2 = parseInt(btn);
    } else if (result === null) {
      num2 * 10 + parseInt(btn);
      displayValue();
    }
  } else if (operator === "C") {
    num1 = null;
    num2 = null;
    operator = null;
    outputNum.innerHTML = "";
  } else if (btn === "=") {
    const result = calcul(num1, num2, operator);
    outputNum.innerHTML = result;

    num1 = result;
    num2 = null;
    operator = null;
  } else {
    operator = btn;
    displayValue();
  }
};

calcBtn.forEach((btn) => {
  btn.addEventListener("click", calculBtn);
});