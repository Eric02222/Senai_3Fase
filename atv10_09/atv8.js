function evalRPN(expr) {
    let stack = [];
    let tokens = expr.split(" ");

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();
            if (token === "+") stack.push(a + b);
            if (token === "-") stack.push(a - b);
            if (token === "*") stack.push(a * b);
        }
    }

    return stack.pop();
}

function testarRPN() {
    console.log(evalRPN("3 4 + 2 *"));
    console.log(evalRPN("5 1 2 + 4 * + 3 -"));
}

console.log(testarRPN());