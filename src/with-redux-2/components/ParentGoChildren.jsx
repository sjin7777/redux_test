import { useState, useEffect } from "react";
import store from "../store";

function ParentGoChildren() {
    const [ storeNumber, setStoreNumber ] = useState(0);

    useEffect(() => {
        store.subscribe(() => setStoreNumber(store.getState().number));
    })

    return (
        <div>
            <h3>부모 → 자식 데이터 전달</h3>
            <input type="number" value={storeNumber} readOnly/>
        </div>
    )
}

export default ParentGoChildren;