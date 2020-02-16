import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from "taro-ui"
import { connect } from '@tarojs/redux'
import Ceshi from '../../components/ceshi'
import { consoleFunc } from '../../utils/index'

import './index.scss'


@connect(({common,loading})=>({
  loading,
  common,
}))
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // num:0
    }
  }

  config = {
    navigationBarTitleText: '首页'
  };
  // 微信授权
  componentDidMount() {
    this.login()
  }
  login = () =>{
    // return new Promise((resolve,reject) =>{
    //
    // })

    Taro.getSetting({
      success(res) {
        console.log(res,'eeeeewqwqwqwqwwqwqwq');
        if (!res.authSetting['scope.record']) {
          Taro.authorize({
            scope: 'scope.address',
            success (data) {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              // Taro.startRecord()
              console.log(data,'eeeee---');
            }
          })
        }
      }
    })
  };

  ssss=()=>{
    const { dispatch } = this.props;
    const { common } = this.props;
    const { num } = common||{};
    // console.log(1111);
    dispatch({
      type:'common/add',
      payload:{
        aa: num === 22 ? 777 : 22
      }
    });
    dispatch({
      type:'common/test',
    }).then((res)=>{

    })


  };

  navigateToFunc = ()=>{
    Taro.navigateTo({
      url: '/pages/SubContractA/index'
    })
  };




  navigateToFunc1 = ()=>{
    Taro.navigateTo({
      url: '/pages/SubContractB/index'
    })
  };

  navigateToF2 = () =>{
    Taro.navigateTo({
      url: '/pages/SubContractC/index'
    })
  };

  navigateToalendar = () =>{
    Taro.navigateTo({
      url: '/pages/SubContractD/index'
    })
  };


  logFunc = ()=>{
    console.log('222');
    console.log('222');

    consoleFunc('woca','error')
  };
  /**
   *
   * @param data {string}
   */
  setUserInfo = (data) =>{
    console.log(data);
  };

  // 父调用 子

  CeshiFuncll =()=>{
    console.log('1');
    this.Ceshi.CeshiFunc()
}
  render () {
    const { common } = this.props;
    const { num ,oneData} = common||{};

    return (
        <View className='index'>
          <Button className='add_btn' onClick={this.ssss}>点击{num}</Button>
          <AtButton className='add_btns' type='primary' onClick={this.navigateToFunc}>跳转分包1</AtButton>
          <AtButton className='add_btns' type='primary' onClick={this.navigateToFunc1}>跳转分包2</AtButton>
          <AtButton className='add_btns' type='primary' onClick={this.navigateToF2}>跳转F2</AtButton>
          <AtButton className='add_btns' type='primary' onClick={this.navigateToalendar}>跳转日历tui-calendar</AtButton>
          {
            oneData && <div> { oneData.name } { oneData.age }  { oneData.sex }  </div>
          }
          <AtButton className='add_btns' type='primary' onClick={this.logFunc}>封装 log 输出</AtButton>
          <Button className='add_btns' type='primary' onGetUserInfo={this.setUserInfo} open-type='getUserInfo'>微信授权</Button>
          <Button onClick={this.CeshiFuncll}>父调子</Button>
          <Ceshi
            onRef={(that) => {
              this.Ceshi = that
            }}
          />
        </View>
    )
  }
}

export default Index
