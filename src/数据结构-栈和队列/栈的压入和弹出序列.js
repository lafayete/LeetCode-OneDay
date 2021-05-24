var validateStackSequences = function(pushed, popped) {
    
    if(pushed.length === 0 && popped.length===0) return true;
    
    let stack = [];

    let idx = 0;

    for(let i = 0 ; i< pushed.length; i++) {

        stack.push(pushed[i]);

        while(stack.length && stack[stack.length - 1] === popped[idx]) {

            stack.pop();

            idx++;

        }


    }

    return stack.length === 0;


};

