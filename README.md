###taro项目架子基本要求

* request封装
* dva引入
* UI框架的选型

* 修改启动 命令 start npm run start
* 建立项目基本文件夹
* 设置@/引用文件别名 config - index.js || alias:{}
* 安装  --save dva-core dva-loading
* utils建立 dva.js 配置
* 安装 sass 解析
* 更改 taro ui 按需 加载，参考 index文件 or SubContractA文件夹 
* taro 按需加载组件 地址文档   https://github.com/NervJS/taro-ui/tree/dev/src/style/components
* 增加第三方辅助 mp-colorui    官网  https://yinliangdream.github.io/mp-colorui-doc/home/quick.html#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8
* 两个 ui 嵌套使用时注意冲突问题，测试无发现冲突。开发时尽量避免一个组件使用两套ui
* 安装 moment.js
* 简单封装 控制台打印
