import './App.css';
import AddNumberRoot from "./with-redux/AddNumberRoot";
import ParentGoChildRoot from "./with-redux/ParentGoChildRoot";

function App() {
  return (
    <div>
      <h1>Root</h1>
      <AddNumberRoot />
      <ParentGoChildRoot/>
    </div>
  )
}

export default App;
