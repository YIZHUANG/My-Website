import React from 'react';

import './Timeline.scss';

const TimeLine = () => {
  return (
    <div className="timeline-holder">
      <h1 className="timeline--title">Education & Experiences</h1>
      <div className="timeline">
        <div className="timeline_container left">
          <div className="timeline_content">
            <h5 className="timeline_header">Born</h5>
            <p>1996 April</p>
          </div>
        </div>
        <div className="timeline_container right">
          <div className="timeline_content">
            <h5 className="timeline_header">Laurea UAS</h5>
            <p>Study Business Information Technology from 2015 to 2016</p>
          </div>
        </div>
        <div className="timeline_container left">
          <div className="timeline_content">
            <h5>Laurea GameJam</h5>
            <p>
              Developed a game for promoting healthy lifestyle in team in 2015
            </p>
          </div>
        </div>
        <div className="timeline_container right">
          <div className="timeline_content">
            <h5 className="timeline_header">HK SCAN</h5>
            <p>Warehousing from 2016 March to 2017 March</p>
          </div>
        </div>
        <div className="timeline_container left">
          <div className="timeline_content">
            <h5>Coventry University</h5>
            <p>Exchange in 2016</p>
          </div>
        </div>
        <div className="timeline_container right">
          <div className="timeline_content">
            <h5>Internet of things</h5>
            <p>International project for disabled people in 2016</p>
          </div>
        </div>
        <div className="timeline_container left">
          <div className="timeline_content">
            <h5>Haaga-Helia UAS</h5>
            <p>Study Business Information Technology from 2016 to present</p>
          </div>
        </div>
        <div className="timeline_container right">
          <div className="timeline_content">
            <h5>Slush</h5>
            <p>Having one of the best time of my life as a Volunteer in 2017</p>
          </div>
        </div>
        <div className="timeline_container left">
          <div className="timeline_content">
            <h5>Coding factory 2018</h5>
            <p>Solving coding challenges on the front-end side in 2018</p>
          </div>
        </div>
        <div className="timeline_container right">
          <div className="timeline_content">
            <h5>Winner of Digia Hackathon 2018 </h5>
            <p>
              Having one of the best time of my life as the lead developer for
              building a chatbot with web integration for solving healthcare
              issues in a team.
            </p>
          </div>
        </div>
        <div className="timeline_container left">
          <div className="timeline_content">
            <h5>Futurice's Project for helping refugees in Finland</h5>
            <p>
              A Futurice open-source project to develop a language app to help
              refugees blend into Finnish culture
            </p>
          </div>
        </div>
        <div className="timeline_container right">
          <div className="timeline_content">
            <h5>Futurice's FriendShip App</h5>
            <p>
              A 5-months long Futurice open-source project using React, React
              Native, Nodejs, Postgresql
            </p>
          </div>
        </div>
        <div className="timeline_container left">
          <div className="timeline_content">
            <h5>Winner of Tieto hackathon 2018</h5>
            <p>
              As the lead developer we developed a web app prototype that helps
              improve people's financial well-being in 24 hours.{' '}
            </p>
          </div>
        </div>
        <div className="timeline_container right">
          <div className="timeline_content">
            <h5>Junction stupid hackathon 2018</h5>
            <p>
              As the lead developer we developed a full-stack React Native app
              with dialog flow intergation in 4 hours
            </p>
          </div>
        </div>
        <div className="timeline_container left">
          <div className="timeline_content">
            <h5>Code in the dark 2018</h5>
            <p>
              A front-end competition to implement a design in 15 mins using
              pure html and css with no preview allowed
            </p>
          </div>
        </div>
        <div className="timeline_container right">
          <div className="timeline_content">
            <h5>Front-end developer in Elisa</h5>
            <p>
              As a front-end developer, i am developing the largest online book
              store Elisa kirja in Finland using React, Redux and Sass daily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
