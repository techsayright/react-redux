import { createStore } from "redux";
import {Constants} from "../Constants";


const reducerList = (state={movieDetail: null}, action)=>{
    switch(action.type){
        case Constants.getMovieDetails:
            return {movieDetail: action.movieDetail}
        default:
            return state;
    }
}

const store=  createStore(reducerList);

export default store;