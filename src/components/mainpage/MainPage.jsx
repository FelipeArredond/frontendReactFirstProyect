import './MainPage.css'
import { authContext } from "../../Context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { JobItem } from '../jobpost/JobPost';
import { EmployerMenu } from '../employer/EmployerMenu';

export function MainPage(){

    const [jobsList, setJobsList] = useState([])
    const [jobsApplied, setJobsApplied] = useState([])
    const [jobslisted, setJobslisted] = useState(true)

    const context = useContext(authContext)

    const getJobsData = async () =>{
        const token = localStorage.getItem("token")
        const response = await fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs", {
            method: 'GET',
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+ token
            }
        })
        const data = await response.json()
        setJobsList(data)
    }

    const getJobsApplied = async () =>{
        const token = localStorage.getItem("token")
        const response = await fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs/me", {
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+ token
            }
        })
        const data = await response.json()
        setJobsApplied(data)
        setJobslisted(!jobslisted);
    }

    useEffect(() => {
        getJobsData()
    },[])

    const mapJobsList = jobsList.map(job => {
        return(
            <JobItem tittle={job.title}
            country={job.location.country}
            province={job.location.province}
            description={job.description}
            salary={job.salary}
            id={job._id}
            ></JobItem>
        )
    })

    const mapJobsApplied = jobsApplied.map(job => {
        return(
            <JobItem tittle={job.title}
            country={job.location.country}
            province={job.location.province}
            description={job.description}
            salary={job.salary}
            id={job._id}
            ></JobItem>
        )
    })

    return(
        <>
            <h1 className='welcomeUser'>{context.auth.logged&&'¡Bienvenido ' + context.auth.name + '!'}</h1>
            {context.auth.role==='applicant'&&<h1 className='welcomeUser' onClick={getJobsApplied}>Ver empleos aplicados!</h1>}
            {context.auth.role==='applicant'&&!jobslisted&&mapJobsApplied}
            {context.auth.role==='applicant'&&jobslisted&&mapJobsList}
            {context.auth.role==='employer'&&<EmployerMenu></EmployerMenu>}
        </>
    );
}