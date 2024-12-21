import { useState } from "react";

function useHighlightAnimation() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = () => setIsHovered(true); 
  const handleMouseLeave = () => {
    setIsHovered(false); 
    setIsPressed(false); 
  };
  const handleMouseDown = () => setIsPressed(true); 
  const handleMouseUp = () => setIsPressed(false); 

  return { isHovered, isPressed, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp };
}

export default useHighlightAnimation;
