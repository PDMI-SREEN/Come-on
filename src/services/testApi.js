
import Request from '../utils/request';

export const gettest = data =>
  Request({
    url: '/users/one',
    method: 'GET',
    // data,
  });
