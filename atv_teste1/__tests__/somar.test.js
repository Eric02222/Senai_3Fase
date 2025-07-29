import { somar } from '../src/somar'


describe('funcao somar', () => {
    test ('espero que a soma dos dois numeros esteja correta', () => {
        expect(somar(1, 2)).toBe(3);
    });

    test ('espero que a soma dos dois numeros decimais esteja correta', () => {
        expect(somar(1.5, 2.5)).toBe(4);
    });

    test ('espero que a soma dos dois numeros negativos esteja correta', () => {
        expect(somar(-2, -3)).toBe(-5);
    });

    test ('espero que a soma dos dois numeros negativos esteja correta', () => {
        expect(somar({}, 10)).toBe("Error");
    });

    
    test ('espero que a soma dos dois numeros negativos esteja correta', () => {
        expect(somar({}, [])).toBe("Error");
    });




});