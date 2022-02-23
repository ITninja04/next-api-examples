import { motion } from "framer-motion";
import React from 'react';

const withTransition = (OriginalComponent: React.FC) => {

  return () => (
    <>
      <OriginalComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </>
  );
};

const displayName =  withTransition.displayName || withTransition.name || "Transition";

export default withTransition;
