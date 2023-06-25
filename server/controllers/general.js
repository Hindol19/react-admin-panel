import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    //Taking id from parameter
    const { id } = req.params;
    //Finding user by ID from the user-database
    const user = await User.findById(id);
    //Sending status code 200 if no error and returning the user
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
