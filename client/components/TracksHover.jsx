import React from 'react';
import Dots from './Dots';
import HeartBox from './HeartBox';
import PlayTracksIcon from './PlayTracksIcon';

class TracksHover extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span>
        <span style={{ align: "left", display: "inline-block", verticalAlign: "middle" }}><PlayTracksIcon /></span>
        <span style={{ align: "right", display: "inline-block", verticalAlign: "middle" }}><HeartBox /></span>
        <span style={{ align: "right", display: "inline-block", verticalAlign: "middle" }}><Dots /></span>
      </span>
    )
  }
}

export default TracksHover;