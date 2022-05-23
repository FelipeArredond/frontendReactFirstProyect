import './MainPage.css'
import { authContext } from "../../Context/AuthContext";
import { useContext } from "react";

export function MainPage(){

    const context = useContext(authContext)

    const getJobsData = async () =>{
        const data =  await fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs", {
            method: 'GET',
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return(
        <>
            <h1 className='welcomeUser'>{context.auth.logged&&'¡Bienvenido ' + context.auth.name + '!'}</h1>
            <h1 className='welcomeUser'>{context.auth.role&&'Tu rol es: ' + context.auth.role}</h1>
            <button onClick={getJobsData} >get jobs data</button>
        </>
    );
}