import { useState } from "react";
import Logo from "../../assets/bitomm_logo.png";
import External from "../../assets/icons/external.png";
import Caret from "../../assets/icons/caret.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./style.css";

const menu = [
  {
    item: "Developers",
    subItem: [
      { internal: true, name: "Developers Hub" },
      { internal: true, name: "Validators" },
      { internal: true, name: "Grants" },
      { internal: true, name: "Exchange Integration" },
      { external: true, name: "Join The Team" },
      { external: true, name: "Bug Bounty" },
    ],
  },
  {
    item: "Ecosystem",
    subItem: [
      { internal: true, name: "Roadmap" },
      { internal: true, name: "Architecture" },
      { internal: true, name: "Projects" },
      { internal: true, name: "EGB Networks" },
      { internal: true, name: "Smart Tokens" },
      { internal: true, name: "CORE Team" },
      { external: true, name: "White Paper" },
    ],
  },
  {
    item: "Community",
    subItem: [
      { internal: true, name: "Community" },
      { internal: true, name: "Press & Media" },
      { internal: true, name: "Core Nova" },
    ],
  },
];

const Header = () => {
  const [isClick, setIsClick] = useState(null);

  const handleDropdownClick = (dataValue) => {
    setIsClick((prevValue) => (prevValue === dataValue ? null : dataValue));
  };

  return (
    <>
      {/* For Desktop */}
      <Navbar expand="lg" className="desktop-navigation dsk-only">
        <div className="ellipse1" id="header-ellipse"></div>
        <Navbar.Brand href="/">
          <img className="coreum-logo" src={Logo} alt="Bitomm Logo" />
        </Navbar.Brand>
        <div className="links-header">
          {menu &&
            menu.map((item, index) => (
              <div className="dropdown-container" key={index}>
                {item.item}
                <div className="dropdown-menu">
                  {item.subItem.map((subItem, keyIndex) => (
                    <Nav.Link key={keyIndex} href="">
                      {subItem.name}
                      {subItem.external && <img src={External} />}
                    </Nav.Link>
                  ))}
                </div>
                <img src={Caret} />
              </div>
            ))}
          <a href="" rel="noopener noreferrer">
            Explorer
            <img src={External} />
          </a>
        </div>
      </Navbar>

      {/* For Mobile */}
      <Navbar expand="lg" className="mobile-navigation mob-only">
        <Navbar.Toggle
          className="hoverable me-auto"
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Brand href="/">
          <img className="coreum-logo" src={Logo} alt="Bitomm Logo" />
        </Navbar.Brand>
        <div className="spacer"></div>
        <Navbar.Collapse className="mobile-menu" id="basic-navbar-nav">
          <div className="main-links">
            {menu &&
              menu.map((item, index) => (
                <>
                  <div
                    key={index}
                    className={"link"}
                    onClick={() => handleDropdownClick(item.item)}
                  >
                    {item.item}
                    <img
                      src={Caret}
                      className={isClick === item.item ? "active" : ""}
                    />
                  </div>
                  <div
                    className={
                      "submenu-links " + (isClick === item.item ? "show" : "")
                    }
                  >
                    {item.subItem.map((subItem, keyIndex) => (
                      <Nav.Link key={keyIndex} href="">
                        {subItem.name}
                        {subItem.external && <img src={External} />}
                      </Nav.Link>
                    ))}
                  </div>
                </>
              ))}

            <a href="" rel="noopener noreferrer">
              Explorer
              <img src={External} />
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
