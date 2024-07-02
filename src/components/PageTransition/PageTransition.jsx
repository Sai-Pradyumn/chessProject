import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './pageTransition.css'; // Create a CSS file for your transitions

const PageTransition = ({ children }) => {
  const location = useLocation();
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      node.addEventListener('transitionend', () => {
        // Handle transition end event if needed
      });
      return () => {
        node.removeEventListener('transitionend', () => {});
      };
    }
  }, [location.key]);

  return (
    <div className="page" ref={nodeRef}>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300} nodeRef={nodeRef}>
          <div ref={nodeRef}>
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default PageTransition;
