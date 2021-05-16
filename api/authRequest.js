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
