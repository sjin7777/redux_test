import AddNumber from "../components/AddNumber";
import store from "../store";

function Component() {
    const handleClick = (size)  => {
        store.dispatch({type:'INCREMENT', size})
    }

    return(
        <AddNumber handleClick={handleClick}/>
    )
}

export default Component;
