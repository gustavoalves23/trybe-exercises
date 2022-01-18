const connect = require('./connect');

const addUser = async ({firstName, lastName, email, password}) => {
  await connect.execute(
    'INSERT INTO Model.user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  )
  
  const [id]  = await connect.execute(
    'SELECT user_id FROM Model.user ORDER BY user_id DESC'
  )
  return id[0]['user_id'];
};

const getAllUsers = async () => {
  const [actualUsers] = await connect.execute(
    'SELECT * FROM Model.user;'
  )

  if(!actualUsers.length) return [];

  return actualUsers;
}

const getUserById = async (id) => {
  const [result] = await connect.execute(
    'SELECT * FROM Model.user WHERE user_id=?;',
    [id]
  )

  if (!result.length) return {message:"Usuário não encontrado", status: 404 }

  return {message: result[0], status: 200};
}

const updateAnUser = async (id, {firstName, lastName, email, password}) => {
  const checkIfExists = await connect.execute(
    'SELECT * FROM Model.user WHERE user_id =?',
    [id]
  );

    if (!checkIfExists) return false;

  await connect.execute(
    'UPDATE Model.user SET first_name=?, last_name=?, email=?, password=? WHERE user_id=?;',
    [firstName, lastName, email, password, id]
  )

  return true;
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  updateAnUser
}