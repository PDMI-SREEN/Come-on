import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
// import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
// import "mp-colorui/dist/style/index.scss";
import "mp-colorui/dist/style/components/avatar.scss";
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import dva from "./utils/dva";
import models from './models/index'
// import './weui-miniprogram/weui-wxss/dist/style/weui.wxss';

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

// const store = configStore();

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

Taro.getSystemInfo({})
  .then(res  => {
      Taro.$navBarMarginTop =  res.statusBarHeight || 0
   })
class App extends Component {

  // config = {
  //   pages: [
  //     'pages/index/index'
  //   ],
  //   window: {
  //     backgroundTextStyle: 'light',
  //     navigationBarBackgroundColor: '#fff',
  //     navigationBarTitleText: 'WeChat',
  //     navigationBarTextStyle: 'black'
  //   }
  // }
  config = {
    pages: [
      'pages/index/index',
      'pages/cart/index',
      'pages/user/index',
    ],
    // subpackages:[
    //   {
    //     'root':'pages/SubContractA',
    //     'pages': [
    //       'index',
    //     ]
    //   },
    //   {
    //     'root':'pages/SubContractB',
    //     'pages': [
    //       'index',
    //     ]
    //   },
    //   {
    //     'root':'pages/SubContractC',
    //     'pages': [
    //       'index',
    //     ]
    //   },
    //   {
    //     'root':'pages/SubContractD',
    //     'pages': [
    //       'index',
    //     ]
    //   }
    // ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '小程序',
      navigationBarTextStyle: 'black',
    },
    // tabBar: {
    //   list: [
    //     {
    //       pagePath: 'pages/index/index',
    //       text: '主包1',
    //       // iconPath: '',
    //       // selectedIconPath: '',
    //     },
    //     {
    //       pagePath: 'pages/cart/index',
    //       text: '主包2',
    //       // iconPath: '',
    //       // selectedIconPath: '',
    //     },
    //     {
    //       pagePath: 'pages/user/index',
    //       text: '主包3',
    //       // iconPath: '',
    //       // selectedIconPath: '',
    //     },
    //   ],
    //   color: '#8A2BE2',
    //   selectedColor: '#7FFFD4',
    //   backgroundColor: '#fff',
    //   borderStyle: 'black',
    // },

  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
