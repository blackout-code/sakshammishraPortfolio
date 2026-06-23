import { type Variants } from "framer-motion";

const easingSmooth = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const easingSpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 20,
  mass: 1,
};

/* ─── Container Stagger ─── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

/* ─── Fade Up ─── */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: easingSmooth,
  },
};

export const fadeUpFast: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(2px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ─── Fade In ─── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

/* ─── Section header ─── */
export const sectionHeader: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ─── Scale In ─── */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(2px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: easingSmooth,
  },
};

/* ─── Slide from left ─── */
export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: easingSmooth,
  },
};

/* ─── Slide from right ─── */
export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: easingSmooth,
  },
};

/* ─── Card hover ─── */
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: easingSpring,
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: easingSpring,
  },
  tap: {
    scale: 0.98,
    transition: easingSpring,
  },
};

/* ─── Counter animation ─── */
export const counterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ─── Staggered list items ─── */
export const listItem: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ─── Progress bar ─── */
export const progressBar: Variants = {
  hidden: { width: 0 },
  visible: (width: number) => ({
    width: `${width}%`,
    transition: {
      duration: 1.2,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ─── Circle progress (radial) ─── */
export const circularProgress = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 1.5,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
      opacity: {
        duration: 0.3,
        delay: i * 0.1,
      },
    },
  }),
};
