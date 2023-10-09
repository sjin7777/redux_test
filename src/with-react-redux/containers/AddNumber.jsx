import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

// 데이터 전달
//  : Redux의 dispatch를 React의 props와 연결해주는 역할
function mapReduxDispatchToReactProps(dispatch) {
    return {
        handleClick: (size) => dispatch({type:'INCREMENT', size})
    }
}

// connect의 인자의 수는 0~2개임
//  - event props만 있고, 그 외에 상태를 전달하는 props는 없기에 첫번째 인자는 null, 두번째 인자로는 event props를 넘겨야 함
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

/* 
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
*/
