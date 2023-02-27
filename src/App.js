import './App.css';
import { useGlobalContext } from './context/GlobalContext';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import RegistrationProcess1 from './pages/RegistrationProcess1';
import RegistrationProcess2 from './pages/RegistrationProcess2';

function App() {

  const {idVerified,hospitalSelected} =  useGlobalContext();


  return (
    <>
    <HomePage/>
    <Register/>
    {idVerified && (<RegistrationProcess1/>) }
    {/* <RegistrationProcess1/> */}
    {hospitalSelected && ( <RegistrationProcess2/> )}
    {/* <RegistrationProcess2/> */}
    </>
  );
}

export default App;
