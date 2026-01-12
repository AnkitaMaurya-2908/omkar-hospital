"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Healthier Tomorrow",
  "Better Medical Care",
  "Trusted Healthcare",
  "Your Health, Our Priority",
];

const TYPING_SPEED = 90;
const ERASING_SPEED = 50;
const PAUSE_AFTER_TYPING = 1200;
const PAUSE_AFTER_ERASING = 400;

const TypingText = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const fullText = texts[textIndex];
    let timeout;

    if (isTyping) {
      if (displayText.length < fullText.length) {
        // typing forward
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        // pause before erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, PAUSE_AFTER_TYPING);
      }
    } else {
      if (displayText.length > 0) {
        // erasing
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, ERASING_SPEED);
      } else {
        // move to next word
        timeout = setTimeout(() => {
          setIsTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, PAUSE_AFTER_ERASING);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, textIndex]);

  return (
    <span className="inline-flex items-center text-[#ee6c4d] whitespace-nowrap">
      {displayText}

      {/* Moving Cursor */}
      <motion.span
        className="ml-[2px] inline-block w-[2px] h-[1em] bg-[#ee6c4d]"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
};

export default TypingText;
