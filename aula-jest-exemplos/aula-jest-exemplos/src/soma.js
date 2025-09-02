export function soma(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || Array.isArray(num1) || isNaN(num2) || Array.isArray(num2)) {
        throw new Error("Número negativo não permitido");
    }else {
        soma = num1 + num2;
        return soma;
    }
}