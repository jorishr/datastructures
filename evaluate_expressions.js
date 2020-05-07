//see evaluate_expressions.md for theoretical background
function evaluatePostFix(str){
    let stack = [];
    let operators = ['^', '*', '/', '+', '-'];
    for (let i = 0; i < str.length; i++) {
        if(!isOperator(str[i], operators)){
            stack.push(str[i]);
            console.log('Operand push to stack:', str[i]);
        } else {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let expression = `${operand1} ${str[i]} ${operand2}`;
            let result = eval(expression);
            stack.push(result);
            console.log('Operator found. Expression result pushed to stack:', result)
        }
        //error handling
        if(stack.length > 3) {
            //only binary operators, thus max length of stack is 3
            //operand + operand -> operator or result + operand + operand -> operator
            return console.error('ERROR! Invalid expression format');
            //throw new Error('Invalid expression format');
        }
    }         
    console.log('Final expression evaluation result:', stack[0]);
    return stack[0];
}
function isOperator(strChar, arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === strChar){
            return true;
        }
    }
    return false;
}

evaluatePostFix('23*54*+9-');   //-> 17
console.log('\n\n');
evaluatePostFix('233*54*+9-');  //-> Error


//to evaluate PREFIX you can use the same function but run the loop backwards 
//and adjust the order of the expression variables