export function executarOperacao(a, b, operacao) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error"
    }

    if(operacao == "soma"){
        return a + b;
    } else if(operacao == "subtracao"){
        return a - b;
    }else if(operacao == "divisao"){
        if (a === 0 || b === 0){
            return "Não e possivel Dividir por zero"
        }else {
            return a / b;
        }
    }else if(operacao == "multiplicacao"){
        return a * b;
    }else{
        return "Erro: operação não existe"
    }
    

}

console.log(executarOperacao(1, 2, 'soma'));
console.log(executarOperacao(1, 2, 'subtracao'));
console.log(executarOperacao(1, 2, 'divisao'));
console.log(executarOperacao(1, 2, 'multiplicacao'));
console.log(executarOperacao(1, 2, 'isso'));
