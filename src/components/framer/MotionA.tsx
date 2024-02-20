"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export default function MotionA(props: HTMLMotionProps<"a">) {
  return <motion.a {...props} />;
}
