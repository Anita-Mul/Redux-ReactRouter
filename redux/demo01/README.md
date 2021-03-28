## Redux简介
 - 用来管理数据状态和UI状态的JavaScript应用工具
 - Redux支持React，Angular、jQuery甚至纯JavaScript
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326080249844.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FuaXRhU3Vu,size_16,color_FFFFFF,t_70)

## 初始化项目
 - 如果没有安装脚手架：`npm install -g create-react-app`
 - 创建项目：create-react-app name
 - 预览项目：npm start
 - 删除SRC里面的所有文件，只保留index.js，且清空index.js

## 安装AntDesign
 - 类似于bootstrap
 - `npm install antd --save`
 - 引入css样式：`import 'antd/dist/antd.css'`

## 安装Redux
 - `npm install --save redux`

## 安装Redux Dev Tools
 - 在Chrome网上应用商店安装`Redux DevTools`
 - 配置`Redux Dev Tools`
   在store -> index.js 中添加：`const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())`
 - 在控制台可以看到Redux标签，里面储存着store里的数据

## Redux-thunk中间件的安装和配置
 - 比如在`Dispatch`一个`Action`之后，到达`reducer`之前，进行一些额外的操作，就需要用到`middleware`（中间件）
 - 在实际工作中你可以使用中间件来进行日志记录、创建崩溃报告，调用异步接口或者路由
 - `Redux-thunk`就是对Redux中`dispatch`的加强
 - 安装：`npm install --save redux-thunk`
 - 配置`Redux-thunk`组件
   引入`applyMiddleware`: `import { createStore , applyMiddleware } from 'redux' `
   引入`redux-thunk`库: `import thunk from 'redux-thunk'`
   引入`compose`库来使用增强函数: `import { createStore , applyMiddleware ,compose } from 'redux' `
   利用`compose`创造一个增强函数`const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose`
  引入`thunk`，两个函数都会执行: `const enhancer = composeEnhancers(applyMiddleware(thunk))`
  将`enhancer`加入`createStore`的第二个参数: `const store = createStore( reducer, enhancer) // 创建数据存储仓库`

## Redux-thunk的使用方法
 - 使用`Redux-thunk`，可以把`TodoList.js`中的`componentDidMount`业务逻辑（后台请求数据）放到这里（`actionCreators.js文件`）来编写

## Redux-saga
> https://github.com/redux-saga/redux-saga
> 这里讲的中间件不是`React`的中间件，而是`Redux`的中间件
 - 安装: `npm install --save redux-saga`
 - 查看store/index.js 文件，进行配置
 - `redux-saga`希望你把业务逻辑单独写成一个文件（`/src/store/sagas.js`）
 - 创建好以后直接引入到`index.js`里: `import mySagas from './sagas'`
 - 增加run方法: `sagaMiddleware.run(mySagas)`

## 用Redux-saga获取TodoList列表
> 编写`actionCreators.js`，`actionTypes.js`，修改`TodoList.js`中的`componentDidMount`，`sagas.js`文件

## 感悟：
1. store只是一个仓库，并没有管理能力，它会把接收到的`action`自动转发给`Reducer`