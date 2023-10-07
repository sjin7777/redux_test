import ParentGoChildren from "./ParentGoChildren";

function ParentGoChildRoot() {
    return (
        <div>
            <h2>부모 → 자식 데이터 전달 Root</h2>
            <ParentGoChildren />
        </div>
    )
}

export default ParentGoChildRoot;