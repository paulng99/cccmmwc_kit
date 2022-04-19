import { useReducer } from 'react';
import { Route, Routes } from 'react-router';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import Setup from '../Module_template/Setup/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppContext, initialAppState } from './AppContext';
import appReducer from './appReducer';

function App() {

  const [appState, appDispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={{appState,appDispatch}}>
      <Routes>
        <Route path='/testsetup' element={<Setup />} />
        <Route path='/test' element={<Test />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
