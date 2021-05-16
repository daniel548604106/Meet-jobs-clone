import React, { useState } from 'react';
import { apiForgetPassword } from '../../api/index';
const index = () => {
  const [email, setEmail] = useState('');
  const sendEmail = async () => {
    try {
      console.log('123', email);
      const res = await apiForgetPassword(email);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-screen min-h-80vh flex flex-col items-center justify-center px-5">
      <h1 className="text-2xl font-semibold">Forgot Password</h1>
      <p className="my-4 ">Fill in your registered email</p>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="text"
        className="mt-4 text-gray-600 rounded border py-4 px-4 w-full max-w-300px"
      />
      <button
        onClick={() => sendEmail()}
        className="mt-5 rounded-lg bg-blue-500 text-white py-4 w-full max-w-300px"
      >
        Send Email
      </button>
    </div>
  );
};

export default index;
