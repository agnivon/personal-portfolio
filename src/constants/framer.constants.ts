export const Variant = {
  FADE: {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  },
  FADE_SLIDE_UP: {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        when: "afterChildren",
      },
    },
  },
  FADE_SLIDE_LEFT: {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
      transition: {
        when: "afterChildren",
      },
    },
  },
};
