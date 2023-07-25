import "./style.css";

const HomeIntro = () => {
  return (
    <>
      <div className="home-intro">
        <p>
          Bitomm is the first <b>EGB</b>. A new generation of blockchains that
          is geared towards enterprise needs in compliance with{" "}
          <a href="" rel="noopener noreferrer">
            <span>ISO20022</span>
          </a>
          . Launch DeFi applications and protocols for businesses of any size.
        </p>
        <a className="coreum-btn transparent action" href="">
          {"What's EGB?"}
        </a>
      </div>
      <div className="meet-coreum">
        <div className="meet-text">MEET BITOMM</div>
        <iframe
          src="https://www.youtube.com/embed/36ASVQWz4yg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </div>
      <div className="smart-tokens-container">
        <div className="st-box">
          <div className="st-graphic"></div>
          <div className="st-info">
            <div className="st-title">Smart Tokens</div>
            <div className="st-body">
              Token issuance just got a lot more <b>powerful</b>. Tackle the
              next generation of Blockchain-based assets, supercharged with{" "}
              <b>Smart Contracts</b>.
            </div>
            <a className="st-action" href="/smart-tokens">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIntro;
