const functions = require('./functions1');
let {randomNumber} = functions;

describe('testa se a função randomNumber', () => {
  randomNumber = jest.fn().
  mockImplementationOnce((a,b) => a/b);
  it('recebe dois valores e retorna a divisão deles somente na primera vez', () => {
    expect(randomNumber(10,5)).toBe(2);
    expect(randomNumber(10,5)).not.toBe(2);
  })
})