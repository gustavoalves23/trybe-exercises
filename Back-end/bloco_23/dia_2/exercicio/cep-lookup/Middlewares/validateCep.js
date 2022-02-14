const cepIsValid = (cep) => /\d{5}-\d{3}/.test(cep);

module.exports = (req, res, next) => {
  const {cep} = req.params;
  if (!cepIsValid(cep)) return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });

  next();
};