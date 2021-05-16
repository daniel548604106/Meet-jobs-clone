import React, { useEffect } from 'react';
import { apiPostOAuthLogin } from '../../api/index';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setUserLogIn } from '../../redux/actions/userAction';
import Cookie from 'js-cookie';
const provider = () => {
  const router = useRouter();
  const provider = router.query.provider;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(provider, router.query);
    const { code } = router.query;
    const postOauthLogin = async () => {
      try {
        const { data } = await apiPostOAuthLogin({ provider, code });
        console.log(data);
        dispatch(setUserLogIn(data.user));
        Cookie.set('token', data.token);
        router.push('/');
      } catch (error) {
        console.log(error);
        router.push('/');
      }
    };
    postOauthLogin();
  }, [router]);
  return <div className="w-screen min-h-60vh ">登入轉跳中...</div>;
};

export default provider;
