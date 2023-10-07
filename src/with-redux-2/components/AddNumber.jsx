import { useState } from "react";

function AddNumber(props) {
    const [ size, setSize ] = useState(0);
    const handleChange = (event) => setSize(Number(event.target.value));

    return (
        <div>
            <h3>Add Number Child</h3>
            <input type="button" value="+" />
            <input type="number" value={size} onChange={handleChange}/>
        </div>
    )
}

export default AddNumber;