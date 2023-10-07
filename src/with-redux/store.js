import { legacy_createStore as createStore } from "redux";


const reducer = (state, action) => {
    // console.log(state);
    if(state === undefined) {
        return { number: 0 }
    }

    switch(action.type) {
        case "INCREMENT":
            return { ...state, number: state.number + action.size};
        default:
            return state;
    }
}


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  : redux devtools를 사용하기 위함
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;