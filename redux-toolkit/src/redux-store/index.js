import { configureStore} from '@reduxjs/toolkit'
import authSlice from './auth-store';
import counterSlice from './counter-store';

console.log('store');
const store  = configureStore({
    reducer: {
        counter: counterSlice,
        auth: authSlice
    }
})

export default store;