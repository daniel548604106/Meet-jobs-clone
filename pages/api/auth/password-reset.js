import dbConnect from '../../../utils/mongodb';
import User from '../../../model/userModel';
import { sendPasswordReset } from '../../../utils/sendEmail';
export default async function handler(req, res) {
  const { method } = req;
  const { email } = req.body;
  await dbConnect();
  switch (method) {
    case 'POST':
      try {
        await sendPasswordReset();
        // const user = await User.findOne({ email });
        // console.log('user', user);
        // if (user) {
        //   sendPasswordReset();
        // }
        res.status(200).json({
          message: 'reset email sent',
        });
        console.log('hi', req.body);
        console.log(email, 'sds');
      } catch (error) {
        res.status(400).json({
          message: 'email not sent',
        });
      }
  }
}
