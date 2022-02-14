const CEP = require('../services/cepService');

const ping = (_req, res) => res.status(200).json({message: 'Pong!'});

const getCep = async (req, res) => {
  const { cep } = req.params;
  const getCepResponse = await CEP.getCep(cep);

  if (!getCepResponse.cep) return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });

  res.status(200).json(getCepResponse);
}

const insertCep = async (req, res) => {
  const {cep, logradouro, bairro, localidade, uf} = req.body;
  const values = {cep, logradouro, bairro, localidade, uf};
  const insertCepResponse = await CEP.insertCep(values);

  if (!insertCepResponse) return res.status(409).json({
    "error": { "code": "alreadyExists", "message": "CEP já existente" }
  }) ;

  res.status(201).json(values);
}

module.exports = {
  ping,
  getCep,
  insertCep
}