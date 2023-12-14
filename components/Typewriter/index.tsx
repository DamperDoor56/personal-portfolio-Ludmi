'use client'

import React, { useState, useEffect } from 'react';
import { TypeWriterProps } from './types';

const Typewriter = ({ texts, delay, className } : TypeWriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => {
        const currentTextArray = texts[currentIndex];
        const nextChar = currentTextArray.charAt(prevText.length);

        if (nextChar === '') {
          // Text for the current index is complete, move to the next index
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          return '';
        }

        return prevText + nextChar;
      });
    }, delay);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, delay, texts]);

  return <span className={className}>{currentText}</span>;
};

export default Typewriter;