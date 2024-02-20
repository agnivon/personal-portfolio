"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export default function MotionP(props: HTMLMotionProps<"p">) {
  return <motion.p {...props} />;
}
