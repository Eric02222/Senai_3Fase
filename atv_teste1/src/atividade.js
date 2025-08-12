export function verificarArray(array, indice) {
   if(isNaN(indice) || !Array.isArray(array) || Array.isArray(indice) || indice == null || indice < 0 || typeof indice != "number" || indice > array.length -1){
        return "Erro a procurar item";
    }

    return array[indice];
}

console.log(verificarArray([1, 3, 5, 7, 8], "2"));