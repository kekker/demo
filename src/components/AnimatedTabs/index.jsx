import React, {
  useState, useRef, useLayoutEffect, useContext
} from 'react';
import {
  Tabs, Tab, useTabsContext
} from '@reach/tabs';
import { useRect } from '@reach/rect';

import './index.css';


const HORIZONTAL_PADDING = 8;
const AnimatedContext = React.createContext();

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
        <div
          style={{
            position: 'absolute',
            height: 5,
            background: color,
            transition: 'all 300ms ease',
            left:
              (activeRect && activeRect.left)
              - (rect && rect.left)
              + HORIZONTAL_PADDING,
            top: (activeRect && activeRect.bottom) - (rect && rect.top),
            // subtract both sides of horizontal padding to center the div
            width: activeRect && activeRect.width - HORIZONTAL_PADDING * 2,
          }}
        />
        {children}
      </Tabs>
    </AnimatedContext.Provider>
  );
}

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
    <Tab
      ref={ref}
      {...props}
      style={{
        ...props.style,
        background: 'transparent',
        border: 'none',
        padding: `4px ${HORIZONTAL_PADDING}px`,
      }}
    />
  );
}
