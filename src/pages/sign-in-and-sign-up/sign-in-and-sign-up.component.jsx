import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { auth } from '../../firebase/firebase.utils';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = ({currentUser}) => (
    <>
        <h1>Sign up 'n in</h1>
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
        <div className='option' onClick={() => auth.signOut()} style={{cursor: 'pointer'}}>
            {console.log('currentUser', currentUser)}
            You're logged-
            {currentUser !== null ? 'in. ' : 'out. '}
            SIGN OUT?
        </div>
    </>
);

export default SignInAndSignUpPage;