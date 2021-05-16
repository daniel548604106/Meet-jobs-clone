import React from 'react';

const index = () => {
  return (
    <div className=" flex items-center justify-center flex-col w-screen min-h-80vh">
      <h1 className="text-2xl">Reset Password</h1>
      <input
        type="text"
        placeholder="New Password"
        className="py-4 px-4 mt-5 rounded-lg border w-full max-w-300px"
      />
      <button className="mt-5 text-white bg-blue-500 rounded-lg py-4 max-w-300px w-full">
        Reset
      </button>
    </div>
  );
};

export default index;
