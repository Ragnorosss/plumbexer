export const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, type: "spring" },
  }),
};

export const reversTextAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, type: "spring" },
  }),
};

export const imageAnimation = {
  hidden: {
    y: -800,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: custom * 0.1,
    },
  }),
};
export const reversImageAnimation = {
  hidden: {
    y: 800,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: custom * 0.1,
    },
  }),
};
export const imageMobileAnimation = {
  hidden: {
    y: -350,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: custom * 0.1,
    },
  }),
};
export const textAnimationVer = {
  hidden: {
    y: -72,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: custom * 0.1 + 0.2,
    },
  }),
};
