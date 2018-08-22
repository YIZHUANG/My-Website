import React, { Component } from "react";

import Header from "../Header";
import TimeLine from "../common/Timeline";
import Content from "../Content";
import ProjectSection from "../ProjectSection";

const FrontPage = () => {
  return (
    <div>
      <Header />
      <Content />
      {typeof window !== "undefined" && window.__PRELOADED_STATE__ ? (
        <span
          dangerouslySetInnerHTML={{
            __html: window.__PRELOADED_STATE__.timeline
          }}
        />
      ) : (
        <TimeLine />
      )}
      <ProjectSection />
    </div>
  );
};

export default FrontPage;
