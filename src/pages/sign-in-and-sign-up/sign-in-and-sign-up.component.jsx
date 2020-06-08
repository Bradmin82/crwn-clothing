import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <h1>Sign up 'n in</h1>
        <SignIn />
    </div>
);

export default SignInAndSignUpPage;