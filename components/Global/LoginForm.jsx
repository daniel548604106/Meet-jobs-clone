import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SocialLogin from './SocialLogin';
import { apiPostLogin, apiPostSignup } from '../../api/index';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUserLogIn } from '../../redux/actions/userAction';

const LoginForm = ({ title, action }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [authErrorMsg, setAuthErrorMsg] = useState('');
  const checkLocation = () => {
    let location = window.location.pathname;
    location.includes('log-in') ? router.push('/sign-up') : router.push('/log-in');
  };

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const createAuth = async (method) => {
    switch (method) {
      case 'signup':
        try {
          console.log('signup');
          const { data } = await apiPostSignup(loginData);
          console.log(data);
        } catch (error) {
          setAuthErrorMsg(error.response.data.message);
          setIsError(true);
        }
      case 'login':
        try {
          const {
            data: { user, token },
          } = await apiPostLogin(loginData);
          Cookie.set('token', token);
          dispatch(setUserLogIn(user));
          router.push('/');
        } catch (error) {
          setIsError(true);
        }
    }
  };

  return (
    <div className="flex items-center justify-center  min-h-70vh p-10 sm:p-20 ">
      <div className="w-full max-w-350px ">
        <h1 className="text-xl sm:text-3xl md:text-3xl text-gray-900 font-semibold mb-10 text-center">
          {title}!
        </h1>
        <p className={`text-center mb-4 text-sm text-red-500  ${!isError && 'invisible'}`}>
          {authErrorMsg || 'Invalid email or password, please try it once again'}
        </p>
        <input
          type="text"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          placeholder="Email address"
          className="focus:border-blue-500 transition-all duration-300 border p-3 rounded-lg mb-3 w-full"
        />
        <input
          type="password"
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          placeholder="Password"
          className="focus:border-blue-500 transition-all duration-300 border p-3 rounded-lg mb-5 w-full"
        />
        <button
          onClick={() =>
            createAuth(window.location.pathname.includes('sign-up') ? 'signup' : 'login')
          }
          className="py-3 w-full rounded bg-blue-500 text-white hover:opacity-80 mb-10"
        >
          {action}
        </button>
        <button
          onClick={() => router.push('/forgot-password')}
          className={`  text-blue-500 mb-5 text-center w-full ${
            !window.location.pathname.includes('log-in') && 'hidden'
          }`}
        >
          Forget Password
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
