import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <h2>List Page</h2> );
    }
    //-关键代码---------start
    /**
     * this.props.match
     * {
     *    path: "/list/:id",
     *    url: "/list/123",
     *    params: { id: "123"},
     * }
     */
    componentDidMount(){
        console.log(this.props.match)
    }
    //-关键艾玛---------end
}

export default List;