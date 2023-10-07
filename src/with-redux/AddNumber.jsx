import { useState } from "react";
import store from "./store";

function AddNumber() {
    const [ size, setSize ] = useState(0);
    const handleChange = (event) => setSize(Number(event.target.value));
    const handleClick = () => store.dispatch({type:"INCREMENT", size});
    


    return (
        <div>
            <h3>Add Number Child</h3>
            <input type="button" value="+" onClick={handleClick}/>
            <input type="number" value={size} onChange={handleChange}/>
        </div>
    )
}

export default AddNumber;