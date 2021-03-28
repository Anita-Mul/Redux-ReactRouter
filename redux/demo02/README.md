## React-Redux
> 可以简化`redux`流程
> `React`、`Redux`、`React-redux`是三个不同的东西
> 初始化项目：`create-react-app demo02`
> 如何启动项目：`npm start`
> 安装`react-redux`：`npm install --save react-redux`
> 安装`Redux`：`npm install --save redux`

## React-redux中的Provider和connect
> `Provide`是一个提供器，只要使用了这个组件，组件里边的其它所有组件都可以使用store了
```javascript
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)
```

> connect 连接器的使用
```javascript
import {connect} from 'react-redux'  //引入连接器
```
```javascript
export default connect(xxx,null)(TodoList);
```
这里的XXX代表一个映射关系
映射关系就是把原来的state映射成组件中的`props`属性
```javascript
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue
    }
}
// 这时候再把xxx改为stateToProps
export default connect(stateToProps,null)(TodoList);

// 然后把<input>里的state标签，改为props
<input value={this.props.inputValue} />
```

第二个参数是事件处理函数集合
```javascript
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            console.log(e.target.value)
        }
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList);
```

