import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

emailjs.init('chesslife@1');

const Contact = () => {

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

    // Check if both email and mobile number are valid before sending the email
    if (isEmailValid && isMobileValid) {

      const formData = new FormData(e.target)

      const formsdata = {
        username: formData.get('name'),
        email: formData.get('email'),
        phonenumber: formData.get('phonenumber'),
        message: formData.get('message'),
      };

      emailjs
        .send('service_av9ejyk', 'template_kvu8koq', formsdata, 'At1tXqkq102zNKGdp')
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

  const handleEmailClick = () => {
    const email = 'chaturangveda12@gmail.com';
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    const phoneNumber = '+91 1234567890';
    navigator.clipboard.writeText(phoneNumber)
      .then(() => alert('Phone number copied to clipboard!'))
      .catch((err) => console.error('Failed to copy phone number: ', err));
  };

  return (
    <div className='contact-page'>
      {/* <Navbar /> */}
      <img src="./king.png" className='king' alt="" />
      <main className='contact-main'>
        <div className="contact-info">
          <div className="info">
            <img src="./mail3.png" alt="" />
            <div className="desc">
              <h3>Send Email</h3>
              <a href="" onClick={handleEmailClick}>chaturangveda12@gmail.com</a>
            </div>
          </div>
          <div className="info">
            <img src="./whatsapp2.png" alt="" />
            <div className="desc">
              <h3>Phone/Whatsapp</h3>
              <a href="" onClick={handlePhoneClick}> +91 1234567890 </a>
            </div>
          </div>
          <div className="info">
            <img src="./inquiry1.png" alt="" />
            <div className="desc">
              <h3>Inquiry Hours</h3>
              <p>Mon - Sat : 11AM - 08PM IST</p>
            </div>
          </div>
        </div>
        <div className="contact-us">
          <h1>Contact Us</h1>
          <form className='contact-form' onSubmit={handleEmail}>
            <input type="text" id="name" name='name' placeholder='Full Name' />
            {/* <input type="email" id="email" name='email' placeholder='Email'/> */}
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
            {/* <input type="text" placeholder='Mobile Number' name='phonenumber' /> */}
            <div>
                <input
                    type="text"
                    value={mobileNumber}
                    placeholder='Phone Number'
                    name='phonenumber'
                    onChange={(e) => setMobileNumber(e.target.value)}
                />
                {mobileError && <span style={{ color: 'red', }}>{mobileError}</span>}
            </div>
            <textarea id="message" cols="30" rows="10" name="message" placeholder='Message...'></textarea>
            <button type="submit" >Submit</button>
          </form>
        </div>
      </main>
      <img src="./queen1.png" className='queen' alt="" />
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
        toastStyle={{ backgroundColor: '#3b3b3be1', color: '#fff' }} // Optional: customize the toast appearance
        toastContainer={({ position, toastList }) => (
          <div style={toastContainerStyle}>{toastList}</div>
        )}
      />


    </div>
  );
};

export default Contact;