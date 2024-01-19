"use client"

import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { TextArraysAnimationProps } from './types';


const TextArraysAnimation: React.FC<TextArraysAnimationProps> = ({ texts, className, delay }) => {
  const [currentArrayIndex, setCurrentArrayIndex] = useState<number>(0);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    setShouldAnimate(true);

    const timer = setTimeout(() => {
      setCurrentArrayIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setShouldAnimate(false);
    }, delay);

    return () => clearTimeout(timer);

  }, [currentArrayIndex, delay, texts]);

  const fadeInOutClasses = classNames(
    'opacity-0',
    'transition-opacity',
    `duration-1000`,
    'ease-in-out',
    { 'opacity-100': shouldAnimate }
  );

  return (
        <p key={currentArrayIndex} className={classNames(fadeInOutClasses, className)}>
          {texts[currentArrayIndex]}
        </p>
  );
};

export default TextArraysAnimation;
