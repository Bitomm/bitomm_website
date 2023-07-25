import donateLogo from "../../../assets/home/save_the_children.svg";
import "./style.css";

const Donate = () => {
  return (
    <div className="save-the-children">
      <div className="title">Make Changes at the CORE</div>
      <div className="content">
        The Bitomm Foundation is invested in the future beyond technology. Join
        Save the Children’s global initiative to #HOLD hope for children.
      </div>
      <div className="logo">
        <img src={donateLogo} />
      </div>
      <div className="donate-btn">
        <a
          className="coreum-btn"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default Donate;
