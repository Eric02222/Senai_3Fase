import {verificarArray} from "../src/atividade"
const array = [1, 3, 5, 7, 8]

describe ("Verificar numero na array", () => {
    test('Devolver o numero de acordo do numero da lenght', () => { 
        expect(verificarArray(array, 3)).toBe(7)
     })

     test('Devolver Erro caso numero for acima do tamanho da array', () => { 
        expect(verificarArray(array, 9)).toBe("Erro a procurar item")
     })

     test('Devolver Erro caso numero for abaixo de zero', () => { 
        expect(verificarArray(array, -3)).toBe("Erro a procurar item")
     })

     test('Devolver Erro caso numero estiver em uma string', () => { 
        expect(verificarArray(array, "3")).toBe("Erro a procurar item")
     })

     test('Devolver Erro caso enviar uma array', () => { 
        expect(verificarArray(array, [])).toBe("Erro a procurar item")
     })

     test('Devolver Erro caso envie chaves', () => { 
        expect(verificarArray(array, {})).toBe("Erro a procurar item")
     })

     test('Devolver Erro caso envie texto', () => { 
        expect(verificarArray(array, "Teste")).toBe("Erro a procurar item")
     })

     test('Devolver Erro caso for enviado undefined', () => { 
        expect(verificarArray(array, undefined)).toBe("Erro a procurar item")
     })

     test('Devolver Erro caso for enviado null', () => { 
        expect(verificarArray(array, null)).toBe("Erro a procurar item")
     })
})