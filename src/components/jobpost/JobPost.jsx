import './JobPost.css'
import { authContext } from '../../Context/AuthContext';
import { useContext } from 'react';

export function JobItem(props){

    const context = useContext(authContext);

    const applyJob = () =>{
        const token = localStorage.getItem("token")
        const jobId = props.id;
        fetch(`https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs/apply/${jobId}`,{
            method: 'PUT',
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+ token
            }
        })
        alert('Se ha aplicado correctamente a este empleo')
    }

    return(
        <div className='jobItem'>
            <div className='jobContent'>
                <h3 className='jobTittle'>{props.tittle}</h3>
                <h4 className='jobLocation'>{props.country} - {props.province}</h4>
                <p className='jobDescription'>{props.description}</p>
                <h5 className='jobSalary'>Posible salario de  ${props.salary} </h5> 
                <button onClick={applyJob}>¡Aplicar!</button>
            </div>
        </div>
    );
}