import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet';

import CookieConsent from './components/common/CookieConsent';
import GetCookie from './util/getCookie';
import { newVisitor } from './util/tracking';
import FrontPage from './components/pages/FrontPage';
import CookiePage from './components/pages/CookiePage';
import { RedTheme } from './theme';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = { showCookie: false, particleConfig: RedTheme };
  }
  componentDidMount() {
    newVisitor();
    if (!GetCookie()) {
      this.setState({ showCookie: true });
    }
  }

  closeCookie() {
    Cookies.set('http://www.yizhuang.fi', true, { expires: 7 });
    this.setState({ showCookie: false });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>yi zhuang</title>
          <link rel="canonical" href="http://www.yizhuang.fi" />
          <meta property="og:title" content="yi zhuang" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.yizhuang.fi" />
          <meta
            property="og:description"
            content="This is yi zhuang's personal website."
          />
        </Helmet>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/cookie" component={CookiePage} />
        </Switch>
        {this.state.showCookie ? (
          <CookieConsent closeCookie={() => this.closeCookie()} />
        ) : null}
      </div>
    );
  }
}

export default App;
