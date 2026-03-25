"use client";

import Typewriter, { type Options } from "typewriter-effect";

type Props = {
  options?: Partial<Options>;
  className?: string;
  cursorClassName?: string;
};

export default function TypewriterText({
  options,
  className = "",
  cursorClassName = "",
}: Props) {
  const mergedOptions: Partial<Options> = {
    autoStart: true,
    loop: true,
    delay: 50,
    deleteSpeed: 30,
    cursor: "▯",
    skipAddStyles: true,
    ...options,
    wrapperClassName: ["typewriter-wrapper", className, options?.wrapperClassName]
      .filter(Boolean)
      .join(" "),
    cursorClassName: ["typewriter-cursor", cursorClassName, options?.cursorClassName]
      .filter(Boolean)
      .join(" "),
  };

  return <Typewriter options={mergedOptions} />;
}
