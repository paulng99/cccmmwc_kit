import { Spin } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import _ from 'underscore';
import { decryptDataToString } from '../../utils/encrypto';
import { AuthHome } from '../Auth/Home';
import Setup from '../Module_template/Setup/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppProvider } from './AppContext';
import { useCheckAccessLink, useGetAccess } from './hooks/useAccess';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("pathname: ", pathname)
    let x = _.filter(JSON.parse(decryptDataToString(localStorage.getItem("access"))), y => {
      console.log("y:", y.menu.link)
      return y.menu.link == pathname
    })
    if (x.length < 1) {
      console.log(0)
    }else{
      console.log(1)
    }
  })


  // const getAccess = useGetAccess();
  // const { isAccessLink, setLocation } = useCheckAccessLink();
  // const { pathname } = useLocation();
  // const [access, setAccess] = useState();

  // useEffect(() => {
  //   setAccess(getAccess)
  //   console.log(pathname)
  //   console.log(access)
  //   getAccess.length && setLocation(pathname)
  //   console.log("isAccessLink: ", isAccessLink)
  // }, [getAccess])

  // useEffect(() => {
  //   setLocation(pathname)
  //   console.log("pathname:", pathname)
  //   console.log("isAccessLink: ", isAccessLink)
  // }, [pathname])

  // console.log("pathname: ", pathname)
  // let x=_.filter(JSON.parse(decryptDataToString(localStorage.getItem("access"))), y => {
  //   console.log("y:", y.menu.link)
  //   return y.menu.link == pathname})
  //   if (x.length<1){

  //   }
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
