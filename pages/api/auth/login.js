import mongoose from 'mongoose';
import User from '../../../model/userModel';
import generateToken from '../../../utils/generateToken';
import dbConnect from '../../../utils/mongodb';
export default async function handler(req, res) {
  const { method } = req;
  const { email, password } = req.body;
  // It's important to wait for dbConnect or else data couldn't be found
  await dbConnect();
  switch (method) {
    case 'POST':
      try {
        console.log(req.body);
        const user = await User.findOne({ email });
        console.log(user);
        res.status(200).json({
          user,
          token: generateToken(user._id),
        });
      } catch (error) {
        res.status(400).json({
          message: 'invalid login',
        });
      }
  }
}
