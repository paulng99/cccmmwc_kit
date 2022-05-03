import { Spin } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { decryptDataToString } from '../../utils/encrypto';
import { AuthHome } from '../Auth/Home';
import Setup from '../Module_template/Setup/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppProvider } from './AppContext';
import { useCheckAccessLink, useGetAccess } from './hooks/useAccess';

function App() {
  const getAccess = useGetAccess();
  const { isAccessLink, setLocation } = useCheckAccessLink();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname)
    console.log(getAccess)
    getAccess.length && setLocation(pathname)
    console.log("isAccessLink: ", isAccessLink)
  }, [getAccess])

  // useEffect(() => {
  //   setLocation(pathname)
  //   console.log("pathname:", pathname)
  //   console.log("isAccessLink: ", isAccessLink)
  // }, [pathname])

  return (
    <AppProvider>
      <Routes>
        <Route path='/testsetup' element={<Setup />} />
        <Route path='/test' element={<Test />} />
        <Route path='/auth/*' element={<AuthHome />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
