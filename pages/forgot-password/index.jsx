import React from 'react';

const index = () => {
  return (
    <div className="w-screen min-h-80vh flex flex-col items-center justify-center px-5">
      <h1 className="text-2xl font-semibold">Forgot Password</h1>
      <p className="my-4 ">Fill in your registered email</p>
      <input
        placeholder="Email"
        type="text"
        className="mt-4 text-gray-600 rounded border py-4 px-4 w-full max-w-220px"
      />
      <button className="mt-5 rounded-lg bg-blue-500 text-white py-4 w-full max-w-220px">
        Send Email
      </button>
    </div>
  );
};

export default index;
