import { verificarIdade } from "../src/verificarIdade"

describe("Verificar se e maior de idade", () => {
    test('Verifica se a a pessoa e maior de idade ', () => {
        expect(verificarIdade(51)).toBe("maior de idade");
    }
    )

    test('Verifica se a a pessoa e maior de idade ', () => {
        expect(verificarIdade("51")).toBe("maior de idade");
    }
    )

    test('Verifica se a a pessoa e maior de idade ', () => {
        expect(verificarIdade("11")).toBe("menor de idade");
    }
    )

    test('Verifica se a a pessoa e maior de idade ', () => {
        expect(verificarIdade(12)).toBe("menor de idade");
    }
    )

    test('teste erro com valor negativo ', () => {
        expect(verificarIdade(-2)).toBe("Erro ao verificar");
    }
    )

    test('teste erro com string ', () => {
        expect(verificarIdade("alex")).toBe("Erro ao verificar");
    }
    )

    test('teste erro com array ', () => {
        expect(verificarIdade([])).toBe("Erro ao verificar");
    }
    )

    test('teste erro com chaves ', () => {
        expect(verificarIdade({})).toBe("Erro ao verificar");
    }
    )

    test('teste erro com undefined ', () => {
        expect(verificarIdade(undefined)).toBe("Erro ao verificar");
    }
    )

    test('teste erro com null ', () => {
        expect(verificarIdade(null)).toBe("Erro ao verificar");
    }
    )
})