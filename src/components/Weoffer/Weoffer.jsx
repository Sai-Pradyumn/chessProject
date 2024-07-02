import { forwardRef, useEffect } from 'react';
import styles from './weoffer.module.css';
import { useInView } from 'react-intersection-observer';

const details = [
  {
    imgUrl: "./image1.jpg",
    heading: "Chess Coaching Classes",
    desc: "Learn chess the fun way! Expert instructors will help you improve your skills and become a stronger player.",
  },
  {
    imgUrl: "./image2.png",
    heading: "Personal Chess Classes",
    desc: "Our experienced Chess teachers provide personalized classes at your home for our students at affordable fees.",
  },
  {
    imgUrl: "./image3.png",
    heading: "Online Chess Coaching",
    desc: "We provide effective and easy online chess classes for students who can't attend our Classes. We provide individual and group classes through our interactive Classroom.",
  },
  {
    imgUrl: "./image4.png",
    heading: "Chess Classes in Schools",
    desc: "We offer special chess classes in educational institutions like schools and colleges at affordable fees.",
  },
  {
    imgUrl: "./image5.png",
    heading: "Weekly online Chess Tournaments",
    desc: "We Conduct daily and weekly tournaments for real-time exposure through the weekly online chess tournaments for our students.",
  },
  {
    imgUrl: "image6.png",
    heading: "24x7 Student Support",
    desc: "Chess is all about continuous improvement, and as passionate as you are, We are on 24×7 to clear any queries to our students.",
  },
];

const Weoffer = forwardRef((props, ref) => {
  // const { ref: inViewRef, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.5,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     ref.current.classList.add(styles.fadeIn);
  //   }
  // }, [inView, ref]);

  return (
    <div className={styles.weoffer} ref={ref} id="weoffer">
      <h1 className={styles.weofferheading}>We Offer</h1>
      <ul className={styles.unlist}>
        {details.map((offer, index) => (
          <li key={index} className={styles.list}>
            <img className={styles.listimg} src={offer.imgUrl} alt={offer.heading} />
            <h3 className={styles.listheading}>{offer.heading}</h3>
            <p className={styles.listpara}>{offer.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Weoffer;
