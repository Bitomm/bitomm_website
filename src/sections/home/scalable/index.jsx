import LottieAnimation from "../../../components/LottieAnimation";
import LottieHeartbeat from "../../../assets/animations/lottie-heartbeat.json";

import "./style.css";
const Scalable = () => {
  return (
    <>
      <div className="scalable">
        <LottieAnimation
          className="lottie-player"
          src={LottieHeartbeat}
          speed={1}
          width={"100%"}
          height={"100%"}
          loop={true}
          autoplay={true}
        />
        <div className="container">
          <div className="info">
            <div className="pre-title">
              Open-Source Developers Incentivization{" "}
            </div>
            <div className="title">Scale With No Limits </div>
            <div className="details">
              Using the well-established <b>Tendermint Consensus Engine</b>
              and <b>Cosmos SDK</b>
              , Bitomm brings a low-latency proof-of-stake blockchain. <br />
              <b>More powerful, more efficient than proof-of-work. </b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scalable;
