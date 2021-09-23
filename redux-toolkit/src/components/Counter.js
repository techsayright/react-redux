import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../redux-store/counter-store';

export default function Counter() {
    console.log('counter');
    const dispatch = useDispatch()
    const counter=useSelector(state => state.counter.counter);
    const isShow=useSelector(state => state.counter.isShow);
    return (
        <div>
            {isShow && <h1>{counter}</h1>}
            <button onClick={()=>dispatch(counterActions.increment())}>Increment</button> &nbsp;
            <button onClick={()=>dispatch(counterActions.increase(10))}>Increase</button> &nbsp; 
            {/* {type: unique auto , payload: 10} */}
            <button onClick={()=>dispatch(counterActions.decrement())}>Decrement</button> <br /><br />
            <button onClick={()=>dispatch(counterActions.toggle())}>Toggle</button>
        </div>
    )
}
