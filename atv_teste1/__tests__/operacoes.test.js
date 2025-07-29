import { executarOperacao } from '../src/operacoes'


describe('funcao executarOperacao', () => {
    test ('espero que a soma dos dois numeros esteja correta', () => {
        expect(executarOperacao(1, 2, 'soma')).toBe(3);
    });

    test ('espero que a soma dos dois numeros esteja correta', () => {
        expect(executarOperacao(1, 2, 'subtracao')).toBe(3);
    });

    test ('espero que a soma dos dois numeros esteja correta', () => {
        expect(executarOperacao(1, 2, 'divisao')).toBe(3);
    });

    test ('espero que a soma dos dois numeros esteja correta', () => {
        expect(executarOperacao(1, 2, 'multiplicacao')).toBe(3);
    });



});