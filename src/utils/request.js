import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from '../config/config';

const request_data = {  //   公共 参数
  // platform: 'wap',
  // rent_mode: 2,
};



export default (options = { method: 'GET', data: {} }) => {
  if (!noConsole) {  // 是否 开启 日志
    console.log(
      `${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(
        options.data
      )}`
    );
  }
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...request_data,
      ...options.data,
    },
    header: {
      'Content-Type': 'application/json',
      'toke':'jkjk'
    },
    method: options.method.toUpperCase(),
  }).then(res => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(
          `${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,
          res.data
        );
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
    .catch((err)=>{
      console.error(err);
    })
};
