import "./Card.css";
import { ContentCard } from "./ContentCard/ContentCard";

export const Card = () => {
  return (
    <>
      <div className="card-container">
        <div className="repost">
          <img src="ico" alt="" />
          <h4>You reposted</h4>
        </div>

        <div className="content-container">
          <div className="user-image">
            <img src="https://static-00.iconduck.com/assets.00/python-icon-256x256-892onvae.png" alt="ser profile picture " />
          </div>
          <ContentCard />
          <div className="option-menu">
            <img src="../../src/assets/icons/option.png" alt="" />
          </div>
        </div>
        <div className="options-cards">
          <a href="#">
            <img src="../../src/assets/icons/comment.png" alt="" />
          </a>
          <a href="#">
            <img src="../../src/assets/icons/option.png" alt="" />
          </a>
          <a href="#">
            <img src="../../src/assets/icons/retweet.png" alt="" />
          </a>
          <a href="#">
            <img src="../../src/assets/icons/heart.png" alt="" />
          </a>

          <a href="#">
            <img className="last" src="../../src/assets/icons/bookmark.png" alt="" />
          </a>
          <a href="#">
            <img className="last" src="../../src/assets/icons/upload.png" alt="" />
          </a>
        </div>
      </div>
      ;
    </>
  );
};
