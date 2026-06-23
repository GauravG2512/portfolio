import { motion } from "motion/react";

const ViewCVButton = () => {
  const handleViewCV = () => {
    window.open("/assets/cv.pdf", "_blank");
  };

  return (
    <motion.button
      onClick={handleViewCV}
      whileHover={{ y: -4, boxShadow: "0px 0px 20px rgba(0, 229, 255, 0.6)" }}
      whileTap={{ scale: 0.96 }}
      className="
        relative flex items-center justify-center gap-2
        px-6 py-3 rounded-full
        font-light text-sm tracking-wide
        bg-gradient-to-r from-primary/80 to-primary/40
        backdrop-blur-xl
        border border-primary/30
        text-white
        w-[14rem]
        transition-all duration-300
        overflow-hidden
      "
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      />

      <motion.span
        className="relative z-10 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src="/assets/socials/download.svg" 
          alt="view icon" 
          className="w-5"
        />
        VIEW CV
      </motion.span>
    </motion.button>
  );
};

export default ViewCVButton;
