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
console.log(operate('+',6,3))