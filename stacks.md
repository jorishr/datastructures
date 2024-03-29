# Stacks
A stack is a data collection structure whereby insertion an deletion can only happen at one end of the collection, the top.

It is a LAST-IN-FIRST-OUT structure.

Common operations are insertion (push) and deletion (pop). Others may include: access top element, clear stack and check size of the stack.

All operations have a time complexity of O(1) or constant time because all operations deal with only one element, the top.

Stacks are used for tracking function execution in runtime environments of programming languages, the call stack.

Stacks are also used for UNDO functionality in programs. Each new operation the user performs is added to the stack so the user can undo previous operations: last performed operation first.