import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <>
        <h1>Sign up 'n in</h1>
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
        <div className='option' onClick={() => auth.signOut()} style={{cursor: 'pointer'}}>SIGN OUT</div>
    </>
);

export default SignInAndSignUpPage;