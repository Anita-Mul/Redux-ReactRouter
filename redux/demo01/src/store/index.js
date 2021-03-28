import { createStore, applyMiddleware, compose } from 'redux';  // 引入createStore方法
import reducer from './reducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'   //引入saga
import mySagas from './sagas';

// ————————————————————————————————————————————————————————————————————————————
/**
 * 配置redux-thunk的方法
 */
// 加了这句话的意思就是看window里有没有这个方法，有则执行这个方法
// 利用compose创建了一个增强函数
// const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));
// 这里声明了一个store，之后整个应用都在使用这个store
// const store = createStore( reducer, enhancer) // 创建数据存储仓库

// ————————————————————————————————————————————————————————————————————————————
/**
 * 配置redux-saga的方法
 * 声明的先后顺序就是按照下面，千万不敢更改顺序，要不就会造成错误
 */
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore( reducer, enhancer) 
sagaMiddleware.run(mySagas)

// ————————————————————————————————————————————————————————————————————————————


export default store;                         //暴露出去

/**
 * store必须是唯一的，多个store是坚决不允许的，只能有一个store空间
 * 只有store能改变自己的内容，Reducer不能改变
 * Reducer必须是纯函数
 *  纯函数：如果函数的调用参数相同，则永远返回相同的结果，它不依赖于程序执行期间函数外部
 *          任何状态或数据的变化，必须只依赖于其输入参数
 */