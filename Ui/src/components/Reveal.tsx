import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const controls = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, type: "spring", bounce: 0.25 },
      });
    } else if (entry && entry.boundingClientRect.top < 0) {
      // If scrolled past, fade out and scale down
      controls.start({
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.5, ease: "easeIn" },
      });
    } else {
      // If not in view yet, keep hidden
      controls.start({
        opacity: 0,
        y: 40,
        scale: 0.98,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [controls, inView, entry]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}