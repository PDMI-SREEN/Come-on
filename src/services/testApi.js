
import Request from '../utils/request';

import { stringify } from 'qs';
export const ncovcity = data =>
  Request({
    url: `txapi/ncovcity/index`,
    method: 'GET',
    data,
  });


export const ncov = data =>
  Request({
    url: `txapi/ncov/index`,
    method: 'GET',
    data,
  });

export const tianqi = data =>
  Request({
    url: `txapi/tianqi/index?city=迁安`,
    method: 'GET',
    data,
  });
