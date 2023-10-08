import { useState, useEffect } from "react";
import ParentGoChildren from "../components/ParentGoChildren";
import store from "../store";

function Component() {
    const [ storeNumber, setStoreNumber ] = useState(0);

    useEffect(() => {
        store.subscribe(() => setStoreNumber(store.getState().number));
    })

    return (
        <ParentGoChildren storeNumber={storeNumber}/>
    )
}

export default Component;