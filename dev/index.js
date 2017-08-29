import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/highlight.js/styles/monokai.css';
import './styles.scss';

import Examples from './Examples';

const render = (Component) => {
  ReactDOM.render(
    <div className="container">
      <Component />
    </div>,
    document.getElementById('app'),
  );
};

render(Examples);
