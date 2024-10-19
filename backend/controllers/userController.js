import User from "../models/User.js";

//create new User

export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

//update User
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      sucess: true,
      message: "sucessfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "failed to update",
    });
  }
};

//delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      sucess: true,
      message: "sucessfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "failed to delete",
    });
  }
};

//getSingle User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const User = await User.findById(id);

    res.status(200).json({
      sucess: true,
      message: "sucessfull",
      data: User,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: "not found",
    });
  }
};

//getAll User
export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});

    res.status(200).json({
      success: true,
      message: "Sucessful",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: "not found",
    });
  }
};
