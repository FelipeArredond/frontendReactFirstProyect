import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/Navbar';
import { LogIn } from './components/login/LogInComponent';
import { Register } from './components/register/RegisterComponent';
import { Route, Routes } from 'react-router';
import { Section } from './components/section/SectionComponent';

function App() {
  return (
        <>
          <NavBar></NavBar>
          <Routes>
            <Route path='/login' element={<LogIn></LogIn>} />
            <Route path='/signup' element={<Register></Register>} />
            <Route path='/section' element={<Section></Section>} />
          </Routes>
        </>
  );
}

export default App;
