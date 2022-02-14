const jwt = require('jsonwebtoken');
require('dotenv').config();

const newLogin = (req, res) => {
  const { username } = req;
  const secret = process.env.SECRET;
  const admPassword = process.env.ADM_PASSWORD;

  const isAdm = username === 'admin' && req.body.password === admPassword;

  if (isAdm) console.log('admin');
 
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ username, admin: isAdm }, secret, jwtConfig);

  res.status(200).json({ token });
};

const getLogin = (req, res) => {
  const { decoded } = req;

  res.status(200).json({ username: decoded.username, admin: decoded.admin });
};

const topSecret = (_req, res) => {
  res.status(200).json({
    secretInfo: 'Peter Parker é o Homem-Arannha',
  });
};

module.exports = {
  newLogin,
  getLogin,
  topSecret,
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTY0MzgyOTgxOSwiZXhwIjoxNjQzODMzNDE5fQ.HCRLKwXL63fRz4acEVrSrwuG3M1ASzGvEeWr6_JI2J