
function reverseStringProf(str) {
    const stack = [];
    for (const ch of str) stack.push(ch)
        let out = '';
    while(stack.length) out += stack.pop();
    return out;
    
}

function reverseString(str) {
    const valoresinvertido = str.toReversed();
    return valoresinvertido.join("");
 }

function inverterString() {
    const str = ["a", "b", "c"];
    console.log(reverseString(str))
}

console.log(inverterString())