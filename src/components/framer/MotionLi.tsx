"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export default function MotionLi(props: HTMLMotionProps<"li">) {
  return <motion.li {...props} />;
}
