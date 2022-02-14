const CEP = require('../models/cepModel');

const getCep = async (cep) => {
  const filteredCep = cep.split('-').join('');
  const requestAnswer = await CEP.getCep(filteredCep);

  if (requestAnswer.length === 0) return {};

  const {cep:providedCep, logradouro, bairro, localidade, uf } = requestAnswer[0];

  return {
    cep: providedCep,
    logradouro,
    bairro,
    localidade,
    uf
  }
}

const insertCep = async (values) => {
  const CepExists = await getCep(values.cep);

  if (CepExists.cep) return false;

  values.cep = values.cep.split('-').join('');

  await CEP.insertCep(values);

  return true;
}

module.exports = {
  getCep,
  insertCep
}