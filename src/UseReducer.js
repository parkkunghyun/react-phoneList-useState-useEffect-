import React, { useState,useReducer } from 'react'

const reducer = (state, action) => {
    console.log('reducer start', state, action)
    switch(action.type) {
        case 'PLUS':
            return state +1
        case 'MINUS':
            return state -1
        default:
            return state 
    }
}

const UseReducer = () => {
    //const [count,setCount] = useState(0)
    const [count, dispatch] = useReducer(reducer, 0)

    const plus = ()=> {
        //setCount(count + 1)
        dispatch({type: 'PLUS'})
    }
    const minus = () => {
        //setCount(count -1)
        dispatch({type: 'MINUS'})
    }
  return (
    <div style={{textAlign: 'center'}}>
        <h1>{count}</h1>
        <button onClick={plus}>더하기</button>
        <br/>
        <br/>
        <button onClick={minus}>빼기</button>
    </div>
  )
}

export default UseReducer