import request from '../lib/axiosConfig';

// 社群登入

export const postOAuthLogin = (data) => {
  console.log(data);
  return request.post('/oauth/login', data);
};

// 登入
export const postLogin = (data) => {
  return request.post('/auth/login', data);
};

// 註冊
export const postSignup = (data) => {
  return request.post('/auth/signup', data);
};

// 重設 Email 發送

export const forgetPassword = (data) => {
  console.log(data);
  return request.post('/auth/password-reset', { email: data });
};
