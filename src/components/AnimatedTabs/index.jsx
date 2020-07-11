import React, {
  useState, useRef, useLayoutEffect, useContext
} from 'react';
import {
  Tabs, Tab, useTabsContext
} from '@reach/tabs';
import { useRect } from '@reach/rect';
import styled from 'styled-components';

import './index.css';


const HORIZONTAL_PADDING = 8;
const AnimatedContext = React.createContext();


const UnderlineFigure = styled.div`
  position: absolute;
  height: 8px;
  background: ${({ color }) => color};
  z-index: 1;
  
  transition: all 300ms ease;
 
  left: ${({ activeRect, rect }) => (
    (activeRect && activeRect.left) - (rect && rect.left) + HORIZONTAL_PADDING
  )}px;
  
  top: ${({ activeRect, rect }) => (
    (activeRect && activeRect.bottom) - (rect && rect.top)
  )}px;
  width: ${({ activeRect }) => (
    activeRect && activeRect.width - HORIZONTAL_PADDING * 2
  )}px;
`;

export function AnimatedTabs({ color, children, ...rest }) {
  const [activeRect, setActiveRect] = useState(null);
  const ref = useRef();
  const rect = useRect(ref);
  return (
    <AnimatedContext.Provider value={setActiveRect}>
      <Tabs
        {...rest}
        ref={ref}
        style={{ ...rest.style, outline: 'none', position: 'relative' }}
      >
        <UnderlineFigure
          color="black"
          activeRect={activeRect}
          rect={rect}
        />
        {children}
      </Tabs>
    </AnimatedContext.Provider>
  );
}

const StyledTab = styled(Tab)`
  position: relative;
  background: transparent;
  border: none;
  
  padding: 4px ${HORIZONTAL_PADDING}px;
  font-size: 18px;
  
  &:hover::before {
    content: '';
    display: block;
    z-index: 0;
    
    position: absolute;
    height: 8px;
    background: ${({ theme }) => theme.colors.primaryBrand};
    
    left: ${HORIZONTAL_PADDING}px;
    top: 37px;
  
    width: ${({ rect }) => (
    rect && rect.width - HORIZONTAL_PADDING * 2
  )}px;
  }
`;

export function AnimatedTab({ index, ...props }) {
  // get the currently selected index from useTabsContext
  const { selectedIndex } = useTabsContext();
  const isSelected = selectedIndex === index;
  // measure the size of our element, only listen to rect if active
  const ref = useRef();
  const rect = useRect(ref, isSelected);
  // get the style changing function from context
  const setActiveRect = useContext(AnimatedContext);

  useLayoutEffect(() => {
    if (isSelected) {
      setActiveRect(rect);
    }
  }, [isSelected, rect, setActiveRect]);

  return (
    <StyledTab
      ref={ref}
      {...props}
      rect={rect}
      style={{
        ...props.style,
        fontSize: { _: '16px', sm: '18px' },
      }}
    />
  );
}
