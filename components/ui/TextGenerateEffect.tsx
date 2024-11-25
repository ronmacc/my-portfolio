"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const lastTwoWordsIndex = wordsArray.length - 2;

  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: File ? "blur(0px)" : "none",
    }, {
      duration: 1.3,
      delay: stagger(0.27),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={` ${idx > 1 ? "text-purple" : "dark:text-white text-black"
                } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black text-5xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
