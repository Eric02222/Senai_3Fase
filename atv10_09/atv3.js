function isBalanced(str) {
    const parenteses = str.join("")
    if(parenteses === "()[]{}"){
        return true;
    }else {
        return false;
    }
 }

function parentesesBalanceados(){
    const str = ['(' , ')' , '[' , ']', '{' , '}' ]
    console.log(isBalanced(str));
}

console.log(parentesesBalanceados());