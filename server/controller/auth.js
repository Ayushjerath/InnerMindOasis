const { mongoose } = require("mongoose");
const { User } = require("../models/User");

const getUserById = async (req, res) => {
  const id = req.query["id"];
  const objectId = new mongoose.Types.ObjectId(id);
  const user = await User.find({ _id: objectId });
  res.status(200).json(user);
}

const getUserByEmail = async (req, res) => {
  const _email = req.query["email"];
  const user = await User.find({ email: _email });
  res.status(200).json(user);
};

const register = async (req, res) => {

  const { name, email } = req.body;
  // Check if user already exists
  //   const doesExist = await User.exists({ email: req.body.email });
  const doesExist = await User.exists({ email });
  if (doesExist) {
    res.sendStatus(200);
  } else {
    // const newUser = new User({ name: req.body.name, email: req.body.email });
    const newUser = new User({ name, email });
    await newUser.save();
    res.sendStatus(200);
  }
};



module.exports = {
  getUserById,
  getUserByEmail,
  register,
}