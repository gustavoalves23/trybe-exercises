const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
 return res.status(401).json({
    error: {
      message: 'Token not found',
    },
  }); 
}

const secret = process.env.SECRET;

try {
  const decoded = jwt.decode(token, secret);
  req.decoded = decoded;
  next();
} catch (e) {
  return res.status(401).json({
    error: { message: e.message },
  });
}
};