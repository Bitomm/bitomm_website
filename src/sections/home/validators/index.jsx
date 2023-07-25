import Marquee from "react-fast-marquee";
import Zeeve from "../../../assets/home/partnerships/zeeve.png";
import Telios from "../../../assets/home/partnerships/telios.png";
import Dcent from "../../../assets/home/partnerships/dcent.png";
import Stably from "../../../assets/home/partnerships/stably.png";
import Common from "../../../assets/home/partnerships/common.png";
import Amber from "../../../assets/home/partnerships/amber.png";

import "./style.css";

const validatorCardsTop = [
  {
    img: Zeeve,
    href: "",
  },
  {
    img: Telios,
    href: "",
  },
  {
    img: Dcent,
    href: "",
  },
  {
    img: Stably,
    href: "",
  },
  {
    img: Common,
    href: "",
  },
  {
    img: Amber,
    href: "",
  },
  {
    img: Zeeve,
    href: "",
  },
  {
    img: Telios,
    href: "",
  },
  {
    img: Dcent,
    href: "",
  },
  {
    img: Stably,
    href: "",
  },
  {
    img: Common,
    href: "",
  },
  {
    img: Amber,
    href: "",
  },
];

const validatorCardsBottom = [
  {
    img: Zeeve,
    href: "",
  },
  {
    img: Telios,
    href: "",
  },
  {
    img: Dcent,
    href: "",
  },
  {
    img: Stably,
    href: "",
  },
  {
    img: Common,
    href: "",
  },
  {
    img: Amber,
    href: "",
  },
  {
    img: Zeeve,
    href: "",
  },
  {
    img: Telios,
    href: "",
  },
  {
    img: Dcent,
    href: "",
  },
  {
    img: Stably,
    href: "",
  },
  {
    img: Common,
    href: "",
  },
  {
    img: Amber,
    href: "",
  },
];

const Validators = () => {
  return (
    <div className="validator-types">
      <div className="title">The Bitomm Ecosystem is Growing</div>
      <div className="marquee carousel-top">
        <Marquee pauseOnHover={true} speed={150} autoFill={true}>
          <div className="validator-cards">
            {validatorCardsTop.map((validator, index) => (
              <a
                key={index}
                className="validator"
                href={validator.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="validatorImg" src={validator.img} />
              </a>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="marquee carousel-bottom">
        <Marquee
          pauseOnHover={true}
          speed={150}
          autoFill={true}
          direction="right"
        >
          <div className="validator-cards">
            {validatorCardsBottom.map((validator, index) => (
              <a
                key={index}
                className="validator"
                href={validator.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="validatorImg" src={validator.img} />
              </a>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="validator-buttons">
        <a className="coreum-btn" href="/validators">
          Validators
        </a>
        <a className="coreum-btn transparent" href="/projects">
          Projects
        </a>
      </div>
    </div>
  );
};

export default Validators;
