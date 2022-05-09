import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import _ from 'underscore';
import { AuthHome } from '../Auth/Home';
import Setup from '../Module_template/Setup/Setup';
import {AppSetup} from '../App/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppProvider } from './AppContext';
import { useCheckAccessLink, useGetAccess } from './hooks/useAccess';

function App() {
  const { isAccessLink, setLocation } = useCheckAccessLink();
  const nagivation = useNavigate()
  const { pathname } = useLocation();

  useEffect(() => {
    setLocation(pathname)
  })

  useEffect(() => {
    console.log("isAccessLink: ", isAccessLink)
    switch (isAccessLink) {
      case false:
       nagivation("/auth/login")
        console.log("redirected");
        break;
      case true:
        console.log("remind in the link")
        break;
      case undefined:
        console.log("waiting....")
    }
  }, [isAccessLink,pathname])

  return (
    <AppProvider>
      <Routes>
        <Route path='/testsetup' element={<Setup />} />
        <Route path='/test' element={<Test />} />
        <Route path='/auth/*' element={<AuthHome />} />
        <Route path='/app/setup' element={<AppSetup />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
