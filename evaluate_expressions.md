# Evaluation of logical and mathematical expressions
## Prefix, Infix and Postfix

In mathematical and logical expression we find various combinations of operands and (binary)operators. Examples: a + b; x * y;  3 - 2
Operands are objects upon which the logical operation is performed and they can be constants,variables, or an expression itself: (a + b) * 2 / 8

- infix notation: <operand> <operator> <opereand>
Example: a + b
- prefix notation: <operator> <operand> <operand>
Example: + a b
- postfix notation: <operand> <operand> <operator>
Example: a b +

How do we process those expressions programatically? A set of rules is needed to determine in which order operations are processed. Example: 2 + 3 * 4 can be 5 * 4 = 20 or 2 + 12 = 14

The mathematics operator precedence rules are:
- parentheses (), {}, []
- exponents (right to left: 2^3^2 = 2^9 = 512)
- multiplication and division (left to right: 4 * 3 / 2 = 12 / 2 = 6)
- addition and subtraction (left to right: 1 + 2 - 3 = 3 - 3 = 0)

The use of parentheses reveals explicit intent:
4 + 2 * 3 = 4 + 6 = 10
(4 + 2) * 3 = 6 * 3 = 18

2 * 6 / 2 - 3 + 7 = 12 / 2 - 3 + 7 = 6 - 3 - 7 = 3 + 7  = 10
{(2 * 6) / 2 } - (3 + 7) = 6 - 10 = -4

To parse these type of expression without ambiguity prefix and postfix notations were proposed that don't need rely on the use of parentheses or associative rules. The human readability decreases for these notation but it saves memory in machine processing.

Examples:
- infix:  a + b * c => a + (b * c)
- prefix: a + (b * c) => a + (*b c) => +a*bc
- postfix: a + (b * c) => a + bc* => abc*+

- infix: a * b + c * d - e => {(a * b) + (c * d)} - e 
- prefix: {(*ab) + (*cd)} - e => -{+*ab*cd}e => -+*ab*cde
- postfix: {(ab*) + (cd*)} - e => {(ab*)(cd*)+}e- => ab*cd*+e-

a = 2, b = 3, c = 5, d = 4, e = 9
Postfix string: '23*54*+9-' (usually operators will also be seperated by a space or comma)
A program could then evaluate that expression:
- loop over the string
- when operator is found we know that the operation applies to the previous two operands
In the example string the first * applies to 2 * 3, the second * applies to 5 * 4, the + applies to result of (23*) + result of (54*) and the last - applies to the result of (23*54*+) - 9 or 
=> 6 54*+9- => 6 20+9- => 26 9- => 17 
- while looping over the string the values can be operand or operator, the operands can be stored in a list or a stack. We are working with binary operators thus there will be always maximum two elements on the stack. The last to go into the stack is the first to come out:
- push(2)
- push(3)
- perform: push(pop(3) * pop(2))   //push(6), stack = [6];
- push(5)  
- push(4)  
- perform: push(pop(5) * pop(4))   //push(20), stack = [6, 20];
- perform: push(pop(20) + pop(6))  //push(26), stack = [26];
- push(9) 
- perform: push(pop(9) - pop(26))  //push(17), stack = [17]
- end of string, return stack: 17








