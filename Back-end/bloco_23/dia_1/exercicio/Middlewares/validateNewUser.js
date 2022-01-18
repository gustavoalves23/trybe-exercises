const validate = (req) => {
  if (!req.body.firstName || typeof(req.body.firstName) !== 'string') return {valid: false, cause: 'O campo firstName não é valido'};
  if (!req.body.lastName || typeof(req.body.lastName) !== 'string') return {valid: false, cause: 'O campo lastName não é valido'};
  if (!req.body.email || typeof(req.body.email) !== 'string') return {valid: false, cause: 'O campo email não é valido'};
  if (!req.body.password || typeof(req.body.password) !== 'string') return {valid: false, cause: 'O campo password não é valido'};
  if (req.body.password.length < 6) return {valid: false, cause: "O campo 'password' deve ter pelo menos 6 caracteres"};

  return {valid: true};
}

module.exports = (req, res, next) => {
  const validateResponse = validate(req);

  if (!validateResponse.valid) return res.status(400).json({error: true, message: validateResponse.cause});

  next();
};