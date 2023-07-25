import leap from "../../../assets/wallets/leap.png";
import leapHover from "../../../assets/wallets/leap-hover.png";
import airgap from "../../../assets/wallets/airgap.png";
import airgapHover from "../../../assets/wallets/airgap-hover.png";
import dcent from "../../../assets/wallets/dcent.png";
import dcentHover from "../../../assets/wallets/dcent-hover.png";
import citadel from "../../../assets/wallets/citadel.png";
import citadelHover from "../../../assets/wallets/citadel-hover.png";
import cosmostation from "../../../assets/wallets/cosmostation.png";
import cosmostationHover from "../../../assets/wallets/cosmostation-hover.png";
import twitter from "../../../assets/home/social/twitter.svg";
import telegram from "../../../assets/home/social/telegram.svg";
import discord from "../../../assets/home/social/discord.svg";
import youtube from "../../../assets/home/social/youtube.svg";

import "./style.css";

const Community = () => {
  return (
    <>
      <div className="sustainable">
        <div className="left">
          <div className="pre-title">Community-Powered </div>
          <div className="title">BPoS Consensus Mechanism </div>
          <div className="details">
            Bitomm is the home of all the open-source developers, token holders,
            validators, and members supporting the protocol. With{" "}
            <b>on-chain governance</b>, the Bitomm community can decide on
            protocol changes and define the blockchain's future.
          </div>
        </div>
        <div className="right">
          <div className="item">
            <div className="title">99%</div>
            <div className="subtitle">Lower Carbon Footprint </div>
          </div>
        </div>
        <div className="ellipse3"></div>
      </div>
      <div className="devs-incentive">
        <div className="title">Open-Source Developers Incentivization</div>
        <div className="body">
          Built on the <b>Tendermint Core BFT</b>
          utilizing many of the Cosmos-like modules, Bitomm is destined to
          scale.
        </div>
        <div className="buttons">
          <a className="primary" href="">
            apply for a grant
          </a>
          <a className="secondary" href="">
            join the team
          </a>
        </div>
      </div>
      <div className="connect-mainnet home-connect">
        <div className="connect-wallets">
          <a
            className="wallet-button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="wallet" src={leap} />
            <img className="wallet-hover" src={leapHover} />
          </a>
          <a
            className="wallet-button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="wallet" src={airgap} />
            <img className="wallet-hover" src={airgapHover} />
          </a>
          <a
            className="wallet-button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="wallet" src={dcent} />
            <img className="wallet-hover" src={dcentHover} />
          </a>
          <a
            className="wallet-button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="wallet" src={citadel} />
            <img className="wallet-hover" src={citadelHover} />
          </a>
          <a
            className="wallet-button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="wallet" src={cosmostation} />
            <img className="wallet-hover" src={cosmostationHover} />
          </a>
        </div>
        <div className="connect-info">
          <div className="connect-title">Connect to the Bitomm Mainnet </div>
          <div className="connect-description">
            Amidst Mainnet launch, these wallets will be supporting Bitomm
            providing access to different decentralized applications and DeFi
            capabilities.
          </div>
        </div>
      </div>
      <div className="join-community section-basic">
        <div className="left">
          <div className="title">Join the Bitomm Dev Community </div>
          <div className="details">
            Follow the latest updates, participate in Hackathon events, and be
            loud across the Bitomm community channels.{" "}
          </div>
        </div>
        <div className="right">
          <a className="card" href="" target="_blank" rel="noopener noreferrer">
            <img src={twitter} />
          </a>
          <a className="card" href="" target="_blank" rel="noopener noreferrer">
            <img src={telegram} />
          </a>
          <a className="card" href="" target="_blank" rel="noopener noreferrer">
            <img src={discord} />
          </a>
          <a className="card" href="" target="_blank" rel="noopener noreferrer">
            <img src={youtube} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Community;
