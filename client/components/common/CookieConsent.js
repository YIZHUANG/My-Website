import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RenderList from '../../util/renderList';

import './CookieConsent.scss';

const CookieConsent = ({ closeCookie }) => {
  return (
    <div className="cookieConsent">
      <div className="cookieConsent-text">
        <span>
          By continuing to use this site, you agree to the use of cookies. Find
          out more by the following
          <Link to="/cookie" style={{ marginLeft: '5px' }}>
            Link
          </Link>
        </span>
        <a onClick={closeCookie} className="cookieConsent-closeBtn">
          &times;
        </a>
      </div>
    </div>
  );
};

export default CookieConsent;
