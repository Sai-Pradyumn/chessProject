// import Navbar from '../../components/Navbar/Navbar';
// import Footer from '../../components/Footer/Footer';
import './about.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='about-page'>
      {/* <Navbar /> */}
      <img src="./chessboard.png" alt="" className='chessboard' />
      <main className='about-main'>
        <div className="main-content">
          <img src="./about.jpg" alt="" className='aboutimg'/>
          <div className="content">
            <h1>About Us</h1>
            <p>
            Chaturangveda, located in Hyderabad, Telangana, is a renowned chess academy in our area. We specialize in providing chess classes for young toddlers. Our courses cater to all age groups, offering levels from beginner to advanced. Chess is not just a game; it's a fascinating exercise in intelligence and strategy, known for its benefits in brain development.
            </p>
            <p>Our academy's training programs are meticulously crafted to instill chess tactics through rigorous practice. Our experienced instructors ensure that learning chess is not only educational but also enjoyable. Additionally, we offer special classes to individuals or educational institutes upon request.</p>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="main-content">
          <div className="content">
            <h1>Our Mission</h1>
            <p>
              Our mission at Chaturangveda is to foster a deep love for chess and to nurture the intellectual and strategic skills it develops. Through our specialized courses for all age groups, from young toddlers to advanced players, we aim to make chess accessible to everyone in our community. We believe in the power of chess to enhance cognitive abilities and promote critical thinking, and our dedicated instructors work tirelessly to instill these values in our students. By offering engaging and enjoyable learning experiences, we strive to make Chaturangveda the premier destination for chess enthusiasts seeking to improve their game and enrich their minds.
            </p>
          </div>
          <img src="./about1.jpg" alt="" className='aboutimg1'/>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default About;