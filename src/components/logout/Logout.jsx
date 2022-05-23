import React, { useContext } from 'react'
import { authContext } from '../../Context/AuthContext'
import './Logout.css'

export default function LogOut() {

    const context = useContext(authContext)

    const handleLogOut=()=>{
        localStorage.removeItem("token")
        context.setAuth({
            logged:false,
            name:"",
            id:""
        })
    }
    return (
        <a onClick={handleLogOut} className={'logoutButton'}>
            Cerrar sesión
        </a>
    )
}