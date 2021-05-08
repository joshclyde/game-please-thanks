import React, { FC } from "react";

const PointerFC: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="10" width="16" height="10" transform="rotate(90 10 0)" fill="#0FFF27" />
      <rect
        x="12"
        y="2"
        width="12"
        height="12"
        transform="rotate(90 12 2)"
        fill="#0FFF27"
      />
      <rect
        x="14"
        y="4"
        width="8"
        height="12"
        transform="rotate(90 14 4)"
        fill="#0FFF27"
      />
      <rect
        x="16"
        y="6"
        width="4"
        height="12"
        transform="rotate(90 16 6)"
        fill="#0FFF27"
      />
    </svg>
  );
};

export const Pointer = PointerFC;
