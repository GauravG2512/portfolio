import React, { useState } from "react";
import { motion } from "motion/react";

const Certification = ({
  title,
  issuer,
  date,
  credentialId,
  description,
  image,
  setPreview,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl font-semibold">{title}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sand text-sm">
            <span>{issuer}</span>
            <span>•</span>
            <span>{date}</span>
            {credentialId && (
              <>
                <span>•</span>
                <span className="text-neutral-400">ID: {credentialId}</span>
              </>
            )}
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation text-sm font-medium"
        >
          View Details
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
          <motion.div
            className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10"
            >
              <img src="assets/close.svg" className="w-6 h-6" />
            </button>
            <img src={image} alt={title} className="w-full rounded-t-2xl" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
              <div className="flex flex-wrap gap-x-4 mb-4 text-sand text-sm font-semibold">
                <span>{issuer}</span>
                <span>•</span>
                <span>{date}</span>
              </div>
              <p className="mb-3 font-normal text-neutral-400">{description}</p>
              {credentialId && (
                <p className="text-sm text-neutral-500 mt-2">
                  Credential ID: <span className="font-mono text-neutral-300">{credentialId}</span>
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Certification;
