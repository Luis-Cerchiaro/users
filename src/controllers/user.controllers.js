const catchError = require("../utils/catchError");
const User = require("../models/User");

const getAll = catchError(async (req, res) => {
  const user = await User.findAll();
 
  return res.json(user);
});

const createUser = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const newBody = { first_name, last_name, email, password, birthday };
 
  const user = await User.create(newBody);
  return res.json(user);
});

const getOneUser = catchError(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);
  if (!user) return res.sendStatus(404);
  
  return res.json(user);
});

const removeUser = catchError(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);
  if (!user) return res.sendStatus(404);

  await User.destroy({ where: { id } });
  return res.send("user deleted!").sendStatus(204);
});

const updateUser = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } = req.body;
  const newBody = { first_name, last_name, email, password, birthday };

  const user = await User.findByPk(id);
  if (!user) return res.sendStatus(404);

  const userUpdate = await User.update(
    newBody,
    { where: { id }, returning: true }
    );
  return res.json(userUpdate[1][0]);
});

module.exports = {
  getAll,
  createUser,
  getOneUser,
  removeUser,
  updateUser,
};
