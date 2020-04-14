import Taro, { Component } from "@tarojs/taro";
import * as echarts from "./ec-canvas/echarts";
import { View, Button, Text,SwiperItem ,Image} from '@tarojs/components'

import geoJson from './mapData';

function setChartData(chart, data) {
  echarts.registerMap('map', geoJson);
  let option = {
    tooltip: {
      trigger: 'item',
      position:'top',
      formatter:function (v) {
        console.log(v,'vvvvvvv');
        let res = v.data;
        return "城市："+ res.name +"\n确诊人数：" + res.confirmedCount + "\n治愈病历：" + res.curedCount +
          "\n死亡病例：" + res.deadCount

      },
      textStyle:{
        color:"#62e071",
        fontSize:20,
      },
    },
    //左侧小导航图标
    visualMap: {
      show : false,
      x: 'left',
      y: 'top',
      splitList: [
        {start: 500, end:100000},{start: 400, end: 500},
        {start: 300, end: 400},{start: 200, end: 300},
        {start: 100, end: 200},{start: 0, end: 100},
      ],
      color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
    },
    // visualMap: {
    //   min: 0,
    //   max: 100,
    //   left: 'left',
    //   top: 'bottom',
    //   calculable: true,
    //   show: false
    // },
    series: [{
      type: 'map',
      mapType: 'map',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: '#62e071',
          areaColor: '#fff',
        },
        emphasis: {
          areaColor: '#1d969a',
          borderWidth: 0
        }
      },
      animation: false,
      data: data
    }],
  };
  chart.setOption(option);
}

export default class MapChart extends Component {
  config = {
    usingComponents: {
      "ec-canvas": "./ec-canvas/ec-canvas"
    }
  };

  constructor(props) {
    super(props);
  }

  state = {
    ec: {
      lazyLoad: true
    }
  };


  refresh(data) {
    this.Chart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setChartData(chart, data);
      return chart;
    });
  }

  refChart = node => (this.Chart = node);

  render() {
    return (
      <ec-canvas
        ref={this.refChart}
        canvas-id="mychart-area"
        ec={this.state.ec}
      />
    );
  }
}
