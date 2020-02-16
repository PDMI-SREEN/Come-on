import Taro from '@tarojs/taro';

import * as test from '../services/testApi';
export default {
  namespace: 'common',
  state: {
    // access_token: Taro.getStorageSync('access_token'),
    num:22,
    oneData:null,
  },

  effects: {
    *test({ payload }, { put, call }) {
      const response = yield call(test.gettest, payload);
      // console.log(payload)
      console.log(response,'ahushdasudhua');
      if(response){
        yield put({
          type:'save',
          payload:{
            oneData: response
          }
        })
      }
      return response

    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },

    add(state,{ payload }){
      return {
        ...state,
        num: payload.aa
      };
    },


  },
};
