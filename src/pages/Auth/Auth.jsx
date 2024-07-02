import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './auth.css';
import { useState } from 'react';
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'

const Auth = () => {
  const [loading,setLoading] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)

    // const {username, email, password} = Object.fromEntries(formData);
    const username = formData.get('username');
    const email = formData.get('Email');
    const password = formData.get('Password');
    
    try{

        const res = await createUserWithEmailAndPassword(auth, email, password)

        // await setDoc(doc(db, "users", res.user.uid),{
        //     username,
        //     email,
        //     id : res.user.uid,
        // });


        // await setDoc(doc(db, "userchats", res.user.uid),{
        //     chats: [],
        // });

        toast.success("Account created! You can login now!")
    }
    catch(err){
        console.log(err)
        toast.error(err.message)
    }
    finally{
        setLoading(false)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)

    // const {username, email, password} = Object.fromEntries(formData);
    const email = formData.get('Email');
    const password = formData.get('Password');

    try{
        await signInWithEmailAndPassword(auth, email, password)
        toast.success("You have Logged in Successfully!")
    }
    catch(err){
        console.log(err)
        toast.error(err.message)
    }
    finally{
        setLoading(false)
    }
    // toast.success("Hello");
  }

  return (
    <div className='auth-page'>
      {/* <Navbar /> */}
      <main className='auth-main'>
        {!showSignUp && (
          <div className='sign-in'>
            <img src="./king1.png" alt="" className='auth-king'/>
            <h1>Sign In</h1>
            {/* <form onSubmit={handleLogin}> */}
            <form className='signin-form' onSubmit={handleLogin}>
              {/* <label htmlFor="email">Email</label> */}
              <input type="email" id="email" placeholder='Email' name='email'/>
              {/* <label htmlFor="password">Password</label> */}
              <input type="password" id="password" placeholder='Password' name='password'/>
              <button disabled={loading}>{loading ? "Loading..." : "Sign In"}</button>
            </form>
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={toggleSignUp}>
                Sign Up
              </a>
            </p>
          </div>
        )}

        {showSignUp && (
          <div className='sign-up'>
            <img src="./king1.png" alt="" className='auth-king'/>
            <h1>Sign Up</h1>
            {/* <form onSubmit={handleRegister}> */}
            <form className='signup-form' onSubmit={handleRegister}>
              {/* <label htmlFor="name">Name</label> */}
              <input type="text" id="name" name='username' placeholder='Username'/>
              {/* <label htmlFor="email">Email</label> */}
              <input type="email" id="email" placeholder='Email' name='email'/>
              {/* <label htmlFor="password">Password</label> */}
              <input type="password" id="password" placeholder='Password' name='password'/>
              <button disabled={loading}>{loading ? "Loading..." : "Sign Up"}</button>
            </form>
            <p>
              Already have an account?{' '}
              <a href="#" onClick={toggleSignUp}>
                Sign In
              </a>
            </p>
          </div>
        )}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Auth;