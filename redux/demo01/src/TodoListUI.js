import React from 'react';
import { Input , Button , List } from 'antd';

/**
 * 采用无状态组件代码，效率要高于之前写的普通react组件
 * 就是使用函数的效率要高于类
 * 如果能做成无状态组件就尽量做成无状态组件，性能要高很多
 */
const TodoListUi = (props) => {
  return ( 
    <div style={{margin: '10px'}}>
      <div>
        <Input 
          placeholder={props.inputValue} 
          style={{ width: '250px' }} 
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        <Button type='primary' onClick={props.clickBtn}>增加</Button>
      </div>
      <div style={{margin:'10px', width:'300px'}}>
        {/* 如果不想立即执行，还想绑定函数，可以使用下面
        <List.Item onClick={this.props.deleteItem.bind(this, index)}>{item}</List.Item> */}
        <List
          bordered
          dataSource={props.list} 
          renderItem={(item, index) => (<List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>)}
        />
      </div>
    </div>
  );
}

export default TodoListUi;
