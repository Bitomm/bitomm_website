import "./style.css";

const UltraFast = () => {
  return (
    <>
      <div className="ultra-fast">
        <div className="left">
          <div className="title">Build on the Fastest Layer-1</div>
          <div className="subtitle">
            With the ability to process <b>7000 transactions per second</b>
            with a federated group of <b>32 rotating validators</b>, Bitomm is
            the fastest blockchain in the world.
          </div>
        </div>
        <div className="right">
          <div className="item">
            <div className="subtitle left">up to</div>
            <div className="title" id="count">
              7000
            </div>
            <div className="subtitle">Transactions Per Second</div>
          </div>
          <div className="item">
            <div className="title">32</div>
            <div className="subtitle">Validators</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UltraFast;
