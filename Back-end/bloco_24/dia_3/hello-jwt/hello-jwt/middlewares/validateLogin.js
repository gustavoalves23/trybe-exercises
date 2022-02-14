module.exports = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || username.length < 5 || !password || password.length < 5) {
    return res.status(400).json({ message: 'invalid input' });
  }

  req.username = username;

  next();
};