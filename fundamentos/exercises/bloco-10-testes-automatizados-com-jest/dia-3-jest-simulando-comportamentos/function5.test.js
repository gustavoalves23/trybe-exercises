const functions = require('./functions2');

describe('testa se a função capsString', () => {
  it('retorna uma string em caixa baixa', () => {
    const first = jest.spyOn(functions, 'capsString').
  mockImplementation((string) => string.toLowerCase());
    expect(first('STRING')).toBe('string');
    functions.capsString.mockRestore();
    expect(functions.capsString('string')).toBe('STRING');
  })
})