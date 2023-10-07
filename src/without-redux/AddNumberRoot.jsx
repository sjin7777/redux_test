import AddNumber from "./AddNumber";

function AddNumberRoot(props) {
    const { number, handleClick } = props;
    
    return (
        <div>
            <h2>Add Number Root</h2>
            <AddNumber setData={handleClick(number)} />
        </div>
    )
}

export default AddNumberRoot;