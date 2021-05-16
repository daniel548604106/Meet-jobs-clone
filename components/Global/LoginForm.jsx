import { useRouter } from 'next/router';
import SocialLogin from './SocialLogin';
import React, { useEffect } from 'react';

const LoginForm = ({ title, action }) => {
  const router = useRouter();

  const checkLocation = () => {
    let location = window.location.pathname;
    location.includes('log-in') ? router.push('/sign-up') : router.push('/log-in');
  };

  return (
    <div className="flex items-center justify-center  min-h-70vh p-10 sm:p-20 ">
      <div className="w-full max-w-350px ">
        <h1 className="text-xl sm:text-3xl md:text-3xl text-gray-900 font-semibold mb-10 text-center">
          {title}!
        </h1>
        <input
          type="text"
          placeholder="Email address"
          className="focus:border-blue-500 transition-all duration-300 border p-3 rounded mb-3 w-full"
        />
        <input
          type="text"
          placeholder="Password"
          className="focus:border-blue-500 transition-all duration-300 border p-3 rounded mb-3 w-full"
        />
        <button className="py-3 w-full rounded bg-blue-500 text-white hover:opacity-80 mb-10">
          {action}
        </button>
        <hr className="mb-8" />
        <SocialLogin />

        <p className="text-gray-400 text-sm mb-5">
          By continuing, you agree to our{' '}
          <span
            onClick={() => router.push('/privacy-and-terms?type=user-agreement')}
            className="mx-1 hover:underline text-blue-500 cursor-pointer font-semibold"
          >
            User Agreement
          </span>
          and acknowledge our
          <span
            onClick={() => router.push('/privacy-and-terms?type=privacy-policy')}
            className="mx-1 hover:underline text-blue-500 cursor-pointer font-semibold"
          >
            Privacy Policy
          </span>
          .
        </p>
        <hr className="mb-5" />
        <p className="text-gray-600 text-center">
          {action === 'Sign up' ? `Already have an account ? ` : `Don't have an account ?`}{' '}
          <span onClick={() => checkLocation()} className="text-blue-500 cursor-pointer">
            {action === 'Sign up' ? 'Log in ' : 'Sign up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
