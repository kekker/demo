import { useState, useEffect } from 'react';

function useScrollBox(scrollRef) {
  const [clickStartX, setClickStartX] = useState();
  const [scrollStartX, setScrollStartX] = useState();

  const scrollWrapperCurrent = scrollRef.current;
  useEffect(() => {
    if (scrollRef.current) {
      const handleDragStart = e => {
        setClickStartX(e.screenX);
        setScrollStartX(scrollRef.current.scrollLeft);
      };
      const handleDragMove = e => {
        e.preventDefault();
        e.stopPropagation();

        if (clickStartX !== undefined && scrollStartX !== undefined) {
          const touchDelta = clickStartX - e.screenX;
          scrollRef.current.scrollLeft = scrollStartX + touchDelta;
        }
      };
      const handleDragEnd = () => {
        if (clickStartX !== undefined) {
          setClickStartX(undefined);
          setScrollStartX(undefined);
        }
      };

      if (scrollRef.current.ontouchstart === undefined) {
        scrollRef.current.onmousedown = handleDragStart;
        scrollRef.current.onmousemove = handleDragMove;
        scrollRef.current.onmouseup = handleDragEnd;
        scrollRef.current.onmouseleave = handleDragEnd;
      }
    }
  }, [scrollWrapperCurrent, clickStartX, scrollStartX]);

  return {
    clickStartX, scrollStartX
  };
}

export default useScrollBox;
