import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'

// 默认数据
const defaultState = {
  inputValue : '',
  list:[]
} 

// state指的是原始仓库里的状态
// action指的是action新传递的状态
// Reducer里只能接收state，不能改变state（所以新声明了一个变量，然后用return返回去）
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {  // 就是一个方法函数
  /**s
   * action:
   *  {type: "changeInput", value: "k"}
   */
  if(action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state)); // 深度拷贝state
    newState.inputValue = action.value;
    return newState;
  } 
  
  if (action.type === ADD_ITEM){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);  //push新的内容到列表中去
    newState.inputValue = '';
    return newState;
  }

  if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state)); 
    newState.list.splice(action.index, 1);  //push新的内容到列表中去
    return newState;
  }

  if (action.type === GET_LIST){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.data.list;
    return newState;
  }  

  return state;
}

