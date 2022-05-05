import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import _ from 'underscore';
import { AuthHome } from '../Auth/Home';
import Setup from '../Module_template/Setup/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppProvider } from './AppContext';
import { useCheckAccessLink, useGetAccess } from './hooks/useAccess';

function App() {
  const { isAccessLink, setLocation } = useCheckAccessLink();
  const { pathname } = useLocation();

  useEffect(() => {
    setLocation(pathname)
  })

  useEffect(() => {
    console.log("isAccessLink: ", isAccessLink)
    switch (isAccessLink) {
      case false:
        console.log("redirected");
        break;
      case true:
        console.log("remind in the link")
        break;
      case undefined:
        console.log("waiting....")
    }
  }, [isAccessLink])

  return (
    <AppProvider>
      {isAccessLink}
      <Routes>
        <Route path='/testsetup' element={<Setup />} />
        <Route path='/test' element={<Test />} />
        <Route path='/auth/*' element={<AuthHome />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
