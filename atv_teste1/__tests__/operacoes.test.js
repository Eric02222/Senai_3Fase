import { executarOperacao } from '../src/operacoes'


describe('funcao soma', () => {
    test ('espero que a soma dos dois numeros esteja correta', () => {
        expect(executarOperacao(1, 2, "soma")).toBe(3);
    });

    test ('A funcao de soma deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao({}, 2, "soma")).toBe("Error");
    });

    test ('A funcao de soma deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao({}, [], "soma")).toBe("Error");
    });

    test ('A funcao de soma deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao("a", "b", "soma")).toBe("Error");
    });

    test ('A funcao de soma deve retornar uma mensagem de erro por esta enviando valores diferentes dos determinados', () => {
        expect(executarOperacao(1, 2, "isso")).toBe("Erro: operação não existe");
    });
});

describe('funcao subtracao', () => {
    test ('espero que a subtracao dos dois numeros esteja correta', () => {
        expect(executarOperacao(1, 2, "subtracao")).toBe(-1);
    });

    test ('A funcao de subtracao deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao([], 2, "subtracao")).toBe("Error");
    });

    test ('A funcao de subtracao deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao([], {}, "subtracao")).toBe("Error");
    });

    test ('A funcao de subtracao deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao("a", "b", "subtracao")).toBe("Error");
    });
   
    test ('A funcao de subtracao deve retornar uma mensagem de erro por esta enviando valores diferentes dos determinados', () => {
        expect(executarOperacao(1, 2, "isso")).toBe("Erro: operação não existe");
    });
});


describe('funcao divisao', () => {
    test ('espero que a divisao dos dois numeros esteja correta', () => {
        expect(executarOperacao(1, 2, "divisao")).toBe(0.5);
    });

    test ('espero que a divisao com o numero zero retorne uma mensagem de erro', () => {
        expect(executarOperacao(2, 0, "divisao")).toBe("Não e possivel Dividir por zero");
    });


    test ('A funcao de divisao deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao([], 2, "divisao")).toBe("Error");
    });

    test ('A funcao de divisao deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao([], {}, "divisao")).toBe("Error");
    });

    test ('A funcao de divisao deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao("a", "b", "divisao")).toBe("Error");
    });
   
    test ('A funcao de divisao deve retornar uma mensagem de erro por esta enviando valores diferentes dos determinados', () => {
        expect(executarOperacao(1, 2, "isso")).toBe("Erro: operação não existe");
    });
});


describe('funcao multiplicacao', () => {
    test ('espero que a multiplicacao dos dois numeros esteja correta', () => {
        expect(executarOperacao(1, 2, "multiplicacao")).toBe(2);
    });

    test ('A funcao de multiplicacao deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao([], 2, "multiplicacao")).toBe("Error");
    });

    test ('A funcao de multiplicacao deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao([], {}, "multiplicacao")).toBe("Error");
    });
   
    test ('A funcao de multiplicacao deve retornar uma mensagem de erro por esta enviando valores diferentes de number', () => {
        expect(executarOperacao("a", "b", "multiplicacao")).toBe("Error");
    });
   
    test ('A funcao de multiplicacao deve retornar uma mensagem de erro por esta enviando valores diferentes dos determinados', () => {
        expect(executarOperacao(1, 2, "isso")).toBe("Erro: operação não existe");
    });
});