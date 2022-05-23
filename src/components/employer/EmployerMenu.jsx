import './EmployerMenu.css'

export function EmployerMenu(){
    return(
        <div className="employerMenuContainer">
            <div className="componentsContainer">
                <h2 className='postJobButton'>Crear una publicacion de empleo</h2>
                <h2 className='viewJobsPosted'>Ver mis publicaciones</h2>
            </div>
        </div>
    );
}