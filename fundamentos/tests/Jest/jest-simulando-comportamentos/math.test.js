const math = require('./math');
let { somar ,subtrair,multiplicar,dividir } = math;
jest.mock('./math')

describe('testando se a função subtrair', () => {
  subtrair = jest.fn();
  subtrair();
  it('é chamada corretamente', () => {
    expect(subtrair).toHaveBeenCalled();
  })
  it ('é chamada apenas uma vez', () => {
    expect(subtrair).toHaveBeenCalledTimes(1);
  })
})

describe('testando se a função multiplicar', () => {
  multiplicar = jest.fn().mockReturnValue(10);
  multiplicar();
  it('é chamada corretamente', () => {
    expect(multiplicar).toHaveBeenCalled();
  })
  it ('retorna o valor 10 ao ser chamada', () => {
    expect(multiplicar()).toBe(10);
  })
  it ('é chamada duas vezes', () => {
    expect(multiplicar).toHaveBeenCalledTimes(2);
  })
})

describe('testando se a função somar', () => {
  somar.mockImplementation((a,b) => a + b);
  somar();
  it('é chamada corretamente', () => {
    expect(somar).toHaveBeenCalled();
  })
  it ('é chamada apenas uma vez', () => {
    expect(somar).toHaveBeenCalledTimes(1);
  })
  it ('retorna o valor 10 ao passar os parametros 6 e 4', () => {
    expect(somar(6,4)).toBe(10);
  })
  it ('tenha dois parametros ao ser chamada com dois parametros', () => {
    expect(somar).toHaveBeenCalledWith(6,4);
  })
})

describe('testando se a função dividir', () => {
  dividir = jest.fn()
  .mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5)
  it ('retorna o valor 2 a primeira vez que for chamada', () => {
    expect(dividir()).toBe(2);
  })
  it('é chamada corretamente', () => {
    expect(dividir).toHaveBeenCalled();
  })
  it ('é chamada apenas uma vez', () => {
    expect(dividir).toHaveBeenCalledTimes(1);
  })
  it ('retorna o valor 5 a segunda vez que for chamada', () => {
    expect(dividir()).toBe(5); 
  }) 
  it ('retorna o valor 15 na terceira vez que for chamada', () => {
    expect(dividir()).toBe(15);
  })
  it ('tenha sido chamado 3 vezes', () => {
    expect(dividir).toHaveBeenCalledTimes(3);
  })

})

describe('testando se a função subtrair', () => {
  it ('retorna o valor 20 como padrão', () => {
    expect(subtrair()).toBe(20);
  })
  subtrair.mockRestore();
  it('funcina ao usar sua implementação original', () => {
    const mockSubtrair = jest
    .spyOn(math, 'subtrair');
    expect(mockSubtrair(20,6)).toBe(14);
  })
})

 
 

     