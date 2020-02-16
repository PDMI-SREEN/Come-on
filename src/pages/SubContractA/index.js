
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton,AtNavBar,AtNoticebar } from 'taro-ui'
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
    // navigationBarTitleText: '首页'
    navigationStyle: 'custom',
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
  handleClick=()=>{
    console.log('4444')
      Taro.navigateBack()
  }

  render () {
    const { common } = this.props;
    const { num ,oneData} = common||{};
    const style = {
          paddingTop: Taro.$navBarMarginTop + 'px'
    }
    return (

      <View className='index' style={style}>
        <AtNavBar
          // onClickRgIconSt={this.handleClick}
          // onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color='#000'
          title='NavBar 导航栏示例'
          leftText='返回'
          leftIconType={'close'}
          // rightFirstIconType='bullet-list'
          // rightSecondIconType='user'
          className='ssss'
        />
        <Button className='add_btn' onClick={this.ssss}>1111分包测试 dva{num}</Button>
        <AtButton type='primary' onClick={this.ssss}>11111分包测试 dva</AtButton>
        <AtNoticebar marquee>
          这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
        </AtNoticebar>
        {
          oneData && <div>  { oneData } </div>
        }
      </View>
    )
  }
}

export default SubContractA

