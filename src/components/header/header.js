import React from 'react';

import './header.css';

export default class Header extends React.Component {

  render() {
    return (
      <div className="header d-flex ">
        <h3>
          <span>
            StarDB
          </span>
        </h3>
        <ul className="d-flex ">
          <li>
            <span>People</span>
          </li>
          <li>
            {/* // щас объясню почему я это делаю */}
            <span>Planets</span>
          </li>
          <li>
            <span >Starships</span>
          </li>
        </ul>
      </div>
    );
  }

}