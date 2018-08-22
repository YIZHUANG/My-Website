import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

import Buttons from './common/Buttons';
import GetCookie from '../util/getCookie';
import { DownLoadCV, onClickThemeChange } from '../util/tracking';
import BasicInfo from './common/BasicInfo';
import Themes from '../data/themes';
import { RedTheme } from '../theme';

import './Header.scss';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      showCookie: false,
      particleConfig: RedTheme,
      showDropDown: false
    };
  }

  changeTheme(theme, bg) {
    this.setState({ particleConfig: theme, showDropDown: false });
    const wrapper = document.getElementsByClassName('wrapper')[0];
    wrapper.style.background = bg;
  }

  onScroll() {
    const contentPosition = document
      .getElementsByClassName('description_me')[0]
      .getBoundingClientRect().top;
    window.scrollTo(0, contentPosition);
  }
  render() {
    return (
      <div className="header">
        <Particles
          params={this.state.particleConfig}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
        <Buttons
          onDropDownClick={() =>
            this.setState({ showDropDown: !this.state.showDropDown })
          }
          GetCookie={() => GetCookie()}
          onClickThemeChange={() => onClickThemeChange()}
          showDropDown={this.state.showDropDown}
          DownLoadCV={() => DownLoadCV()}
          Themes={Themes}
          changeTheme={(theme, bg, name) => this.changeTheme(theme, bg, name)}
        />
        <BasicInfo onScroll={() => this.onScroll()} />
      </div>
    );
  }
}
