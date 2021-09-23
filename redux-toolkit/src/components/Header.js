import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../redux-store/auth-store'

export default function Header() {
    console.log('header');
    const isAuth = useSelector(state=> state.auth.isLogged)
    const dispatch = useDispatch()
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 10px',
        fontSize: '30px'
    }
    return (
        <div style={divStyle}>
            {isAuth && <><div>Contact</div> &nbsp;&nbsp;
            <div>site</div>&nbsp;&nbsp;
            <div><button type="button" onClick={()=>dispatch(authActions.logout())}><h3>Logout</h3></button></div>&nbsp;</>}
        </div>
    )
}
