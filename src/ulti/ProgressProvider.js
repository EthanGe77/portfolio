import React from "react";
import { Animate } from "react-move";

export const ProgressProvider = ({
  isVisible,
  valueStart,
  valueEnd,
  duration,
  easingFunction,
  children
}) => {
  return (
    <Animate
      start={() => ({
        value: valueStart
      })}
      update={() => ({
        value: [isVisible ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction
        }
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  );
};
