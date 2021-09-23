import { createSlice } from "@reduxjs/toolkit";

console.log('counter-store');
const counterSlice = createSlice({
    name: "couter",
    initialState: {
        counter: 0,
        isShow: true
    },
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter= state.counter + action.payload;
        },
        toggle(state){
            state.isShow= !state.isShow;
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer