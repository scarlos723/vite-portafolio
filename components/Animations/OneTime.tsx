import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import type {
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "framer-motion";

interface OneTimeProps {
  className?: string;
  children: React.ReactNode;
  initial?: boolean | TargetAndTransition | VariantLabels;
  transition?: Transition;
  animate?: TargetAndTransition | VariantLabels;
}
export const OneTime = (props: OneTimeProps) => {
  const { className, children, initial, transition, animate } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={initial}
        animate={isInView && animate}
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
};
