export function verificarIdade(idd) {
    const idade = Number(idd);

    if(isNaN(idade) || Array.isArray(idd) || idd == null || idade < 0) {
        return "Erro ao verificar";
    }else if(idade < 18){
        return "menor de idade";
    }

    return "maior de idade"
}

console.log