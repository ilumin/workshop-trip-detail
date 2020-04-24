import React, { Component } from 'react';
import { render } from 'react-dom';

import Wrapper from './index.styles'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <div className="card">

          <div className="header">
            <div className="header-content">
              <h2 className="location" id="location-name">Berlin</h2>
              <div className="route-status" id="route-status">in route</div>
              <div className="day-counter">
                <span className="badge">4</span>
                day trip
              </div>
            </div>
            <div className="header-bg"></div>
            <a href="#" className="button-join" id="button-join">join</a>
          </div>

          <div className="body">
            <div className="next-trip">
              <span className="label">Next trip</span>
              <a href="#" className="from">Berlin</a>
              <a href="#" className="to">Prague</a>
            </div>
            <div className="content">
              <p>asdasdasdasdasd</p>
            </div>
            <ul className="liked-profiles">
              <li><a href="#" className="profile"><img className="avatar" /></a></li>
              <li><a href="#" className="view-more" id="view-more">+2</a></li>
            </ul>
            <ul className="tools">
              <li><a href="#" className="tool tool-like" id="tool-like">like</a></li>
              <li><a href="#" className="tool tool-share" id="tool-share">share</a></li>
              <li><a href="#" className="tool tool-save" id="tool-save">save</a></li>
            </ul>
          </div>

        </div>
      </Wrapper>
    );
  }
}

render(<App />, document.getElementById('root'));
