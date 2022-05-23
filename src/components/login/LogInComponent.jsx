import { Button } from '../button/Button';
import './LogIn.css'
import { useNavigate } from 'react-router';
import { post } from '../../api';
import { authContext } from '../../Context/AuthContext';
import { useContext, useRef } from 'react';

export function LogIn(){

    const context = useContext(authContext)

    const navigate = useNavigate()

    const email = useRef()
    const password = useRef()

    // Login de usuarios
    const login = (event) =>{
        event.preventDefault()

        post("/api/auth/login",{ // Peticion de login
            email: email.current.value,
            password:password.current.value
        })
        .then(data=>{
            const {token,user} = data.data
            localStorage.setItem("token",token) // Guardamos el token que recibimos
            context.setAuth({
                id:user.id,
                name:user.name,
                logged:true
            })
            navigate("/home",{
                replace:true
            })
        })

    }

    return(
        <div className='logContainer'>
            <form className='logForm' onSubmit={login} >
                <div className='inputsContainer'>
                        <h2>Email</h2>
                        <input type={'mail'} ref={email} placeholder={'Email'}></input>
                        <h2>Password</h2>
                        <input type={'password'} ref={password} placeholder={'Password'}></input>
                    <Button message={'Log In'} />
                </div>
            </form>
        </div>
    );
}