import { Route, Routes } from 'react-router';
import Setup from '../Module_template/Setup/Setup';
import { Test } from '../Test/Test';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/testsetup' element={<Setup />} />
      <Route path='/test' element={<Test />} />
    </Routes>
    </>
  );
}

export default App;
