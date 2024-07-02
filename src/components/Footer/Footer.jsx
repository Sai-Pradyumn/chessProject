import React from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="media">
        <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer">
          <img src="./facebook.png" alt="facebook" />
        </a>
        <a href="https://www.instagram.com/your-page" target="_blank" rel="noopener noreferrer">
          <img src="./instagram.png" alt="instagram" />
        </a>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
          <img src="./whatsapp.png" alt="whatsapp" />
        </a>
        <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
          <img src="./youtube.png" alt="youtube" />
        </a>
        <a href="https://twitter.com/your-page" target="_blank" rel="noopener noreferrer">
          <img src="./twitter.png" alt="twitter" />
        </a>
      </div>
      <ul className='contact'>
        <li onClick={() => navigate('/contact')}>Contact us</li>
        <li onClick={() => navigate('/#weoffer')}>Our Services</li>
      </ul>
      <p className='copyright'> Chaturangveda Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
