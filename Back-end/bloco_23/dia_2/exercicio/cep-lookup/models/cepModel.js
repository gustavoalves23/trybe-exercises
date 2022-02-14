const connection = require('./connection');

const getCep = async (cep) => {
  const [consultResult] = await connection.execute(
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep=?;',
    [cep]
  )
  return consultResult;
}

const insertCep = async ({cep, logradouro, bairro, localidade, uf}) => {
  await connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?);',
    [cep, logradouro, bairro, localidade, uf]
  )
}

module.exports = {
  getCep,
  insertCep
};