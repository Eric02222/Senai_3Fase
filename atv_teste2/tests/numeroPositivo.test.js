import { numPositivo, numNegativo } from "../src/numeroPositivo";

test("retornar que o numero e positivo", () => {
    expect(numPositivo(2)).toBe("Numero positivo")
});

test("retornar que o numero e negativo", () => {
    expect(numNegativo(-2)).toBe("Numero Negativo")
});