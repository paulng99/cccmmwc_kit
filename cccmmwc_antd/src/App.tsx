import { Route, Routes, Link } from "react-router-dom";
import { Test } from "./modules/Test/Test"
import './App.css';

function App() {
  return (
    <>
      <Link to="/test">Test</Link>
      <Routes>
          <Route path='/test' element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
