import './App.css';
import { Button } from 'antd';
import axios from "axios"

function App() {

  const handleClick = () => {
    axios.get("http://www.yahoo.com").then((r)=>{
      console.log(r);
    });

  }

  return (
    <Button shape='circle' size='large' onClick={handleClick}>Hello</Button>
  );
}

export default App;
