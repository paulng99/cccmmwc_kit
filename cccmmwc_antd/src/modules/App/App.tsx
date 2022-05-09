import { Route, Routes, useLocation } from 'react-router';
import _ from 'underscore';
import { AuthHome } from '../Auth/Home';
import Setup from '../Module_template/Setup/Setup';
import { AppSetup } from '../App/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppProvider } from './AppContext';
import { useEffect } from 'react';
import useGroups from './hooks/useGroups';
import { decryptDataToString } from '../../utils/encrypto';
import { useGetAccess } from './hooks/useAccess';

function App() {
  const { groups, setEmail } = useGroups();
 // const getAccess = useGetAccess();
  const { pathname } = useLocation();
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      let email = JSON.parse(decryptDataToString(localStorage.getItem("userInfo"))).email
      setEmail(email)
   }else{
      setEmail(null)
    }
  }, [pathname])

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
