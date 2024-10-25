"use client";

import { TabType } from "@/constants";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { ComponentPropsWithRef, useEffect, useRef } from "react";

//Feature tab
const FeatureTab = (
  props: TabType[number] & ComponentPropsWithRef<"div"> & { selected: boolean },
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(50);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className="border border-white/15 flex lg:flex-1 p-2.5 rounded-xl gap-2.5 items-center relative cursor-pointer"
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 border border-[#A369FF] rounded-xl  -m-px"
        />
      )}

      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex justify-center items-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={props.icon}
          className="h-5 w-5"
        />
      </div>
      <div className="font-medium">{props.title}</div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
};

export default FeatureTab;
