import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Weoffer from '../../components/Weoffer/Weoffer';
import Benefits from '../../components/Benefits/Benefits';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import './home.css';

emailjs.init('chesslife@1');

const Home = () => {
  const toastContainerStyle = {
    position: 'fixed',
    top: '60px',
    right: '20px',
    width: '100px',
    height: '60px',
  };

  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('+91');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const targetRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#weoffer') {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateMobileNumber = (mobileNumber) => {
    const mobileRegex = /^\+?\d{10,15}$/;
    return mobileRegex.test(mobileNumber);
  };

  const handleEmail = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isMobileValid = validateMobileNumber(mobileNumber);

    if (!isEmailValid) {
      setEmailError('* Please enter a valid email address.');
    } else {
      setEmailError('');
    }

    if (!isMobileValid) {
      setMobileError('* Please enter a valid mobile number.');
    } else {
      setMobileError('');
    }

    if (isEmailValid && isMobileValid) {
      const formData = new FormData(e.target);

      const formsdata = {
        parentsname: formData.get('parentsname'),
        username: formData.get('username'),
        age: formData.get('age'),
        email: formData.get('email'),
        phonenumber: formData.get('phonenumber'),
        message: formData.get('message'),
      };

      emailjs
        .send('service_av9ejyk', 'template_ht0x7y9', formsdata, 'At1tXqkq102zNKGdp')
        .then(
          (result) => {
            console.log(result.text);
            toast.success('Email Sent!');
          },
          (error) => {
            console.log(error.text);
            toast.error(error.message);
          }
        );
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <main className='home-main'>
        <div className="homecontainer">
          <div className="left">
            <h1>Welcome to Chaturangveda</h1>
            <p>We are dedicated to broadening and developing chess as a Sport, Art and as a significant element of Culture among school kids across the world.</p>
            <Link to='/about' className='learnmore'>
              <button>
                Learn More
                <img width="30" height="30" src="https://img.icons8.com/cotton/64/circled-chevron-right--v1.png" alt="circled-chevron-right--v1" />
              </button>
            </Link>
          </div>
          <div className="right">
            <img src="./home1.png" alt="" />
          </div>
          <div className="right1">
            <img src="./home.png" alt="" />
          </div>
        </div>
        <Weoffer ref={targetRef} id="weoffer" />
        <Benefits />
        <div className="form-container">
          <h1>Get In Touch: </h1>
          <p>We will contact you</p>
          <img src="./formcontainer.png" className='formchess' alt="" />
          <form className='home-form' onSubmit={handleEmail}>
            <input type="text" placeholder="Parent's Full Name" name='parentsname' />
            <input type="text" placeholder="Student's Full Name" name='username' />
            <input type="text" placeholder="Student's Age (in Years)" name='age' />
            <div>
              <input
                type="text"
                value={email}
                placeholder='Email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
            </div>
            <div>
              <input
                type="text"
                value={mobileNumber}
                placeholder='Phone Number'
                name='phonenumber'
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              {mobileError && <span style={{ color: 'red' }}>{mobileError}</span>}
            </div>
            <textarea placeholder='Message...' name="message" id="textarea" className='textarea' cols="32" rows="10"></textarea>
            <button>Submit <img src="./form-submit.png" alt="" /></button>
          </form>
        </div>
      </main>
      {/* <Footer /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: '#3b3b3be1', color: '#fff' }}
        toastContainer={({ position, toastList }) => (
          <div style={toastContainerStyle}>{toastList}</div>
        )}
      />
    </div>
  );
};

export default Home;
