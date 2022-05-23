import './MainPage.css'
import { authContext } from "../../Context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { JobItem } from '../jobpost/JobPost';

export function MainPage(){

    const [jobsList, setJobsList] = useState([])

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
            ></JobItem>
        )
    })

    return(
        <>
            <h1 className='welcomeUser'>{context.auth.logged&&'¡Bienvenido ' + context.auth.name + '!'}</h1>
            {context.auth.role==='applicant'&&mapJobsList}
            {context.auth.role==='employer'&&<h2>Employer option</h2>}
        </>
    );
}