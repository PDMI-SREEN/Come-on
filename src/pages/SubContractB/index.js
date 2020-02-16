
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import './index.scss'


@connect(({common,loading})=>({
  loading,
  common,
}))
class SubContractA extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // num:0
    }
  }

  config = {
    navigationBarTitleText: '首页'
  };


  ssss=()=>{
    const { dispatch } = this.props;
    const { common } = this.props;
    const { num } = common||{};
    dispatch({
      type:'common/add',
      payload:{
        aa: num === 22 ? 777 : 22
      }
    });

    dispatch({
      type:'common/test',
    }).then((res)=>{
      console.log(res,'qwqwqwqwsjkah----');
    })
  };


  render () {
    const { common } = this.props;
    const { num ,oneData} = common||{};

    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.ssss}>1111分包测试 dva{num}</Button>
        <AtButton type='primary' onClick={this.ssss}>11111分包测试 dva</AtButton>
        {
          oneData && <div>  { oneData } </div>
        }
      </View>
    )
  }
}

export default SubContractA

