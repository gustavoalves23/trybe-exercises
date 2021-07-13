// const { test, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const {encode} = require('../dia-1-primeiros-passos-no-jest/challenges');
const {decode} = require('../dia-1-primeiros-passos-no-jest/challenges');
const {techList} =require('../dia-1-primeiros-passos-no-jest/challenges2');
const {hydrate} =require('../dia-1-primeiros-passos-no-jest/challenges2');
const {searchEmployee} = require('../dia-1-primeiros-passos-no-jest/bonus')


describe('testa se encode e decode', () => {
  test('são funções', () => {
    expect(typeof(encode)).toBe('function');
    expect(typeof(decode)).toBe('function');
  })

  test('agem da forma que deveriam agir', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  })

  test('não fazem nada para outras letras/números', () => {
    expect(encode('b')).toBe('b');
    expect(encode('c')).toBe('c');
    expect(encode('d')).toBe('d');
    expect(encode('f')).toBe('f');
    expect(decode('6')).toBe('6');
    expect(decode('7')).toBe('7');
    expect(decode('8')).toBe('8');
    expect(decode('9')).toBe('9');
  })

  test('se o número de caracteres do input é igual ao output', () => {
    expect(encode('Frase de teste').length).toBe(14);
    expect(decode('Fr1s2 d2 t2st2').length).toBe(14);
  })
})

describe('testa de techlist', () => {
  test('se retornam os valores esperados', () => {
    expect(techList(['tech1','tech2','tech3'], 'name')).toEqual([{ tech: 'tech1', name: 'name' },{ tech: 'tech2', name: 'name' },{ tech: 'tech3', name: 'name' }])
  })
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
})

describe('testa se hydrate', () => {
  test('funciona como deveria funcionar', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cerveja, 2 shots e 1 catuaba')).toBe('4 copos de água');
    expect(hydrate('2 caipirinhas')).toBe('2 copos de água');
  })
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
})

describe('testa se searchEmployee', () => {
  test('verifica se é uma função', () => {
    expect(typeof(searchEmployee)).toBe('function');
  })
  test('verifica se ela retorna os resultados esperados', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('O funcionário de id 8579-6 tem como Primeiro nome Ana');
    expect(searchEmployee('5569-4', 'lastName')).toBe('O funcionário de id 5569-4 tem como Ultimo nome Jobs');
    expect(searchEmployee('1256-4', 'specialities')).toBe('O funcionário de id 1256-4 tem como especialidades Hooks,Context API,Tailwind CSS');
  })
  test('Verifica se, ao passar um id inexistente, a função retorna um erro', () => {
    expect(searchEmployee('123456','lastName')).toBe('ID não identificada');
    expect(searchEmployee('ID INCORRETA','lastName')).toBe('ID não identificada');
    expect(searchEmployee('¢£¶•¡¢•¶§¡§¢¶•','lastName')).toBe('ID não identificada');
    expect(searchEmployee('46782','lastName')).toBe('ID não identificada');
  })
  test('Verifica se, ao passar uma informação inexistente, a função retorna um erro', () => {
    expect(searchEmployee('1256-4', 'middleName')).toBe('Informação indisponível');
    expect(searchEmployee('1256-4', 'firstNamea')).toBe('Informação indisponível');
    expect(searchEmployee('1256-4', '1256-4')).toBe('Informação indisponível');
  })
})
