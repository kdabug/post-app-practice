import "./style.css";
import React from "react";
import Tweet from "./Tweet";

const TweetList = props => {
  const { tweetData } = props;
  return (
    <div className="c-list__container">
      {tweetData.map((el, index) => (
        <Tweet key={index} articleData={el} />
      ))}
    </div>
  );
};
export default TweetList;
