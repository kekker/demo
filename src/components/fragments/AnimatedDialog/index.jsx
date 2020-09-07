import React, { useRef, useEffect } from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import { Close } from '../Icons/Icons';
import './index.css';

// Internal logic of how to manipulate a style attribute with transition object values
// Use with your own components with animated logic
// Components needs to have forwardRef attribute

animated.DialogOverlay = animated(DialogOverlay);
animated.DialogContent = animated(DialogContent);


const ButtonModalClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  
  width: 50px;
  height: 50px;
  
  border: none;
  background: transparent;
`;


export default function AnimatedDialog(props) {
  // const rootRef = useRef(null);
  //
  // const updateRootElement = (item, state, props) => {
  //   if (item) {
  //     if (!rootRef.current) {
  //       rootRef.current = document.querySelector('html');
  //     }
  //     rootRef.current.style.overflow = props.isOpen ? 'hidden' : 'visible';
  //   }
  // };
  //
  // const html = document.querySelector('html');
  //
  // useEffect(() => {
  //   props.isOpen ? (html.style.overflow = 'hidden') : (html.style.overflow = 'visible');
  // }, [props.isOpen]);

  const transitions = useTransition(
    props.isOpen ? props : false,
    null,
    {
      from: { opacity: 0, y: -10 },
      enter: { opacity: 1, y: 0 },
      leave: { opacity: 0, y: -10 },
    }
  );

  return transitions.map(transition => {
    // item returned from transition object holds "props" if props.isOpen or "false"
    const { item, key, props: { opacity, y } } = transition;
    return item ? (
      <animated.DialogOverlay
        key={key}
        style={{ opacity }}
        onDismiss={item.onDismiss}
        dangerouslyBypassScrollLock
      >
        <animated.DialogContent
          aria-label="dialog-question"
          style={{
            transform: y.interpolate(yValue => `translate3d(0px, ${yValue}px, 0px)`)
          }}
        >
          {item.children}
          <ButtonModalClose
            type="button"
            onClick={item.onDismiss}
          >
            <Close width="50px" height="50px" aria-label="Close new post dialog" />
          </ButtonModalClose>
        </animated.DialogContent>
      </animated.DialogOverlay>
    ) : null;
  });
}
