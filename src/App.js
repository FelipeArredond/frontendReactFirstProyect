import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { LogIn } from './components/login/LogInComponent';
import { SignUp } from './components/register/SignUp';
import { Route, Routes } from 'react-router';
import { Section } from './components/section/SectionComponent';
import { authContext } from './Context/AuthContext'
import { useEffect, useContext } from 'react';
import { postWithToken } from './api';

function App() {

  const context = useContext(authContext)

  useEffect(()=>{
    postWithToken("/api/auth/validate")
    .then(({data})=>{
      if(data.failed){
        console.log(data)
      }else{
        context.setAuth({
          id:data.user.id,
          name:data.user.name,
          logged:true
        })
      }
    })
  },[])

  return (
        <>
          <NavBar/>
          <Routes>
            <Route path='/login' element={<LogIn></LogIn>} />
            <Route path='/signup' element={<SignUp></SignUp>} />
            <Route path='/section' element={<Section></Section>} />
          </Routes>
        </>
  );
}

export default App;
