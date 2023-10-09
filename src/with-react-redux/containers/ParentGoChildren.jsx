import ParentGoChildren from "../components/ParentGoChildren";
import { connect } from "react-redux";

// 데이터 추출
//  - Redux의 state를 React의 props로 맵핑(연결)시켜주는 역할
//  - Redux의 state 값이 바뀔 때마다 호출되고, 그때마다 store의 state 값이 인자로 전달됨
//  - 그 state 값을 가공해서 리턴하고 싶은 ParentGoChildren에 전달할 props의 이름인 storeNumber에 값을 할당
function mapReduxStateToReactProps(state) {
    return {
        storeNumber: state.number
    }
}
// connect의 인자의 수는 0~2개임
export default connect(mapReduxStateToReactProps)(ParentGoChildren);

/* 
import { useState, useEffect } from "react";
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
 */