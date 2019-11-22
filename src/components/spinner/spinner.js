import React from 'react';
import './spinner.css'
export default class Spinner extends React.Component {

    render() {
        return (
            <div className="lds-css">
            <div className="lds-double-ring">
              <div></div>
              <div></div>
            </div>
          </div>
        )
    }
}