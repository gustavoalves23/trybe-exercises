const joi = require('joi');

const validate = (values) => {
  const {error} = joi.object({
    cep:joi.string().regex(/\d{5}-\d{3}/).not().empty().required(),
    logradouro: joi.string().not().empty().required(),
    bairro: joi.string().not().empty().required(),
    localidade: joi.string().not().empty().required(),
    uf: joi.string().not().empty().required(),
  }).validate(values)

  if (error) return {is: false, message: error.details[0].message};

  return {is: true};
}

module.exports = async (req, res, next) => {
  const valid = await validate(req.body);

  if (!valid.is) return res.status(400).json({ "error": { "code": "invalidData", "message": `${valid.message}` } })

  next();
};