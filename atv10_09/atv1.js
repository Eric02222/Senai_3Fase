function push(stack, value) {
    if(value == null || value === undefined)return
    return stack.push(value);
 }

function pop(stack) { 
    if(!stack.length) return
    return stack.pop();
}

function peek(stack) {
    // for(let i = 0; i <= stack.length; i++){
    //     if(stack.length == i){
    //         return stack.slice(i - 1);
    //     }
    // }

    if(!stack.length)return
    return stack[stack.length-1]
    
 }


function atv1() {
    let stack = [];
    push(stack, 10);
    push(stack, 50);
    push(stack, 30);
    push(stack, 250);
    console.log(pop(stack));
    console.log(peek(stack));
}

console.log(atv1());