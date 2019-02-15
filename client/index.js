import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart, faPlay, faRetweet, faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);
library.add(faPlay);
library.add(faRetweet);
library.add(faCommentAlt);

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
