import React, { Component } from "react";

import ProjectCard from "./common/ProjectCard";
import experiencesData from "../data/experiences";
import keywordsData from "../data/keywords";
import skillsData from "../data/skills";
import { onClickExperience } from "../util/tracking";
import Card from "./common/Card";
import Modal from "./common/Modal";
import RenderList from "../util/renderList";
import Me from "./common/Me";

import "./ProjectSection.scss";
import "./Content.scss";

class Content extends Component {
  constructor() {
    super();
    this.state = { selectedItem: [], showModal: false };
  }
  render() {
    if (typeof window === "undefined") {
      return <div>...........</div>;
    }
    // don't have the time.
    const experiences = window.__PRELOADED_STATE__
      ? window.__PRELOADED_STATE__.data[0]
      : experiencesData;
    const keywords = window.__PRELOADED_STATE__
      ? window.__PRELOADED_STATE__.data[1]
      : keywordsData;
    const mainSkills = window.__PRELOADED_STATE__
      ? window.__PRELOADED_STATE__.data[2]
      : skillsData;
    const projects = window.__PRELOADED_STATE__
      ? window.__PRELOADED_STATE__.data[3]
      : [];
    const showTrelloCard = window.__PRELOADED_STATE__
      ? window.__PRELOADED_STATE__.showTrelloCard
      : true;
    return (
      <div className="main-content__container">
        <Me />
        {showTrelloCard && (
          <div className="main-content__container-profile">
            <Card title="Main skills">
              <RenderList itemList={mainSkills} />
            </Card>
            <Card title="Experiences">
              <RenderList
                itemList={experiences}
                onClick={item => {
                  onClickExperience(item.text);
                  this.setState({ selectedItem: item, showModal: true });
                }}
              />
            </Card>
            <Card title="Personal traits">
              <RenderList itemList={keywords} />
            </Card>
            <div className="project-section__container">
              {projects.map((project, index) => (
                <ProjectCard key={index} data={project} />
              ))}
            </div>
            {this.state.showModal && (
              <Modal
                item={this.state.selectedItem}
                onClose={() => this.setState({ showModal: false })}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Content;
