import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Particles from "react-particles-js";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";

import ChatBot from "./components/common/Chatbot";
import CookieConsent from "./components/common/CookieConsent";
import GetCookie from "./util/getCookie";
import { newVisitor } from "./util/tracking";
import { RedTheme } from "./theme";
import Routes from "./Routes";

import "./App.scss";

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
    Cookies.set("https://www.yizhuang.fi", true, { expires: 60 });
    this.setState({ showCookie: false });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            yi zhuang - software developer/front-end developer/full-stack
            developer
          </title>
          <link rel="canonical" href="https://yizhuang.fi" />
          <meta
            property="og:title"
            content="yi zhuang - software developer/front-end developer/full-stack developer"
          />
          <meta
            name="keywords"
            content="React,React Native,JavaScript,Front-end,
Full-stack,Back-end,Css,SCSS,Contentful,Webpack,Helsinki,Finland,Html"
          />
          <meta
            property="og:site_name"
            content="yi zhuang&#39;s blog/website"
          />
          <meta name="author" content="Yi Zhuang" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yizhuang.fi" />
          <meta
            name="description"
            content="yi zhuang is a software developer/front-end developer/full-stack developer living in Helsinki, Finland."
          />
          <meta
            property="og:description"
            content="yi zhuang is a software developer/front-end developer/full-stack developer living in Helsinki, Finland."
          />
        </Helmet>
        <Switch>
          {Routes.map(({ path, component, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
          ))}
        </Switch>
        {this.state.showCookie ? (
          <CookieConsent closeCookie={() => this.closeCookie()} />
        ) : null}
        {typeof window !== "undefined" && <ChatBot />}
      </div>
    );
  }
}

export default App;
