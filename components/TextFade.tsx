"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

  const TextFade = () => {
    const [index, setIndex] = useState(0);
    const texts = ['Natnael Amin', 'a web developer'];
    const interval = 3000;
  
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, interval);
  
      return () => clearInterval(timer);
    }, [texts.length, interval]);
  
    return (
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    );
  };

export default TextFade
