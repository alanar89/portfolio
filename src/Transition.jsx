// import "./transition.css";
import { motion } from "framer-motion";
const Transition = () => {
  const transitionVariants = {
    inicial: {
      x: "100%",
      width: "100%",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#0C003D] z-30"
        variants={transitionVariants}
        initial="inicial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.15,
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#040A54] z-20"
        variants={transitionVariants}
        initial="inicial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.3,
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#2A0454] z-10"
        variants={transitionVariants}
        initial="inicial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.45,
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      ></motion.div>
    </>
  );
};
export default Transition;
