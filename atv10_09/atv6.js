let stack1 = [];
let stack2 = [];

function enqueue2(value) {
    stack1.push(value);
}

function dequeue2() {
    if (stack2.length === 0) {
        while (stack1.length) {
            stack2.push(stack1.pop());
        }
    }
    return stack2.pop();
}

function front2() {
    if (stack2.length === 0) {
        while (stack1.length) stack2.push(stack1.pop());
    }
    return stack2[stack2.length - 1];
}


function filaDuasPilhas() {
    enqueue2(1);
    enqueue2(2);
    console.log(dequeue2());

}

console.log(filaDuasPilhas());