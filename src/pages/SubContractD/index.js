
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCalendar , AtForm ,AtInput , AtButton } from "taro-ui"
import { ClSwiper } from "mp-colorui";
import './index.scss'


@connect(({common,loading})=>({
  loading,
  common,
}))
class SubContractD extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ClickvalueTime:'点击输出日期',
      LongClickvalueTime:'长按时萨达所大大大多撒间展示日期',
      value:'',
      fileList:[{
        url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/video/spyuzaoqian.mp4',
        type: 'video',
        controls: true,
        autoplay: false,
        showPlayBtn: true,
        title: '烬天玉藻前',
        muted: false,
      }]
    }
  }

  config = {
    navigationBarTitleText: 'tui-calendar',

    };



    // 点击日期时候触发

    onDayClickFunc = (a)=>{
      console.log(a,'onDayClickFunc-----');
      this.setState({
      ClickvalueTime:a.value
    })
  }


  // 点击日期时候触发

  onDayLongClickFunc = (a)=>{
    console.log(a,'onDayClickFunc--ssss---');
    this.setState({
      LongClickvalueTime:a.value
    })
    };

    handleChange (value) {
      this.setState({
      value
    })
  }
  onSubmit (event) {
    console.log(event)
  }
  onReset (event) {
    console.log(event)
  }

  ssssss = (lll) =>{
    console.log(lll);
  }

  render () {
    const { common } = this.props;
    const { ClickvalueTime , LongClickvalueTime ,fileList} = this.state;
    const { num ,oneData} = common||{};

    return (
      <View className='indexssss'>
       日历demo
        <AtCalendar
          onDayClick={ this.onDayClickFunc}
          onDayLongClick={this.onDayLongClickFunc}
        />

        <View>
          {ClickvalueTime}
        </View>
        <View>
          {LongClickvalueTime}
        </View>
        <View>
          <ClSwiper
            type='card'
            list={fileList} circular
            onClick={()=>{this.ssssss()}}
          />
        </View>


      </View>
    )
  }
}

export default SubContractD

