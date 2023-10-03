import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default SignIn
