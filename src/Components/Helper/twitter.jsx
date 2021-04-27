// TwitterContainer.js
import React, { useEffect } from "react";

const TwitterContainer = () => {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "light");
    anchor.setAttribute("data-tweet-limit", "8");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("href", "https://twitter.com/balint_apro");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div className="inner-cont">
      <div className="decor">
        <div className="twitter-embed"></div>
      </div>
    </div>
  );
};

export default TwitterContainer;