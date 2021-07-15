const functions = require('./functions1')
let {randomNumber} = functions;

describe ('testa se a função randomNumber', () => {
  randomNumber = jest.fn()
  .mockReturnValue(10)
  .mockImplementationOnce((a,b) => a/b)
  it('retorna o valor de 5 (10/2) uma vez', () => {
    expect(randomNumber(10,2)).toBe(5);
  })
  it('retorna o valor 10', () => {
    expect(randomNumber()).toBe(10);
  })
  it('foi chamada', () => {
    expect(randomNumber).toBeCalled;
  })
  it('foi chamada duas vezes', () => {
    expect(randomNumber).toBeCalledTimes(2);
  })
})