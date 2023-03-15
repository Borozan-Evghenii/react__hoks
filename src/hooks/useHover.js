import { useEffect, useState } from "react";

export const useHover = (targetRef) => {
  const currentTarget = targetRef.current;
  const [isHover, setIsHover] = useState(false);
  const on = () => {
    setIsHover(true);
  };
  const off = () => {
    setIsHover(false);
  };
  useEffect(() => {
    if (!currentTarget) return;
    currentTarget.addEventListener("mouseenter", on);
    currentTarget.addEventListener("mousemove", on);
    currentTarget.addEventListener("mouseleave", off);

    return () => {
      currentTarget.removeEventListener("mouseenter", on);
      currentTarget.removeEventListener("mousemove", on);
      currentTarget.removeEventListener("mouseleave", off);
    };
  }, []);
  return isHover;
};
