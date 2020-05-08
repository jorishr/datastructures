//see evaluate_expressions.md for theoretical background
function evaluatePostFix(str){
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if(!isOperator(str[i])){
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
function isOperator(strChar){
    const operators = ['^', '*', '/', '+', '-'];
    for (let i = 0; i < operators.length; i++) {
        if(operators[i] === strChar){
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


/**
 * INFIX TO POSTFIX
 * - see operator precedence rules in evaluate_expressions.md
 * - evaluate left to right and construct a postfix string and use a stack to 
 * determine the order of the operators
 * - evaluate the postfix string with function above
 * 
 * LOGIC
 * - loop over string from left to right
 * - char isOperand? add to postfix string
 * - char isOperator? -> while stack notEmpty && stack.top has precedence over new
 * operator -> pop() top of the stack and add to postfix string
 */

function evaluateInfix(str){
    let stack = [];
    let postfix = '';
    for (let i = 0; i < str.length; i++) {
        if(!isOperator(str[i])){
            postfix += str[i];
            console.log('Operand added to postfix string:', postfix);
        } else {
            while(stack.length !== 0 && hasPrecedence(stack[stack.length - 1], str[i])){
                postfix += stack.pop();
            }
            //once the higher precedence operators have been removed, at new operator
            //or if stack was empty to begin with, or stackTop had lower precedence
            stack.push(str[i]);
        }   
    }
    while(stack.length > 0){
        postfix += stack.pop();
    }
    console.log('Final postfix string:', postfix);
    return postfix;
}

function hasPrecedence(operatorOnStack, operator){
    let indexOperatorOnStack = getIndex(operatorOnStack);
    let indexOperator        = getIndex(operator);
    if(indexOperatorOnStack < indexOperator) return true;
    return false;
}
function getIndex(operator){
    const operators = ['^', '*', '/', '+', '-'];
    for (let i = 0; i < operators.length; i++) {
        if(operator === operators[i]){
            return i;
        }        
    }
    throw new Error('Unknown operator. Check your infix input string.');
}

evaluateInfix('3+4*2');     //-> '342*+'
console.log('\n\n');
evaluateInfix('3*4+2');     //-> '34*2+'
console.log('\n\n');
evaluateInfix('2+4*6-3/9'); //-> '246*+39/-'
console.log('\n\n');
evaluatePostFix(evaluateInfix('3+4*2'));

/*
NOTE: 
- a future exercise could be to allow the input string to have parentheses
- push opening parentheses to the stack as well
- when a closing parenthess is found you have to pop all operators and the 
previously added opening parentheses.

NOTE: The function below was my first try to INFIX function above. It works 
but has much more code.

function evaluateInfix(str){
    const operators = ['^', '*', '/', '+', '-'];
    let stack = [];
    let postfix = '';
    for (let i = 0; i < str.length; i++) {
        if(!isOperator(str[i], operators)){
            postfix += str[i];
            console.log('Operand added to postfix string:', postfix);
        } else {
            if(stack.length === 0){
                stack.push(str[i]);
                console.log('Operator found and added to empty stack:', stack);
            } else {
                //loop over stack -> compare with only top of stack, instead of loop, stack changes when you push
                for (let j = stack.length - 1; j >= 0; j--) {
                    console.log('stack loop', j)
                    if(hasPrecedence(str[i], stack[j], operators)){
                        //stack.push(str[i]);
                        console.log('Operator with higher precedence found and added to stack:', stack);                  
                    } else {
                        postfix += stack.pop();               
                        console.log('Operator with lower precedence found, existing operator popped from the stack.'); 
                        console.log('New lower precedence operator added to stack:', stack);                  
                    } 
                }
                stack.push(str[i]);                
        }   
    }
    console.log(stack)
    while(stack.length > 0){
        postfix += stack.pop();
    }
    console.log('Postfix string:', postfix);
    return postfix;
} */