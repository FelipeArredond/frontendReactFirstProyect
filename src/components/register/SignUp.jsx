import './SignUp.css'
import Select from 'react-select'
import { post } from '../../api';
import { authContext } from '../../Context/AuthContext'
import React,{ useContext, useRef } from 'react';
import { Button } from '../button/Button';

export function SignUp(){

    const context = useContext(authContext)
    const email = useRef()
    const password = useRef()
    const name = useRef()
    const role = useRef()

    const roles =[
        {value: 'admin', label: 'Admin'},
        {value: 'employer', label: 'Employer'},
        {value: 'applicant', label: 'Applicant'}
    ]

    const signup = (event) =>{
      event.preventDefault()
      post("/api/auth/signup",{
        name:name.current.value,
        email: email.current.value,
        password:password.current.value,
        role: role.current.value
      })
      .then(({data})=>{
        if(data.error){
          console.log(data)
        }else{
          localStorage.setItem("token",data.token)
          context.setAuth({
            id:data.user.id,
            name:data.user.name,
            logged:true
          })
        }
      })
    } 

    return(
        <div className='registerContainer'>
            <form className='registerForm' onSubmit={signup} >
                <div className='inputsContainer'>
                    <div>
                        <h2>Name</h2>
                        <input type={'text'} placeholder={'Name'} ref={name}></input>
                    </div>
                    <div>
                        <h2>Email</h2>
                        <input type={'text'} placeholder={'Email'} ref={email} ></input>
                    </div>
                    <div>
                        <h2>Set yor role</h2>
                        <input type={'text'} placeholder={'Rol'} ref={role} ></input>
                    </div>
                    <div>
                        <h2>Password</h2>
                        <input type={'password'} placeholder={'Password'} ref={password} ></input>
                        <Button message={'Sign Up'} />
                    </div>
                </div>
            </form>
        </div>
    );
}