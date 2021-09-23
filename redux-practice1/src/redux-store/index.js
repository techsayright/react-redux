import { createStore } from "redux";

const counterReducer = (state={counter : 0, isShow: true} , action) =>{
    switch(action.type){
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'toggle':
            return {
                ...state,
                isShow: !state.isShow
            };
        default:
            return state;
    }
}

const store = createStore(counterReducer)

export default store;