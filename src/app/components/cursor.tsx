"use client";
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaChair } from 'react-icons/fa';

const rotate = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const FurnitureWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: 32px;
  height: 32px;
  transition: all 0.2s ease;
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.3));
`;

const DotCursor = styled.div`
  width: 8px;
  height: 8px;
  background-color: brown;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FurnitureIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${float} 2s ease-in-out infinite;
  color: brown;
  


  svg {
    font-size: 28px;
    animation: ${rotate} 3s ease-in-out infinite;
    transition: all 0.3s ease;
  }


  &:hover svg {
    transform: scale(1.2);
    filter: brightness(1.2);
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <FurnitureWrapper style={{ left: position.x - 16, top: position.y - 16 }}>

      <FurnitureIcon>
        <FaChair />
      </FurnitureIcon>
      <DotCursor />
    </FurnitureWrapper>
  );
};

export default CustomCursor;
