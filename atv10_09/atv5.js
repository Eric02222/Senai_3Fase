function linearSearch(arr, target) {
    if(target == null || target === undefined) return
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === target) return arr.indexOf(arr[i]);
    }
}

function binarySearch(arr, target) {
    if(target == null || target === undefined) return
    const numerosOrdenados = arr.sort((a, b) => a - b);
    const metadeArray = Math.floor(numerosOrdenados.length / 2)

    for (let i = 0; i <= numerosOrdenados.length; i++) {
        if( numerosOrdenados[metadeArray] < target){
            for(let i = 0; i <= metadeArray; i++){
                if (numerosOrdenados[i] === target) return numerosOrdenados.indexOf(numerosOrdenados[i]);
            }
        }else if(numerosOrdenados[metadeArray] > target){
            for(let i = metadeArray; i <= metadeArray; i++){
                if (numerosOrdenados[i] === target) return numerosOrdenados.indexOf(numerosOrdenados[i]);
            }
        }
    }

}

function buscaValores() {
    console.log(linearSearch([3, 1, 4], 4));
    console.log(binarySearch([1, 3, 4, 10], 10));
}

console.log(buscaValores())