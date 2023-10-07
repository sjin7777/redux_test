import ChildGoParent from "./ChildGoParent";

function ChildGoParentRoot(props) {
    return (
        <div>
            <h2>자식 → 부모 데이터 전달 Root</h2>
            <ChildGoParent textVal={props.textVal} getTextVal={props.getTextVal}/>
        </div>
    )
}

export default ChildGoParentRoot