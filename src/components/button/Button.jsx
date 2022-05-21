import './Button.css'

export function Button(props){
    return(
        <div className='buttonContainer'>
            <button className="globalButton" >
                {props.message}
            </button>
        </div>
    );
}