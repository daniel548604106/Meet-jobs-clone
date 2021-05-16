import React from 'react';
import { redirectUri, config } from '../../lib/oAuth';
import qs from 'querystring';
const SocialLogin = () => {
  const oAuthLogin = (provider) => {
    const uri = redirectUri(provider);
    const query = qs.stringify(config[provider]);
    window.location = `${uri}${query}`;
    console.log(uri, query);
  };
  return (
    <div>
      <button
        onClick={() => oAuthLogin('facebook')}
        className=" my-3  cursor-pointer hover:bg-blue-400 rounded bg-blue-700 py-2 w-full text-center text-white"
      >
        Login With Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
