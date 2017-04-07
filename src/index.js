import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './reducers';
import router from './router'
import { AuthGlobals } from "redux-auth/bootstrap-theme";
import { configure } from "redux-auth";

const reactRoot = document.querySelector('#app-root');

store.dispatch(configure(
    {
        apiUrl: "http://localhost:8081/api",
        emailRegistrationPath: "/user",
        emailSignInPath:       "/user/login",
        accountUpdatePath:     "/user/:userID",
        accountDeletePath:     "/user/:userID/delete",
        passwordResetPath:     "/user/:userID/password_reset",
        passwordUpdatePath:    "/user/:userID/password_update",
        signOutPath:           "/user/:userID/signout",
        authProviderPaths: {
            github: "/gh"
        }
    }));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                  <AuthGlobals />
                  { router }
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />
    , reactRoot
);

export default App;
