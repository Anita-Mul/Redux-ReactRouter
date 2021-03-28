// 用saga的中间件业务逻辑，就都写在这个sagas.js文件里，文件里我们用mySaga来作为入口函数。在入口函数中捕获传递过来的action类型，根据类型不同调用不同的方法。
import { takeEvery, put } from 'redux-saga/effects';  
import {GET_MY_LIST} from './actionTypes';
import {getListAction} from './actionCreatores';
import axios from 'axios';


//generator函数
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    //这段代码我就不删除了。
    // axios.get('https://www.fastmock.site/mock/310b5d0181ece0e7cd2383574b9567ad/anita/getList').then((res)=>{
    //     const data = res.data
    //     const action = getListAction(data)
    //     put(action)
    // })
    const res = yield axios.get('https://www.fastmock.site/mock/310b5d0181ece0e7cd2383574b9567ad/anita/getList')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySaga;