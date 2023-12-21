'use client'

import React, { useState, useEffect } from 'react';
import { TypeWriterProps } from './types';

const Typewriter = ({ texts, delay, className, stopTime }: TypeWriterProps) => {
  // Current text in the texts array.
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  // The index of the current char within the current text
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  // Current text hehe
  const [currentText, setCurrentText] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
     // It checks whether the currentCharIndex is less than the length of the text
      if (currentCharIndex < texts[currentTextIndex].length) {
        // display the characters one by one.
        setCurrentText((prevText) => prevText + texts[currentTextIndex][currentCharIndex]);
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
        // If stopTime is greater than 0 and currentCharIndex is the length of the text
        // it waits for that time before moving to the next text.
      } else if (stopTime > 0) {
        setTimeout(() => {
          setCurrentText('')
          setCurrentTextIndex(currentTextIndex + 1);
          setCurrentCharIndex(0);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, stopTime);
      } else {
        setCurrentText('');
        setCurrentCharIndex(0);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [currentCharIndex, currentTextIndex, delay, stopTime, texts]);

  return <span className={className}>{currentText}</span>;
};

export default Typewriter;
