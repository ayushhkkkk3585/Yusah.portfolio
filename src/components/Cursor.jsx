import React, { useEffect, useState } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      requestAnimationFrame(() => {
        setPosition({
          x: event.clientX,
          y: event.clientY,
        });
        setIsVisible(true);
      });
    };

    const handleHover = (event) => {
      const hoverTarget = event.target.closest('.hover-target');
      if (hoverTarget) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (event) => {
      const hoverTarget = event.target.closest('.hover-target');
      if (hoverTarget) {
        const relatedTarget = event.relatedTarget;
        if (!hoverTarget.contains(relatedTarget)) {
          setIsHovering(false);
        }
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleHover, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    const cursor = document.querySelector('html');
    if (cursor) {
      cursor.style.cursor = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);

      if (cursor) {
        cursor.style.cursor = 'auto';
      }
    };
  }, []);

  return (
    <img
      src={isHovering ? '/hover-pointer.png' : '/pointer.png'}
      className={`w-56 fixed transition-opacity duration-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        willChange: 'transform',
        transition: 'transform 0.05s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
      alt="Custom Pointer"
      draggable="false"
    />
  );
}

export default Cursor;