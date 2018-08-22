import React, { Component } from 'react';

import Header from '../Header';
import TimeLine from '../common/Timeline';
import Content from '../Content';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <TimeLine />
      </div>
    );
  }
}

export default FrontPage;
