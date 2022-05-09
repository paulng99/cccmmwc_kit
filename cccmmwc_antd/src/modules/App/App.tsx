import { Route, Routes } from 'react-router';
import _ from 'underscore';
import { AuthHome } from '../Auth/Home';
import Setup from '../Module_template/Setup/Setup';
import { AppSetup } from '../App/Setup';
import { Test } from '../Test/Test';
import './App.css';
import { AppProvider } from './AppContext';

function App() {
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
