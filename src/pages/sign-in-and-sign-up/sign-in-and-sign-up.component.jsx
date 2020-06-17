import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = ({currentUser}) => (
    <>
        <h1 style={{maxWidth: '850px', margin: '0 auto',}}>Sign up 'n in</h1>
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    </>
);

export default SignInAndSignUpPage;