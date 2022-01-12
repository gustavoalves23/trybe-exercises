const { expect } = require('chai');

const fs = require('fs');

const sinon = require('sinon');

const numberTest = require('./numberTest');

const writeFile = require('./writeFile');

describe('Ao chamar a função numberTest ', () => {
    describe('Ao passar um número', () => {
        it ('positivo', () => {
            expect(numberTest(4)).to.be.equals('positivo');
        })
        it ('negativo', () => {
            expect(numberTest(-4)).to.be.equals('negativo');
        })
        it ('neutro', () => {
            expect(numberTest(0)).to.be.equals('neutro');
        })
    })
    describe('Ao passar uma string', () => {
        it ('retorna um erro', () => {
            expect(numberTest('Teste')).to.be.equals('o valor deve ser um número')
        })
    })
})

describe('Ao chamar a função writeFile', () => {
    before(() => {
        sinon.stub(fs, 'writeFileSync');
    });

    after(() => {
        fs.writeFileSync.restore()
    })
    it ('retorna Ok', () => {
        expect(writeFile('./arquivo.txt', 'Esse é o conteudo')).to.be.equals('ok');
    })
})