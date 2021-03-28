import React from 'react';
import {connect} from 'react-redux'  //引入连接器

const TodoList = (props)=>{
  let {inputValue ,inputChange,clickButton,list} = props; // 粘贴过来后，此处要进行修改
  return (
    <div>
      <div>
          <input value={inputValue} onChange={inputChange} />
          <button onClick={clickButton}>提交</button>
      </div>
      <ul>
          {
              list.map((item,index)=>{
                  return (<li key={index}>{item}</li>)
              })
          }
      </ul>
    </div>
  );
}

// 映射关系就是把原来的state映射成组件中的props属性
// state就相当于之前注入到Provider里的store
const stateToProps = (state)=>{
  return {
      inputValue : state.inputValue,
      list: state.list
  }
}

// 通过这个参数才可以改变store中的值
const dispatchToProps = (dispatch) =>{
  return {
    inputChange(e){
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action);
    },
    clickButton(){
      let action = {
        type: 'add_item',
      }
      dispatch(action);
    }
  }
}

// connect的作用是把UI组件（无状态组件）和业务逻辑代码的分开，然后通过connect再链接到一起
export default connect(stateToProps, dispatchToProps)(TodoList);