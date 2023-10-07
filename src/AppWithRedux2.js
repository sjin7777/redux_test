import './App.css';
import AddNumberRoot from "./with-redux-2/components/AddNumberRoot";
import ParentGoChildRoot from "./with-redux-2/components/ParentGoChildRoot";

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
