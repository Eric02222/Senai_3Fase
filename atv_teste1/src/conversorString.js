export function converterStirng(str) {
    const numero = Number(str)
    if (isNaN(numero) || Array.isArray(str) || str == null) {
        return "Erro ao converter";
    }
    return numero;
}

console.log(converterStirng("1"))