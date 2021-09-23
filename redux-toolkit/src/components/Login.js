import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../redux-store/auth-store'

export default function Login() {
    console.log('login');
    const dispatch =useDispatch()
    return (
        <div>
            <input type="text" placeholder="Enter Username"/><br /><br />
            <input type="password" placeholder="Enter password"/><br /><br />
            <input type="button" value="Login" onClick={()=>dispatch(authActions.login())}/>
        </div>
    )
}
