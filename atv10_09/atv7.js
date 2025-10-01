function isPalindrome(str) {
    const s = str.normalize('NFC')
    let stack = [];
    let queue = [];

    for (const ch of s) {
        stack.push(ch);
        queue.push(ch);
    }

    while(queue.length){
        const a = stack.pop();
        const b = stack.shift();
        if(a !== b) return false
    }

    return true;
}

function palindromoPilhaFila(){
    console.log(isPalindrome("arara"));//vai sair true
    console.log(isPalindrome("teste"));//vai sair false
}

console.log(palindromoPilhaFila());

