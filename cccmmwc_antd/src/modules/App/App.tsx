import { Route, Routes } from 'react-router';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import Setup from '../Module_template/Setup/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path='/testsetup' element={<Setup />} />
        <Route path='/test' element={<Test />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
