// src/validator.test.ts
// O compilador de TypeScript resolverá o módulo JavaScript de forma transparente
import validarChamado from './validator';

describe('Suíte de Testes - Validador de Chamados (Service Desk)', () => {
    
    test('Deve validar com sucesso um chamado com título preenchido', () => {
        const resultado = validarChamado("Erro de conexão com o banco MySQL");
        expect(resultado).toBe(true);
    });

    test('Deve lançar erro se o título do chamado for menor que 5 caracteres', () => {
        expect(() => {
            validarChamado("adbc");
        }).toThrow("O título do chamado não pode ser menor que 5 caracteres.");
    });

    test('Deve lançar erro se o título for maior que 100 caracteres', () => {
        const titulo = "a".repeat(101);
        expect(() => {
            validarChamado(titulo);
        }).toThrow("O título do chamado não pode ser maior que 100 caracteres.");
    });
});
