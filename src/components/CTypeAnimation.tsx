"use client";

import { TypeAnimation } from "react-type-animation";

export default function CTypeAnimation(
  props: React.ComponentProps<typeof TypeAnimation> & { split?: boolean }
) {
  return (
    <TypeAnimation
      {...props}
      splitter={props.split ? (str) => str.split(/(?= )/) : undefined}
    />
  );
}
