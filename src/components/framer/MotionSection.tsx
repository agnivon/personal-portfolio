"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export default function MotionSection(props: HTMLMotionProps<"section">) {
  return <motion.section {...props} />;
}
