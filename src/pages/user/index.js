import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'


import { F2Canvas } from 'taro-f2'
import { fixF2 } from 'taro-f2/dist/weapp/common/f2-tool.ts'
import F2 from '@antv/f2'

import { add, minus, asyncAdd } from '@/actions/counter'


@connect(({common,loading})=>({
  loading,
  common,
}))
class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  config = {
    navigationBarTitleText: 'User'
  };

  render () {
    const { common } = this.props;
    const { num ,oneData} = common||{};

    return (
      <View className='index'>
        <AtButton type='primary'>User</AtButton>
      </View>
    )
  }
}

export default User
