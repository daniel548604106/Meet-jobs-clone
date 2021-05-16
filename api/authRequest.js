import request from '../lib/axiosConfig';

// 社群登入

export const postOAuthLogin = (data) => {
  console.log(data);
  return request.post('/oauth/login', data);
};
