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
function modulo(a,b){
    let num1 = a;
    let num2 = b;
    let result = num1 % num2;
    return result;
};

function operate(operator,num1,num2){

    if(operator === '+'){
        return(addition(num1,num2))

    } else if (operator === '-'){
        return(subtraction(num1,num2))

    } else if (operator === '*'){
        return(multiplication(num1,num2))

    } else if (operator === '/'){
        return (division(num1,num2))

    } else if (operator === '%'){
        return(modulo(num1,num2))

    } else {
        return 'Invalid Operator'
    };
}
console.log(operate('/',6,3))