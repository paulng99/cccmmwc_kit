import { useReducer } from 'react';
import { Route, Routes } from 'react-router';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import Setup from '../Module_template/Setup/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppContext, AppProvider, initialAppState } from './AppContext';
import appReducer from './appReducer';

function App() {


  return (
    <AppProvider>
      <Routes>
        <Route path='/testsetup' element={<Setup />} />
        <Route path='/test' element={<Test />} key="/test/test" />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
