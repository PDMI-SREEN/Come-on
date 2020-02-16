import Taro from '@tarojs/taro'
import moment from 'moment';

// 封装 输出日志   // 由于 小程序的输出日志是编译后的输出，与当前代码行数不能对应。


// 设备信息备注
// brand	手机品牌
// model	手机型号
// system	操作系统版本
// pixelRatio	设备像素比
// screenWidth	屏幕宽度
// screenHeight	屏幕高度
// windowWidth	可使用窗口宽度
// windowHeight	可使用窗口高度
// version	微信版本号
// statusBarHeight	状态栏的高度
// platform	客户端平台
// language	微信设置的语言
// fontSizeSetting	用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px
// SDKVersion	客户端基础库版本

/**
 *
 * @param  data  输出的数据
 * @param { string } TypeBuilder 输出类型
 * @param {{}} deviceInfo  想要的获得的数据信息 可不传
 */
export function consoleFunc(log,TypeBuilder='log') {
  // 封装
  // 获取 用户设备信息
  let deviceInfos = Taro.getSystemInfoSync();
  // let device = JSON.stringify(deviceInfos);
  const dataInfo = {
    'time':moment().format('YYYY-MM-DD HH:mm:ss'),
    'log':log,
    'getSystemInfoSync':{...deviceInfos},
  };
  if(TypeBuilder === 'log'){
    console.log(dataInfo);
  }else if(TypeBuilder === 'error'){
    console.error(dataInfo);
  }
}



