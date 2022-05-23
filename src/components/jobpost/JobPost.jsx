import './JobPost.css'

export function JobItem(props){
    return(
        <div className='jobItem'>
            <div className='jobContent'>
                <h3 className='jobTittle'>{props.tittle}</h3>
                <h4 className='jobLocation'>{props.country} - {props.province}</h4>
                <p className='jobDescription'>{props.description}</p>
                <h5 className='jobSalary'>Posible salario de  ${props.salary} </h5> 
            </div>
        </div>
    );
}