import Logo from "../../assets/bitomm_logo.png";
import Twitter from "../../assets/social/twitter.png";
import Telegram from "../../assets/social/telegram.png";
import Discord from "../../assets/social/discord.png";
import Youtube from "../../assets/social/youtube.png";
import "./style.css";

const footerMenu = [
  {
    item: "Community",
    subItem: [
      "Core Community",
      "Press & Media",
      "Podcast",
      "Join Our Discord",
      "Join Our Twitter",
    ],
  },

  {
    item: "Resources",
    subItem: [
      "Explorer",
      "Whitepaper",
      "Airdrop Distribution",
      "Privacy Policy",
      "Contact",
    ],
  },
  {
    item: "Developers Hub",
    subItem: [
      "Developers Hub",
      "Validators",
      "Grants",
      "Exchange Integration",
      "Join The Team",
      "Bug Bounty",
    ],
  },

  {
    item: "Ecosystem",
    subItem: [
      "Roadmap",
      "Architecture",
      "Use Cases",
      "CORE Tokens",
      "CORE Team",
    ],
  },
];

const footerSocials = [
  {
    name: "Twitter",
    link: "",
    img: Twitter,
  },
  {
    name: "Telegram",
    link: "",
    img: Telegram,
  },
  {
    name: "Discord",
    link: "",
    img: Discord,
  },
  {
    name: "Youtube",
    link: "",
    img: Youtube,
  },
];

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer-body">
        <div className="logo-and-socials">
          <img className="logo" src={Logo} />
          <div className="social-icons">
            {footerSocials.map((item, index) => (
              <a key={index} href={item.link}>
                <img className="social-icon" src={item.img} />
              </a>
            ))}
          </div>
        </div>
        <div className="newsletter">
          <div className="body-main formtitle">
            Subscribe to the Bitomm Newsletter:
          </div>
          <div className="input-and-btn">
            <input
              type="email"
              placeholder="Enter your email address"
              id="newsletterEmail"
            />
            <button id="newsletterBtn">Submit</button>
          </div>
        </div>
        <div className="sitemap">
          {footerMenu &&
            footerMenu.map((item, index) => (
              <div key={index} className="column">
                <p className="subtitle">{item.item}</p>
                {item.subItem.map((subItem, keyIndex) => (
                  <a key={keyIndex} href="">
                    {subItem}
                  </a>
                ))}
              </div>
            ))}
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2021 - 2023 Bitomm Development Foundation Limited. All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
