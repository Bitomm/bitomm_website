import LottieAnimation from "../../../components/LottieAnimation";
import LottieLanding from "../../../assets/animations/lottie-landing.json";
import LottieGreenArrow from "../../../assets/animations/lottie-green-arrow.json";

import "./style.css";
const HomeHero = () => {
  return (
    <>
      <div className="home-hero">
        <LottieAnimation
          className="lottie-player"
          src={LottieLanding}
          speed={1}
          width={"100%"}
          height={"100%"}
          loop={true}
          autoplay={true}
        />
        <div className="hero-text">
          <h1 className="hero-title">Enterprise Grade Blockchain</h1>
          <h2 className="hero-subtitle">
            Modular, Fast, Secure and Interoperable
          </h2>
        </div>
        <LottieAnimation
          className="lottie-player arrow"
          src={LottieGreenArrow}
          speed={1}
          width={"128px"}
          height={"128px"}
          loop={true}
          autoplay={true}
        />
      </div>
      <div className="links">
        <a className="coreum-btn" href="">
          Start Building
        </a>
      </div>
    </>
  );
};

export default HomeHero;
