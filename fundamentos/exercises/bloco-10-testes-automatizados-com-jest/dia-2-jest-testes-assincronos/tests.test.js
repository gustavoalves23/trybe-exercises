const { uppercase } = require('./functionsToTest')
const { getUserName } = require('./functionsToTest')
const { getRepos } = require('./functionsToTest')
const { getAnimal} = require('./functionsToTest')
const { getAnimalByAge} = require('./functionsToTest')

describe ('Testa se uppercase', () => {
  it('é uma função', () => {
    expect(typeof(uppercase)).toBe('function');
  })
  it('retorna uma frase em letras maiusculas', (done) => {
    expect(uppercase('frasedeteste', (frase) => {
      expect(frase).toBe('FRASEDETESTE');
      done();
    }))
  })
})

describe ('Testa se getUserName', () => {
  it('retorna o username caso o userID seja encontrado', () => {
    expect.assertions(1);
    return getUserName(4)
    .then((name) => {
      expect(name).toBe('Mark');
    })
  })

  it('retorna que não retorna o usuário caso a entrada seja incorreta', () => {
    expect.assertions(1);
    return getUserName(1)
    .catch ((message) => {
      expect(message).toEqual({error: "User with 1 not found."});
    })
  })
})

describe ('(Async/Await)Testa se getUserName', () => {
  it ('retorna o username caso o userID seja encontrado', async () => {
    expect.assertions(1);
    const user = await getUserName(4);
    expect(user).toBe('Mark');
  })

  it('retorna que não retorna o usuário caso a entrada seja incorreta', async () => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch(error) {
      expect(error).toEqual({error: "User with 1 not found."});
    }
  })
})

describe ('Testa de se a função getRepos', () => {
  it ('retorna os repositórios corretos ao fazer a requisição', () => {
      expect.assertions(1);
      return getRepos('https://api.github.com/orgs/tryber/repos')
      .then((list) => {
        expect(list).toContain('sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator');
      })
  })
})

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalByAge(1).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge(3).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});