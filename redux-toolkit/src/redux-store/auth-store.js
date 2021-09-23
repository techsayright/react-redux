import { createSlice } from "@reduxjs/toolkit"

console.log('auth-store');
const authSlice = createSlice({
    name: 'auth',
    initialState:{isLogged: false},
    reducers:{
        login(state){
            state.isLogged = true
        },
        logout(state){
            state.isLogged = false
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;
