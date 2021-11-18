import React, { ReactElement, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface FadeProps {
  children: ReactElement;

  duration?: number;
}

export function Fade(props: FadeProps) {
  const { duration = 1.5, children } = props;
  const ref = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration,
      }
    );
  }, [duration]);

  return React.cloneElement(children, {
    ref,
  });
}
