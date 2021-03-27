import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[
        {cid:123,title:'技术胖的个人博客-1'},
        {cid:456,title:'技术胖的个人博客-2'},
        {cid:789,title:'技术胖的个人博客-3'},
      ]
    } 
    // 编程式重定向
    this.props.history.push("/home/"); 
  }
  render() { 
    return (
      <ul>
        {/* 标签式重定向 */}
        {/* <Redirect to="/home/" /> */}
        {
          this.state.list.map((item, index) => {
            return (
              <li key = {index}>
                <Link to={'/list/' + item.cid}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default Index;