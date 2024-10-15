let displayValue = "";
let firstOperand = "";
let secondOperand = "";
let currentOperator = "";
let operationValue = "";

const numberButton = document.querySelectorAll(".numBtn");
const operatorButton = document.querySelectorAll(".operatorBtn");
const equalsButton = document.getElementById("equalBtn");
const dotButton = document.getElementById("dotBtn");
const deleteButton = document.getElementById("delBtn");
const clearButton = document.getElementById("clrBtn");
const operationScreen = document.querySelector(".operation");
const inputScreen = document.querySelector(".input");

numberButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.textContent;
    if (displayValue.length < 10) {
      displayValue += buttonValue;
      operationValue += buttonValue;
      inputScreen.textContent = displayValue;
      operationScreen.textContent = operationValue;
    }
  });
});
operatorButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (firstOperand === "") {
      firstOperand = displayValue;
    } else if (currentOperator !== "") {
      secondOperand = displayValue;
      const result = operate(
        currentOperator,
        parseFloat(firstOperand),
        parseFloat(secondOperand)
      );
      inputScreen.textContent = result;
      firstOperand = result;
    }

    currentOperator = e.target.textContent;
    operationValue += `${currentOperator}`;
    operationScreen.textContent = operationValue;
    displayValue = "";
  });
});
clearButton.addEventListener("click", () => {
  displayValue = "";
  firstOperand = "";
  secondOperand = "";
  currentOperator = "";
  operationValue = "";
  inputScreen.textContent = "0";
  operationScreen.textContent = "0";
});

deleteButton.addEventListener("click", (e) => {
  displayValue = displayValue.slice(0, -1);
  operationValue = operationValue.slice(0, -1);
  inputScreen.textContent = displayValue;
  operationScreen.textContent = operationValue;
});

dotButton.addEventListener("click", (e) => {
  if (!displayValue.includes(".")) {
    displayValue += ".";
    operationValue += ".";
    inputScreen.textContent = displayValue;
    operationScreen.textContent = operationValue;
  }
});
equalsButton.addEventListener("click", () => {
  if (firstOperand !== "" && currentOperator !== "") {
    secondOperand = displayValue;
    let result = operate(
      currentOperator,
      parseFloat(firstOperand),
      parseFloat(secondOperand)
    );
    if (result === "Error") {
        inputScreen.textContent = "Error!!!!!!";  
    } else {
        result = parseFloat(result.toFixed(2));
        inputScreen.textContent = result;
    }
    inputScreen.textContent = result;
    operationScreen.textContent = `${operationValue} = ${result}`;
    displayValue = result.toString();
    firstOperand = "";
    currentOperator = "";
    operationValue = result.toString();
  }
});

function addition(a, b) {
  let num1 = a;
  let num2 = b;
  let result = num1 + num2;
  return result;
}
function subtraction(a, b) {
  let num1 = a;
  let num2 = b;
  let result = num1 - num2;
  return result;
}
function multiplication(a, b) {
  let num1 = a;
  let num2 = b;
  let result = num1 * num2;
  return result;
}
function division(a, b) {
  let num1 = a;
  let num2 = b;
  if(b===0){
    return 'Error'
  }else {
    let result = num1 / num2;
    return result;
  }
}
function percentage(a, b) {
  let num1 = a;
  let num2 = b;
  let result = num1 % num2;
  return result;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+": {
      return addition(num1, num2);
    }
    case "-": {
      return subtraction(num1, num2);
    }
    case "*": {
      return multiplication(num1, num2);
    }
    case "/": {
      return division(num1, num2);
    }
    case "%": {
      return percentage(num1, num2);
    }
    default:
      return null;
  }
}
