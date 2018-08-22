import React from 'react';
import './BasicInfo.scss';

import {
  onClickLinkedin,
  onCLickGithub,
  onClickInstagram
} from '../../util/tracking';

const BasicInfo = ({ onScroll }) => {
  return (
    <div className="BasicInfo">
      <h1 className="BasicInfo--name">Yi Zhuang</h1>
      <div className="BasicInfo--title">Software developer</div>
      <div className="BasicInfo--icons_container">
        <a
          href="https://github.com/YIZHUANG"
          onClick={() => onClickLinkedin()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/yi-zhuang-b7239b114/"
          target="_blank"
          onClick={() => onCLickGithub()}
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" />
        </a>
        <a
          href="https://www.instagram.com/rollingthebeatles/"
          onClick={() => onClickInstagram()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram" />
        </a>
      </div>
      <div onClick={() => onScroll()} className="BasicInfo--down_container">
        <i className="icon fa fa-chevron-down" />
      </div>
    </div>
  );
};

export default BasicInfo;
