function isBalanced(str) {
    const parenteses = str.join("")
    if(parenteses === "()[]{}"){
        return true;
    }else {
        return false;
    }
 }

function parentesesBalanceados(){
    const pairs = {')' : '(' , ']' : '[', '}' : '{' }
    const stack = []

    for (ch of str){
        if(ch === '(' || ch === '[' || ch === '{' ){
            stack.push(ch)
        }else if (ch === ')' || ch === ']' || ch === '}' ){
            if(stack.pop() !== pairs[ch]) return false
        }
    }

    console.log(isBalanced(str));
    return stack.length === 0
}

console.log(parentesesBalanceados());