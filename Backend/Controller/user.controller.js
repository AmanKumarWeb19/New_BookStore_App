import UserModel from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).send({ message: "User Already exist" });
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const createdUser = new UserModel({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });

    await createdUser.save();

    res.status(200).send({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error:-", error.message);
    res.status(500).send({ message: "Internal server Error!!!" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(400).send({ message: "Invalid userName or Password" });
    } else {
      res.status(200).send({
        message: "Login Successful",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error:-", error.message);
    res.status(500).send({ message: "Internal server Error!!!" });
  }
};
