"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export default function MotionDiv(props: HTMLMotionProps<"div">) {
  return <motion.div {...props} />;
}
