function ParentGoChildren(props) {
    
    return (
        <div>
            <h3>부모 → 자식 데이터 전달</h3>
            <input type="number" value={props.number} readOnly/>
        </div>
    )
}

export default ParentGoChildren;