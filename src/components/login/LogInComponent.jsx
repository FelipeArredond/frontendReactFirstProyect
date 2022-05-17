import './LogIn.css'

export function LogIn(){
    return(
        <div className='logContainer'>
            <div className='logForm'>
                <div className='inputsContainer'>
                    <div className='username'>
                        <h2>Username</h2>
                        <input type={'text'} placeholder={'Username'}></input>
                    </div>
                    <div className='password'>
                        <h2>Password</h2>
                        <input type={'password'} placeholder={'Password'}></input>
                    </div>
                </div>
            </div>
        </div>
    );
}