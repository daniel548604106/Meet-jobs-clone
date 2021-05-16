import dbConnect from '../../../utils/mongodb';
import User from '../../../model/userModel';
import qs from 'querystring';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import generateToken from '../../../utils/generateToken';
export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case 'POST':
      try {
        // 利用拿到的 code 去換取 access token
        const { provider, code } = req.body;
        //Facebook
        const facebook_url = `https://graph.facebook.com/v9.0/oauth/access_token?`;
        const facebook_query = {
          client_id: process.env.FACEBOOK_CLIENT_ID,
          redirect_uri: process.env.FACEBOOK_URI,
          client_secret: process.env.FACEBOOK_CLIENT_SECRET,
          code,
        };

        // 1) Get Access token
        const {
          data: { access_token },
        } = await axios.get(`${facebook_url}${qs.stringify(facebook_query)}`);
        // 2) Get User Info using access_token and fields specified
        const access_token_url = `https://graph.facebook.com/me?access_token=${access_token}&fields=name,email,picture`;
        const {
          data: {
            email,
            name,
            picture: {
              data: { url },
            },
            id,
          },
        } = await axios.get(access_token_url);
        // 3) Check if user exists in DB
        const user = await User.findOne({ email });
        if (!user) {
          const newUser = await User.create({ email, name, picture: url });
          const token = generateToken(newUser._id);
          return res.status(200).json({
            token,
            user: newUser,
          });
        }
        const token = generateToken(user._id);
        res.status(200).json({
          token,
          user,
        });
      } catch (error) {
        console.log('nope', error);
      }
  }
}
