import { converterStirng } from "../src/conversorString"

describe("Converter string para numero", () => {
    test('Converter um numero em string para formato number ', () => {
        expect(converterStirng("51")).toBe(51);
    }
    )

    test('Converter um numero em string para formato number ', () => {
        expect(converterStirng("alex")).toBe("Erro ao converter");
    }
    )

    test('Converter um numero em string para formato number ', () => {
        expect(converterStirng([])).toBe("Erro ao converter");
    }
    )

    test('Converter um numero em string para formato number ', () => {
        expect(converterStirng(undefined)).toBe("Erro ao converter");
    }
    )

    test('Converter um numero em string para formato number ', () => {
        expect(converterStirng(null)).toBe("Erro ao converter");
    }
    )
})