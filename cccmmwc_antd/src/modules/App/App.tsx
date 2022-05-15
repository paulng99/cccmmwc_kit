import { Route, Routes, useLocation, useNavigate } from 'react-router';
import _ from 'underscore';
import { AuthHome } from '../Auth/Home';
import Setup from '../Module_template/Setup/Setup';
import { AppSetup } from '../App/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppProvider } from './AppContext';
import { decryptDataToString } from '../../utils/encrypto';
import { useEffect } from 'react';
import { getAccess } from '../../utils/getAccess';
import getMenus from '../../utils/getMenus';
import { GroupingHome } from '../Grouping/Home';

function App() {
  const { pathname } = useLocation();
  const navigator = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      localStorage.setItem("groups", "[guest]")
      getAccess(["guest"]);
      setTimeout(() => { getMenus(); }, 1000)
    }
  }, [])
  useEffect(() => {
    if (pathname && localStorage.getItem("access")) {
      console.log(JSON.parse(decryptDataToString(localStorage.getItem("access"))));
      let x = _.filter(JSON.parse(decryptDataToString(localStorage.getItem("access"))), y => {
        //console.log("y:", y.menu.link)
        return y.menu.link == pathname
      })
      // console.log(x.length)
      if (x.length == 0) {
        console.log("isAccess: ", false)
        navigator("/auth/login")
      } else if (x.length > 0) {
        console.log("isAccess: ", true)
      }
    }
  }, [pathname])
  return (
    <AppProvider>
      <Routes>
        <Route path='/testsetup' element={<Setup />} />
        <Route path='/test' element={<Test />} />
        <Route path='/auth/*' element={<AuthHome />} />
        <Route path='/grouping/*' element={<GroupingHome />} />
        <Route path='/app/setup' element={<AppSetup />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
