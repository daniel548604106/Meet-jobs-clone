import mongoose from 'mongoose';
import User from '../../../model/userModel';
import dbConnect from '../../../utils/mongodb';
import bcryptjs from 'bcryptjs';
export default async function handler(req, res) {
  const { method } = req;
  const { email, password } = req.body;
  await dbConnect();
  switch (method) {
    case 'POST':
      try {
        console.log(email, password);
        // Check if user exists
        const user = await User.findOne({ email });
        if (user) {
          res.status(400).json({
            message: 'This email has already been registered',
          });
        }

        // Save to DB
        const newUser = await User.save({
          email,
          password,
        });

        res.status(200).json({
          user: newUser,
          token: generateToken(newUser._id),
        });
      } catch (error) {
        res.status(400).json({
          message: error,
        });
      }
  }
}
