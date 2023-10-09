import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './AppWithoutRedux';
// import App from './AppWithRedux1';
// import App from './AppWithRedux2';
import App from './AppWithReactRedux';
import { Provider } from 'react-redux';
import store from './with-react-redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

root.render(
    <Provider store={store} >
        <App />
    </Provider>
);

