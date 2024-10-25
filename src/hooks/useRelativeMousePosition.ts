import { useMotionValue } from "framer-motion";
import { RefObject, useEffect } from "react";

const useRelativeMousePosition = (ref: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (e: MouseEvent) => {
    if (!ref.current) return;
    const { top, left } = ref.current?.getBoundingClientRect();
    mouseX.set(e.x - left);
    mouseY.set(e.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });

  return [mouseX, mouseY];
};

export default useRelativeMousePosition;
