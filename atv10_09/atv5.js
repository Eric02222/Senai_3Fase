function linearSearch(arr, target) {
    if(target == null || target === undefined) return
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === target) return arr.indexOf(arr[i]);
    }
}

function binarySearch(arr, target) {
    if(target == null || target === undefined) return
    const numerosOrdenados = arr.sort((a, b) => a - b);
    const 

    for (let i = 0; i <= arr.length; i++) {
        if(numerosOrdenados.length / 2 < target){

        }
        if (numerosOrdenados[i] === target) return numerosOrdenados.indexOf(numerosOrdenados[i]);
    }

}

function buscaValores() {
    console.log(linearSearch([3, 1, 4], 3));
    console.log(binarySearch([1, 3, 4, 10], 4));
}

console.log(buscaValores())