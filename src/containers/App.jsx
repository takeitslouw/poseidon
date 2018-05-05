import React, { Component } from 'react';

import Landing from '../components/Landing/Landing';
import Info from '../components/Info/Info';
import Detail from '../components/Detail/Detail';
import Quote from '../components/Quote/Quote';
import VA from '../components/VA/VA';
import Gifts from '../components/Gifts/Gifts';
import RSVP from '../components/RSVP/RSVP';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Info />
        <Detail />
        <Quote />
        <VA />
        <Gifts />
        <RSVP />
      </div>
    );
  }
}

export default App;
