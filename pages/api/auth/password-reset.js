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
        console.log(req.body, req.headers.referer.split(':')[0], req.headers.host);
        const resetURL = `${req.headers.referer.split(':')[0]}://${
          req.headers.host
        }/reset-password`;
        console.log(resetURL);
        const user = await User.findOne({ email });
        console.log('user', user);
        if (!user) {
          return res.status(400).json({
            message: 'This email has not been registered, please sign up!',
          });
        }

        await sendPasswordReset(email, resetURL);
        res.status(200).json({
          message: 'reset email sent',
        });
      } catch (error) {
        res.status(400).json({
          message: 'email not sent',
        });
      }
  }
}
