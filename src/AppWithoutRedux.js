import { useState } from "react";
import './App.css';
import AddNumberRoot from "./without-redux/AddNumberRoot";
import ParentGoChildRoot from "./without-redux/ParentGoChildRoot";
import ChildGoParentRoot from "./without-redux/ChildGoParentRoot";

function App() {
  const [ number, setNumber ] = useState(1);
  const [ textVal, setTextVal ] = useState('클릭');
  const handleClick = (size) => setNumber(prev => prev + size);
  const getTextVal = (text) => setTextVal(text);

  return (
    <div>
      <h1>Root</h1>
      <AddNumberRoot handleClick={() => handleClick} number={number} />
      <ParentGoChildRoot number={number}/>
      <ChildGoParentRoot textVal={textVal} getTextVal={getTextVal} />
      {textVal}
    </div>
  )
}

export default App;
