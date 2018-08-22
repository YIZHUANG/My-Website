import React from "react";
import "./Me.scss";

const Me = () => {
  const canShowDataFromContentful =
    typeof window !== "undefined" && window.__PRELOADED_STATE__;
  return (
    <div className="description_me">
      <h1 className="description_me-title">Hello world !</h1>
      <p className="description_me-intro">
        {canShowDataFromContentful
          ? window.__PRELOADED_STATE__.introTitle
          : "I am Yi, currently working as a software developer mostly with JavaScript."}
      </p>
      <p
        style={{ marginTop: 20, marginBottom: 40 }}
        className="description_me-intro"
      >
        {canShowDataFromContentful
          ? window.__PRELOADED_STATE__.introText
          : "I interact with React, Vue, Redux, Css daily with a strong focus on writing clean and maintainable code."}
      </p>
    </div>
  );
};

export default Me;
