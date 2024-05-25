import Header from "../components/Header";
import BioContent from "../components/BioContent";
import GridContainer from "../components/GridContainer";
import BottomNavUserEcosystem from "../components/BottomNavUserEcosystem";
import "./Store.css";

const Store = () => {
  return (
    <div className="store">
      <Header />
      <img
        className="profile-picture-icon"
        loading="lazy"
        alt=""
        src="/profile-picture.svg"
      />
      <div className="stats">
        <div className="stats-containers">
          <div className="instagram-icon-parent">
            <img
              className="instagram-icon"
              loading="lazy"
              alt=""
              src="/instagram-icon.svg"
            />
            <div className="follower-count">
              <b className="m">1M</b>
              <div className="followers">followers</div>
            </div>
          </div>
          <div className="youtube-icon-parent">
            <img
              className="youtube-icon"
              loading="lazy"
              alt=""
              src="/youtube-icon.svg"
            />
            <div className="subscriber-count">
              <b className="k">220K</b>
              <div className="subscriber-label">
                <div className="subscribers">Subscribers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="store-child" />
      <section className="bio-container">
        <BioContent />
        <GridContainer />
      </section>
      <BottomNavUserEcosystem />
    </div>
  );
};

export default Store;
