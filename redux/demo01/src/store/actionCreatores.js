import {CHANGE_INPUT , ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST}  from './actionTypes';
import axios from 'axios';

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM,
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

/**
 * 这里使用的是redux chunk中间件，所以会多出一个dispatch属性
 */
export const getTodoList = () => {
    // 这个函数可以直接传递dispatch过去，是自动的
    return (dispatch)=>{
        axios.get('https://www.fastmock.site/mock/310b5d0181ece0e7cd2383574b9567ad/anita/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}

/**
 * 使用redux-saga中间件
 */
export const getMyListAction = () => ({
    type: GET_MY_LIST,
})
