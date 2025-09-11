function reverseString(str) {
    const valoresinvertido = str.toReversed();
    return valoresinvertido.join("");
 }

function inverterString() {
    const str = ["a", "b", "c"];
    console.log(reverseString(str))
}

console.log(inverterString())