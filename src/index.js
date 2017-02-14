import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers, { store } from './reducers';
import router from './router'
import { AuthGlobals } from "redux-auth/bootstrap-theme";
import { configure } from "redux-auth";

const reactRoot = document.querySelector('.container');

store.dispatch(configure(
    {
        apiUrl: "http://localhost:8081/api",
        authProviderPaths: {
            github: "/gh"
        }
    }));

ReactDOM.render(
    <Provider store={store}>
        <div>
          <AuthGlobals />
          { router }
        </div>
    </Provider>
    , reactRoot
);
