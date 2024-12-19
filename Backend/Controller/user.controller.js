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

    res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    console.log("Error:-", error.message);
    res.status(500).send({ message: "Internal server Error!!!" });
  }
};

export const login = async (req, res) => {};
