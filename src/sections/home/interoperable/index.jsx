import Graphic2 from "../../../assets/home/graphic2.png"
import "./style.css";

const Interoperable = () => {
  return (
    <>
      <div className="interoperable">
        <div className="left">
          <div className="title">Smart Contracts</div>
          <div className="details">
            Applications can be written in many languages and compiled into the
            modern turing-complete <b>Web Assembly (WASM)</b>
            before processing.
            <br />
            <br />
            <b>CosmWasm:</b>A multi-chain solution to build and run contracts on
            the whole cosmos ecosystem.
          </div>
        </div>
        <div className="right">
          <div className="pre-title">Web Assembly </div>
          <div className="title">WASM </div>
          <div className="subtitle">Smart Contract</div>
        </div>
        <img src={Graphic2} />
        <div className="container">
          <div className="info">
            <div className="title">A Multi-Chain Future </div>
            <div className="details">
              With hundreds of Blockchains currently being used, Bitomm deploys
              a <b>bridge functionality</b>
              to interoperate with various chains through{" "}
              <b>collateralized wrapping</b>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interoperable;
