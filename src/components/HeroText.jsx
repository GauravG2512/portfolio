import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = [
    "Full-Stack Developer",
    "Graphic Designer",
    "Technical Manager",
    "UI/UX Designer",
    "Product Builder",
    "Web Developer",
    "Fast Learner",
    "Django Developer",
    "React Developer",
    "Problem Solver",
    "Campus Innovator",
    "AI Integrator",
    "Code Craftsman"
  ];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-28 text-center md:mt-48 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden lg:flex c-space">
        <motion.h1
          className="text-6xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Gaurav
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Passionate
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-medium text-neutral-300 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            turning ideas into interactive realities.
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col mt-24 lg:hidden px-4 text-center items-center justify-center w-full">
        <motion.p
          className="text-4xl sm:text-5xl font-medium text-center w-full"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Gaurav
        </motion.p>
        <div className="flex flex-col items-center justify-center w-full text-center mt-3">
          <motion.p
            className="text-xl sm:text-2xl font-black text-neutral-300 text-center w-full"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Passionate
          </motion.p>
          <motion.div 
            className="min-h-[70px] sm:min-h-[80px] flex items-center justify-center w-full text-center relative py-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-[28px] sm:text-4xl text-center block w-full"
            />
          </motion.div>
          <motion.p
            className="text-base sm:text-lg font-medium text-neutral-300 mt-3 text-center w-full"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            turning ideas into interactive realities.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
