import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart, faPlay, faRetweet, faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import IconLabel from './IconLabel';


class PlaysLabel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <IconLabel faIcon={"heart"} text={this.props.plays} />
    )
  }
}

export default PlaysLabel;