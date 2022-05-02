import { Spin } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { AuthHome } from '../Auth/Home';
import Setup from '../Module_template/Setup/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppProvider } from './AppContext';
import { useCheckAccessLink, useGetAccess } from './hooks/useAccess';

function App() {
  const getAccess=useGetAccess();
  const {isAccessLink, setLocation}=useCheckAccessLink();
  console.log(isAccessLink)
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
