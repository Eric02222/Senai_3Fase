// export function soma(num1, num2) {
//     let resultado = num1 + num2;
//     return resultado;
// }

// soma(32,56)

/////////////////////////

// export function loop(){
//     for(let i = 0; i <= 10; i++){
//         console.log(i);
//     }
// }

// loop()

/////////////////////////

// export function semaforo(cor) {
//     if (cor == "Verde") {
//         console.log("Prosiga")
//     } else if (cor == "amarelo") {
//         console.log("Desacelere")
//     } else if(cor == "Vermelho"){
//         console.log("Pare")
//     }else {
//         console.log("Selecione uma cor valida")
//     }
// }

// semaforo("Vermelho");

/////////////////////////

export function sacolao() {
    const frutas = [];
    frutas.push("banana", "cereja", "maça")
    console.log(frutas);
    frutas.unshift("kiwi", "mamão")
    console.log(frutas);
}

sacolao()