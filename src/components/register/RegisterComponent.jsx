import './Register.css'
import Select from 'react-select'

export function Register(){

    const roles =[
        {value: 'admin', label: 'Admin'},
        {value: 'employer', label: 'Employer'},
        {value: 'applicant', label: 'Applicant'}
    ]

    return(
        <div className='registerContainer'>
            <div className='registerForm'>
                <div className='inputsContainer'>
                    <div>
                        <h2>Name</h2>
                        <input type={'text'} placeholder={'Name'}></input>
                    </div>
                    <div>
                        <h2>Email</h2>
                        <input type={'text'} placeholder={'Email'}></input>
                    </div>
                    <div>
                        <h2>Set yor role</h2>
                        <Select
                        options={roles}
                        theme={(theme) => ({
                        ...theme,
                        borderRadius: 20,
                        colors: {
                            ...theme.colors,
                            primary25: '#1c1f25',
                            primary: '#61dafb',
                        },
                        })}
                        styles={{
                            option: (base) => ({
                              ...base,
                              borderRadius: `0`,
                              height: '100%',
                              color: 'black'
                            }),
                          }}
                    />
                    </div>
                    <div>
                        <h2>Password</h2>
                        <input type={'password'} placeholder={'Password'}></input>
                    </div>
                    <div>
                        <h2>Write again your password</h2>
                        <input type={'password'} placeholder={'Password'}></input>
                    </div>
                </div>
            </div>
        </div>
    );
}