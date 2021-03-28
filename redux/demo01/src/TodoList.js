import React, {Component} from 'react';
// 引入css样式
import 'antd/dist/antd.css';
import store from './store';
import {changeInputAction , addItemAction ,deleteItemAction, getListAction, getTodoList, getMyListAction} from './store/actionCreatores'
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    // 订阅Redux的状态
    store.subscribe(this.storeChange);
  }
  
  storeChange = () => {
    this.setState(store.getState());
  }

  componentDidMount(){
    // 如果不使用中间件
    // axios.get('https://www.fastmock.site/mock/310b5d0181ece0e7cd2383574b9567ad/anita/getList').then((res) => {
    //   const data = res.data;
    //   const action = getListAction(data);
    //   store.dispatch(action);
    // });

    // 如果使用Redux-chunk中间件
    // const action = getTodoList();
    // store.dispatch(action);

    // 如果使用Redux-saga中间件
    const action = getMyListAction();
    store.dispatch(action);
    console.log(action);
  }

  changeInputValue = (e) => {
    changeInputAction(e.target.value);
  }

  clickBtn = () => {
    // 当点击添加按钮的时候，说明这个值就在inputValue里存着呢！
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem = (index) => {
    const action = deleteItemAction(index)
    store.dispatch(action)
  };

  render() { 
    return ( 
      <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
      />
    );
  }
}

export default TodoList;
