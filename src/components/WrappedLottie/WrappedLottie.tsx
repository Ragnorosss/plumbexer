import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import { AnimationItem } from "lottie-web";
import { RefObject } from "react";
import { LottieProps } from "react-lottie-player";

type WrappedLottieProps = {
  lottieRef?: RefObject<AnimationItem>;
} & LottieProps;

export default function WrappedLottie({
  lottieRef,
  ...props
}: WrappedLottieProps) {
  return <Lottie {...props} ref={lottieRef} />;
}
