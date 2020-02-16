
import Taro, { Component } from '@tarojs/taro'
import {Button, View} from '@tarojs/components'

import { connect } from '@tarojs/redux'



@connect(({common,loading})=>({
  loading,
  common,
}))
class Ceshi extends Component {
  constructor (props) {
    super(props)
    this.state = {
       num:0
    }
  }

componentDidMount() {
  this.props.onRef && this.props.onRef(this);
}

  CeshiFunc = () =>{
    console.log('e') ;
    const { num } = this.state
    this.setState({
      num:num +1
    })
  };


  qingchu = () =>{
    this.setState({
      num:0
    })
  };

  render () {
    const { common } = this.props;
    const { num } = this.state;

    return (
      <View className='indexssss'>
      父调子{num}
        <Button onClick={this.qingchu}>清除状态</Button>
      </View>
    )
  }
}

export default Ceshi

