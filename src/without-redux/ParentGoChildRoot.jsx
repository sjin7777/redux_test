import ParentGoChildren from "./ParentGoChildren";

function ParentGoChildRoot(props) {
    return (
        <div>
            <h2>부모 → 자식 데이터 전달 Root</h2>
            <ParentGoChildren number={props.number} />
        </div>
    )
}

export default ParentGoChildRoot;