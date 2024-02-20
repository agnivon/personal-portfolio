"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export default function MotionUl(props: HTMLMotionProps<"ul">) {
  return <motion.ul {...props} />;
}
