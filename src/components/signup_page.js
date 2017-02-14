// @flow

import React from 'react';
import { OAuthSignInButton } from "redux-auth/bootstrap-theme";

export default () => {
    return (

            // First, I need to import redux-auth
            // Then, I need to render the sign up button.
            // After, we need to redirect to the backend at a particular route.
            // This route needs to issue a JWT and redirect to a static page.
            // This static page needs to have the same URL as the current page.
        
        <div> 
            Hello Sign Up page!
            <OAuthSignInButton provider="github"/>;
        </div>
    );
};
