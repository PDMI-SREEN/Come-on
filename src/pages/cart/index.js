import Taro, { Component } from '@tarojs/taro'
import { View,Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { ClDrawer } from "mp-colorui"
import './index.scss'



@connect(({common,loading})=>({
  loading,
  common,
}))
class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show:false
    }
  }

  config = {
    navigationBarTitleText: 'cart'
  };

  drawer = () =>{
this.setState({
  show:false
})
  };
  drawers = () =>{
    this.setState({
      show:true
    })
  }

  render () {
    const { show } = this.state;
    return (
      <View className='index'>
        <AtButton type='primary'>cart</AtButton>
        <Button onClick={this.drawers}>hahhahahahahh</Button>

        <ClDrawer
          show={show}
          direction='bottom'
          onCancel={this.drawer}
        >
          我是左侧抽屉
          <View className='jkjkjkj'>ahahahahhahahah</View>
        </ClDrawer>
      </View>
    )
  }
}

export default Cart
