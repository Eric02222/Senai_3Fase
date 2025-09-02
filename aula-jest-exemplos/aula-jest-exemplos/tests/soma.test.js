import { soma } from "../src/soma";

describe('Função soma', () => {
    test ('espero a soma dos dois numeros', () => {
        expect(soma(1, 2)).toBe(3);
    })
})