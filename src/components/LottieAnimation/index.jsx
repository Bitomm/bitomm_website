import Lottie from "react-lottie-player";

const LottieAnimation = ({
  className,
  src,
  speed,
  width,
  height,
  loop,
  autoplay,
}) => {
  return (
    <Lottie
      className={className}
      animationData={src}
      speed={speed}
      loop={loop}
      play={autoplay}
      style={{ width: width, height: height }}
    />
  );
};

export default LottieAnimation;
