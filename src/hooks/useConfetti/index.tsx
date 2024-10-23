"use client";

import { useRef, useState } from "react";

import dynamic from "next/dynamic";

import { LottieOptions, LottieRef } from "lottie-react";

import confettiData from "./confetti.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type UseConfettiProps = {
  config?: Partial<LottieOptions>;
  position?: "fixed" | "absolute";
};

export const useConfetti = ({
  config,
  position = "absolute",
}: UseConfettiProps) => {
  const [index, setIndex] = useState(config?.autoplay ? 1 : -1);
  const ref = useRef<LottieRef["current"]>(null);

  const View = (
    <Lottie
      lottieRef={ref}
      animationData={confettiData}
      loop={false}
      autoplay={false}
      style={{
        width: "100%",
        position: position,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: index,
      }}
      onComplete={() => setIndex(-1)}
      {...config}
    />
  );

  const play = async () => {
    setIndex(1);
    ref.current?.play();

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIndex(-1);
        ref.current?.stop();
        resolve();
      }, 1000);
    });
  };

  return {
    play,
    Confetti: View,
  };
};
