import { Route, Routes } from 'react-router';
import { Test } from '../Test/Test';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/test' element={<Test />} />
    </Routes>
    </>
  );
}

export default App;
