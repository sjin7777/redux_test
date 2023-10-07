import { useState } from "react";

function ChildGoParent(props) {
    const [ count, setCount ] = useState(0);
    const clickVal = () => {
        props.getTextVal('변경');
    }

    return (
        <div>
            <h2>자식 → 부모 데이터 전달</h2>
            <input type="button" value={props.textVal} onClick={clickVal} />

            <input type="number" value={count} readOnly/>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </div>
    )
}

export default ChildGoParent;