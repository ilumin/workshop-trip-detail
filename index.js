import React, { Component } from 'react';
import { render } from 'react-dom';

import Wrapper from './index.styles'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <p>
          Start editing to see some magic happen :)
        </p>
      </Wrapper>
    );
  }
}

render(<App />, document.getElementById('root'));
