"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "motion/react";
import { cn } from "@/lib/cn";

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  borderRadius?: string;
  offset?: number;
  [key: string]: unknown;
}

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  borderRadius = "1.75rem",
  offset = 0,
  ...otherProps
}: MovingBorderProps) {
  return (
    <Component
      className={cn(
        "relative h-12 overflow-hidden bg-transparent p-[1px] text-sm",
        containerClassName,
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorderAnimation duration={duration} offset={offset}>
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(var(--color-copper)_40%,transparent_60%)] opacity-80",
              borderClassName,
            )}
          />
        </MovingBorderAnimation>
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center bg-white text-sm antialiased backdrop-blur-xl",
          className,
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
}

function MovingBorderAnimation({
  children,
  duration = 2000,
  offset = 0,
}: {
  children: React.ReactNode;
  duration?: number;
  offset?: number;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set(((time + offset) * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) => {
    const moveInfo = pathRef.current?.getPointAtLength(val);
    return moveInfo ? moveInfo.x : 0;
  });
  const y = useTransform(progress, (val) => {
    const moveInfo = pathRef.current?.getPointAtLength(val);
    return moveInfo ? moveInfo.y : 0;
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx="50%"
          ry="50%"
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}
      >
        {children}
      </motion.div>
    </>
  );
}
