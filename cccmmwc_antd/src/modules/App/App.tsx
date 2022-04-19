import { Route, Routes } from 'react-router';
import { AuthHome } from '../Auth/Home';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import { AuthSetup } from '../Auth/Setup';
import Setup from '../Module_template/Setup/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppProvider } from './AppContext';

function App() {


  return (
    <AppProvider>
      <Routes>
        <Route path='/testsetup' element={<Setup />} />
        <Route path='/test' element={<Test />}/>
        <Route path='/auth/*' element={<AuthHome />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
