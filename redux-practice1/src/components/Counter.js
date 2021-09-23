import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    console.log('counter');
    const dispatch = useDispatch()
    const counter=useSelector(state => state.counter);
    const isShow=useSelector(state => state.isShow);
    return (
        <div>
            {isShow && <h1>{counter}</h1>}
            <button onClick={()=>dispatch({type: 'increment'})}>Increment</button> &nbsp;
            <button onClick={()=>dispatch({type: 'decrement'})}>Decrement</button> <br /><br />
            <button onClick={()=>dispatch({type: 'toggle'})}>Toggle</button>
        </div>
    )
}
