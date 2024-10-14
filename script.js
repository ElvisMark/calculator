let displayValue = '';


const numberButton = document.querySelectorAll('.numBtn')
const operatorButton = document.querySelectorAll('.operatorBtn')
const equalsButton = document.getElementById('equalBtn')
const dotButton = document.getElementById('dotBtn')
const deleteButton = document.getElementById('delBtn')
const clearButton = document.getElementById('clrBtn')
const operation = document.querySelector('.operation')
const input = document.querySelector('.input')


numberButton.forEach(button => {
    button.addEventListener('click', (e) => {
    const buttonValue = e.target.textContent;
    displayValue += buttonValue;
    input.textContent = displayValue;
    })
});
operatorButton.forEach(button => {
    button.addEventListener('click',(e) => {
        const operator = e.target.textContent
        displayValue += operator
        input.textContent =displayValue
    });
});
clearButton.addEventListener('click', () => {
    displayValue = ''
    input.textContent = ''
})


function addition (a,b){
    let num1 = a;
    let num2 = b;
    let result = num1 + num2;
    return result;
};
function subtraction(a,b){
    let num1 = a;
    let num2 = b;
    let result = num1 - num2;
    return result;};
function multiplication(a,b){
    let num1 = a;
    let num2 = b;
    let result = num1 * num2;
    return result;
}
function division(a,b){
    let num1 = a;
    let num2 = b;
    let result = num1 / num2;
    return result;
};
function percentage(a,b){
    let num1 = a;
    let num2 = b;
    let result = num1 % num2;
    return result;
};

function operate(operator,num1,num2){

    switch(operator) {

    case '+': {
        return addition(num1,num2);
    };
    case '-': {
        return subtraction(num1,num2)
    };
    case '*': {
        return multiplication(num1,num2)
    };
    case '/': {
        return division(num1,num2)
    };
    case '%': {
        return percentage(num1,num2)
    }
    default:
        return null
    }
}