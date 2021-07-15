const functions = require('./functions2');
let {capsString, firstLetter, joinStrings} = functions;

jest.mock('./functions2');

describe('a função capsString deve', () => {
  it('retornar uma string em caixa baixa', () => {
    capsString.mockImplementation((string) => string.toLowerCase());
    expect(capsString('ABCDE')).toBe('abcde');
  })
})

describe('a função firstLetter deve', () => {
  it ('retornar a ultima letra', () => {
    firstLetter.mockImplementation((string) => string[string.length - 1]);
    expect(firstLetter('batata')).toBe('a');
  })
})

describe('a função joinStrings deve', () => {
  it('retornar tres strings concatenadas', () => {
    joinStrings.mockImplementation((string1,string2,string3) => `${string1}${string2}${string3}`);
    expect(joinStrings('aaaa','bbbb','cccc')).toBe('aaaabbbbcccc');
  })
})