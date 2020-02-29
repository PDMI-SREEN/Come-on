import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,SwiperItem ,Image} from '@tarojs/components'
import { AtButton,AtIcon } from "taro-ui"
import { connect } from '@tarojs/redux'
import classNames from 'classnames'
import MapChart from '../../components/MapChart'


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
      dataImge:[
        {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582973054855&di=3a5b4b64ea7c1d02982c83ac8dc84564&imgtype=0&src=http%3A%2F%2F07imgmini.eastday.com%2Fmobile%2F20200209%2F20200209202824_68a95fc286bc8680d7afe7793e113c7a_1.jpeg'},
        {url:'http://img2.imgtn.bdimg.com/it/u=2368373460,3528171984&fm=26&gp=0.jpg'},
      ],
      buttonData:[
        {title:'唐山'},
        {title:'河北'},
        {title:'全国'},
      ],
      buttonDataefaultD:'唐山',   // 默认选择程序
      getdataInfo:[], // 整体数据
      ExhibitionData:{},//展示数据
      ncovData:{} ,// 全国数据
      tianqiData:[],//天气
    }
  }

  config = {
    navigationBarTitleText: '疫情实时大数据',
    navigationBarBackgroundColor:'#1d969a',
    navigationBarTextStyle: 'white',
  };



  componentDidMount() {
    this.getdataInfo()
    const chartData = [
      { name: '郑州市', value: 100 },
      { name: '洛阳市', value: 10 },
      { name: '开封市', value: 20 },
      { name: '信阳市', value: 30 },
      { name: '驻马店市', value: 40 },
      { name: '南阳市', value: 41 },
      { name: '周口市', value: 15 },
      { name: '许昌市', value: 25 },
      { name: '平顶山市', value: 35 },
      { name: '新乡市', value: 35 },
      { name: '漯河市', value: 35 },
      { name: '商丘市', value: 35 },
      { name: '三门峡市', value: 35 },
      { name: '济源市', value: 35 },
      { name: '焦作市', value: 35 },
      { name: '安阳市', value: 35 },
      { name: '鹤壁市', value: 35 },
      { name: '濮阳市', value: 35 },
      { name: '开封市', value: 45 }
    ]
    this.mapChart.refresh(chartData);
  }

  refMapChart = (node) => this.mapChart = node;


  // 获取数据
  getdataInfo = () =>{
    const { dispatch } = this.props;
    dispatch({
      type:"common/ncovcity"
    })
      .then(res=>{
        const { newslist } = res;
        this.setState({
          getdataInfo:newslist
        },()=>{
          this.screenData('唐山')
        })
      });

    dispatch({
      type:"common/ncov"
    })
      .then(res=>{
        const {newslist} = res || {};
        this.setState({
          ncovData:newslist[0]['desc']
        })
      })

    dispatch({
      type:"common/tianqi"
    })
      .then(res=>{
        console.log(res,'qweqeqeqeqw');
        const {newslist} = res || {};
        this.setState({
          tianqiData:newslist
        })
      })
  };

  // 点击选择 不同地区

  box_button = (v) =>{
    console.log(v);
    this.setState({
      buttonDataefaultD:v,
    })
    this.screenData(v)
  };

  // 处理数据
  screenData = (cityName) =>{
    const { getdataInfo ,ncovData} = this.state;
    let HeBei =  getdataInfo.filter((ele)=> ele.provinceShortName == '河北');
    let TangShangDataa = HeBei[0]['cities'].filter((ele)=>ele.cityName == '唐山');
    let { deadCount, confirmedCount, curedCount ,currentConfirmedCount,suspectedCount} = HeBei[0];
    if(cityName === '全国'){
      let {suspectedIncr,deadIncr,confirmedIncr, currentConfirmedIncr,deadCount, confirmedCount, curedCount ,currentConfirmedCount,suspectedCount,curedIncr} = ncovData;
      this.setState({
        ExhibitionData:{
          currentConfirmedIncr,
          deadCount, confirmedCount, curedCount ,currentConfirmedCount,suspectedCount,confirmedIncr,curedIncr,deadIncr,suspectedIncr
        }
      });
      return
    }
    this.setState({
      ExhibitionData: cityName == '唐山' ? TangShangDataa[0] : {
        deadCount, confirmedCount, curedCount ,currentConfirmedCount,suspectedCount
      }
    });
  };


  render () {
    const { dataImge ,buttonData ,buttonDataefaultD,ExhibitionData,tianqiData} = this.state;
    return (
        <View className='index'>
          <Swiper
            // onChange={this.onChangeSwiper}
            className='test-h'
            indicatorColor='#D1D0D4'
            indicatorActiveColor='#7ebcfe'
            circular
            indicatorDots
            autoplay
          >
          {
            dataImge.map((ele,index)=>{
              return (
                <SwiperItem key={index}>
                  <View className='demo-text-1'>
                    <Image src={ele.url} />
                  </View>
                </SwiperItem >
              )
            })
          }
          </Swiper>
          <View className='box_box'>
            <View>
              <AtIcon value='bookmark' size='20' color='#1d969a'></AtIcon>
              <Text className='box_text'>
                城市数据
              </Text>
            </View>
            <View className='box_button'>
              {
                buttonData.map((ele,index)=>{
                  return (
                    <View
                      key={index}
                      className={classNames({
                      'box_conton':true,
                      'box_contonfaultD':buttonDataefaultD == ele.title,
                    })}
                      onClick={()=>{this.box_button(ele.title)}}
                    >
                      {ele.title}
                    </View>
                  )
                })
              }
            </View>
            <View className='content_text'>
              <View className='content_text_data'>
                <View className='text_data_color1'>
                  确诊人数
                </View>
                <View className='text_data_color2 size_text'>
                  {ExhibitionData.confirmedCount}
                </View>
                <View className='text_data_color3'>
                  {
                    buttonDataefaultD === '全国'
                    ? `较昨日 ${ExhibitionData.confirmedIncr>0?'+':''} ${ ExhibitionData.confirmedIncr  }`
                      :'共渡难关'
                  }
                </View>
              </View>
              <View className='content_text_data'>
                <View style={{color:'#1d969a'}}>
                  治愈病历
                </View>
                <View style={{color:'#1d969a'}} className='size_text'>
                  {ExhibitionData.curedCount}
                </View>
                <View style={{color:'#1d969a'}}>
                  {
                    buttonDataefaultD === '全国'
                      ? `较昨日 ${ExhibitionData.curedIncr>0?'+':''} ${ ExhibitionData.curedIncr  }`
                      :'共渡难关'
                  }
                </View>
              </View>
              <View className='content_text_data'>
                <View style={{color:'#8b869a'}}>
                  死亡病例
                </View>
                <View style={{color:'#8b869a'}} className='size_text'>
                  {ExhibitionData.deadCount}
                </View>
                <View style={{color:'#8b869a'}}>
                  {
                    buttonDataefaultD === '全国'
                      ? `较昨日 ${ExhibitionData.deadIncr>0?'+':''} ${ ExhibitionData.deadIncr  }`
                      :'共渡难关'
                  }
                </View>
              </View>
            </View>
            <View className='content_text'>
              <View className='content_text_data'>
                <View style={{color:'#9a5e8c'}}>
                  疑似病例
                </View>
                <View style={{color:'#9a5e8c'}} className='size_text'>
                  {ExhibitionData.suspectedCount}
                </View>
                <View style={{color:'#9a5e8c'}}>
                  {
                    buttonDataefaultD === '全国'
                      ? `较昨日 ${ExhibitionData.suspectedIncr>0?'+':''} ${ ExhibitionData.suspectedIncr  }`
                      :'共渡难关'
                  }
                </View>
              </View>
              <View className='content_text_data'>
                <View style={{color:'#3e649a'}}>
                  现存确诊人数
                </View>
                <View style={{color:'#3e649a'}} className='size_text'>
                  {ExhibitionData.currentConfirmedCount}
                </View>
                <View style={{color:'#3e649a'}}>
                  {
                    buttonDataefaultD === '全国'
                      ? `较昨日 ${ExhibitionData.currentConfirmedIncr>0?'+':''} ${ ExhibitionData.currentConfirmedIncr  }`
                      :'共渡难关'
                  }
                </View>
              </View>
            </View>
          </View>
          <View className='box_map'>
            <View>
              <AtIcon value='bookmark' size='20' color='#1d969a'></AtIcon>
              <Text className='box_text'>
                全国疫情数据，地图模式
              </Text>
            </View>
            <View>
              <MapChart ref={this.refMapChart} />
            </View>
          </View>

          <View className='box_box_tianqi'>
            <View>
              <AtIcon value='bookmark' size='20' color='#1d969a'></AtIcon>
              <Text className='box_text'>
                迁安实时天气预报
              </Text>
            </View>
            <View>
              {
                tianqiData.map((ele,index)=>{
                  return (
                    <View
                      key={index}
                      className={classNames({
                        'tianqi_box':true,
                        'tianqi_boxs':index == 0,
                      })}
                    >
                      <Text decode="{{true}}">{ele.date}&nbsp;&nbsp;</Text>
                      <Text decode="{{true}}">{ele.week}&nbsp;&nbsp;</Text>
                      <Text decode="{{true}}">天气{ele.weather}&nbsp;&nbsp;</Text>
                      <Text decode="{{true}}">最高气温{ele.lowest}&nbsp;&nbsp;</Text>
                      <Text decode="{{true}}">最低气温{ele.highest}&nbsp;&nbsp;</Text>
                      <Text decode="{{true}}">风向{ele.wind}&nbsp;&nbsp;</Text>
                      <Text decode="{{true}}">风力{ele.windspeed}&nbsp;&nbsp;</Text>
                    </View>
                  )
                })
              }
            </View>

          </View>

        </View>
    )
  }
}

export default Index
